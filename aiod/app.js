/* AIOD frontend connection
 * Connects the existing AIOD page to the Render API.
 * Only displays metadata returned by the backend; it does not bypass
 * platform restrictions or create unauthorized download links.
 */
(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.querySelector(".theme-label");
  const form = document.getElementById("analyzeForm");
  const input = document.getElementById("mediaUrl");
  const clearBtn = document.getElementById("clearBtn");
  const resultBox = document.getElementById("resultBox");
  const API_BASE_URL = "https://aiod-backend-qira.onrender.com";
  const ANALYZE_ENDPOINT = `${API_BASE_URL}/api/analyze`;
  const analyzeButton = form
    ? form.querySelector('button:not([type]), button[type="submit"], input[type="submit"]')
    : null;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === "dark";
    if (themeIcon) themeIcon.textContent = isDark ? "☀" : "☾";
    if (themeLabel) themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = isDark ? "#0b1020" : "#f6f7fb";
    try { localStorage.setItem("aiod-theme", theme); } catch (_) {}
  }

  let savedTheme = "dark";
  try { savedTheme = localStorage.getItem("aiod-theme") || "dark"; } catch (_) {}
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  // Keep the new preview visually consistent without requiring changes to style.css.
  if (!document.getElementById("aiod-preview-styles")) {
    const style = document.createElement("style");
    style.id = "aiod-preview-styles";
    style.textContent = `
      .aiod-video-preview{display:grid;grid-template-columns:minmax(110px,180px) 1fr;gap:14px;align-items:start;margin-top:12px;padding:12px;border:1px solid var(--border,#2b3650);border-radius:14px;background:rgba(127,127,127,.06)}
      .aiod-video-preview img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:9px;background:#111827}
      .aiod-video-title{font-weight:700;line-height:1.4;margin:2px 0 7px;overflow-wrap:anywhere}
      .aiod-video-meta{font-size:.88em;opacity:.78;line-height:1.5}
      .aiod-video-tag{display:inline-block;font-size:.72em;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#20cbb6;margin-bottom:5px}
      .aiod-status-note{font-size:.88em;line-height:1.5;margin-top:10px}
      .aiod-audio-preview{display:grid;gap:9px;margin-top:12px;padding:12px;border:1px solid var(--border,#2b3650);border-radius:12px;background:rgba(127,127,127,.06)}
      .aiod-audio-preview strong{color:var(--text)}
      .aiod-audio-preview audio{display:block;width:100%;max-width:100%;margin-top:3px}
      .aiod-audio-meta{font-size:.82em;line-height:1.5;color:var(--muted);overflow-wrap:anywhere}
      .aiod-direct-video{display:grid;gap:9px;margin-top:12px;padding:12px;border:1px solid var(--border,#2b3650);border-radius:12px;background:rgba(127,127,127,.06)}
      .aiod-direct-video strong{color:var(--text)}
      .aiod-direct-video video{display:block;width:100%;max-height:420px;aspect-ratio:16/9;object-fit:contain;background:#05070d;border-radius:9px}
      .aiod-direct-video-meta{font-size:.82em;line-height:1.5;color:var(--muted);overflow-wrap:anywhere}
      @media(max-width:520px){.aiod-video-preview{grid-template-columns:1fr}.aiod-video-preview img{max-width:100%}}
    `;
    document.head.appendChild(style);
  }

  function clearResult() {
    if (!resultBox) return;
    resultBox.hidden = true;
    resultBox.classList.remove("error");
    resultBox.replaceChildren();
  }

  function showResult(message, isError = false, heading = "") {
    if (!resultBox) return;
    resultBox.replaceChildren();
    resultBox.hidden = false;
    resultBox.classList.toggle("error", isError);

    if (heading) {
      const strong = document.createElement("strong");
      strong.textContent = heading;
      resultBox.appendChild(strong);
      resultBox.appendChild(document.createElement("br"));
    }
    resultBox.appendChild(document.createTextNode(message));
  }

  function showDownloadOptions(options) {
    if (!resultBox || !Array.isArray(options) || !options.length) return;
    const section = document.createElement("section");
    section.className = "aiod-download-options";
    const heading = document.createElement("h3");
    heading.textContent = "Available authorized file";
    section.appendChild(heading);

    options.forEach((option) => {
      if (!option || typeof option.url !== "string") return;
      let safeUrl;
      try {
        safeUrl = new URL(option.url);
        if (safeUrl.protocol !== "https:" && safeUrl.protocol !== "http:") return;
      } catch (_) { return; }

      const row = document.createElement("div");
      row.className = "aiod-download-row";
      const details = document.createElement("div");
      const label = document.createElement("strong");
      label.textContent = option.label || `Original ${option.format || "media"} file`;
      details.appendChild(label);
      const meta = document.createElement("span");
      const sizeBytes = Number.isSafeInteger(option.sizeBytes) && option.sizeBytes >= 0 ? option.sizeBytes : null;
      const actualSize = sizeBytes === null
        ? "Size not provided by source"
        : sizeBytes < 1024 * 1024
          ? (sizeBytes / 1024).toFixed(1) + " KB"
          : (sizeBytes / (1024 * 1024)).toFixed(2) + " MB";
      const mimeType = typeof option.mimeType === "string" ? option.mimeType : "";
      const filename = typeof option.filename === "string" ? option.filename : "";
      const detailsText = [option.description, filename, mimeType, actualSize]
        .filter(Boolean)
        .filter((value, index, list) => list.indexOf(value) === index)
        .join(" · ");
      meta.textContent = detailsText || "Original source file · size not provided by host";
      details.appendChild(meta);
      const link = document.createElement("a");
      link.href = safeUrl.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Open / save ↗";
      link.className = "aiod-download-link";
      link.setAttribute("aria-label", `Open or save ${label.textContent}`);
      row.append(details, link);
      section.appendChild(row);
    });

    if (section.querySelector("a")) {
      const note = document.createElement("p");
      note.className = "aiod-download-footnote";
      note.textContent = "This opens the original file from its host. Your browser or the host decides whether it downloads directly or opens a preview. AIOD does not re-host or convert this file.";
      section.appendChild(note);
      resultBox.appendChild(section);
    }
  }

  function showAudioPreview(media, hostname, message, downloadOptions) {
    if (!resultBox) return;

    resultBox.replaceChildren();
    resultBox.hidden = false;
    resultBox.classList.remove("error");

    const heading = document.createElement("strong");
    heading.textContent = "Source recognized: Direct media file";
    resultBox.appendChild(heading);

    const note = document.createElement("p");
    note.className = "aiod-status-note";
    note.textContent = message || "An audio file was verified from its original host.";
    resultBox.appendChild(note);

    const option = Array.isArray(downloadOptions)
      ? downloadOptions.find((item) => item && typeof item.url === "string")
      : null;
    if (!option) return;

    let safeUrl;
    try {
      safeUrl = new URL(option.url);
      if (!["https:", "http:"].includes(safeUrl.protocol)) return;
    } catch (_) { return; }

    const preview = document.createElement("div");
    preview.className = "aiod-audio-preview";

    const title = document.createElement("strong");
    title.textContent = option.filename || media.filename || ("Original " + (media.format || "audio") + " file");
    preview.appendChild(title);

    const meta = document.createElement("div");
    const sizeBytes = Number.isSafeInteger(option.sizeBytes) && option.sizeBytes >= 0
      ? option.sizeBytes
      : null;
    const sizeLabel = sizeBytes === null
      ? "Size not provided by source"
      : sizeBytes < 1024 * 1024
        ? (sizeBytes / 1024).toFixed(1) + " KB"
        : (sizeBytes / (1024 * 1024)).toFixed(2) + " MB";
    meta.className = "aiod-audio-meta";
    meta.textContent = [
      media.format || option.format || "Audio",
      media.mimeType || option.mimeType || "",
      sizeLabel,
      hostname ? "Host: " + hostname : ""
    ].filter(Boolean).join(" · ");
    preview.appendChild(meta);

    const player = document.createElement("audio");
    player.controls = true;
    player.preload = "metadata";
    player.src = safeUrl.href;
    player.setAttribute("aria-label", "Preview authorized audio file");
    preview.appendChild(player);

    resultBox.appendChild(preview);
  }

  function showDirectVideoPreview(media, hostname, message, downloadOptions) {
    if (!resultBox) return;

    resultBox.replaceChildren();
    resultBox.hidden = false;
    resultBox.classList.remove("error");

    const heading = document.createElement("strong");
    heading.textContent = "Source recognized: Direct media file";
    resultBox.appendChild(heading);

    const note = document.createElement("p");
    note.className = "aiod-status-note";
    note.textContent = message || "A direct video file was verified from its original host.";
    resultBox.appendChild(note);

    const option = Array.isArray(downloadOptions)
      ? downloadOptions.find((item) => item && typeof item.url === "string")
      : null;
    if (!option) return;

    let safeUrl;
    try {
      safeUrl = new URL(option.url);
      if (!["https:", "http:"].includes(safeUrl.protocol)) return;
    } catch (_) { return; }

    const preview = document.createElement("div");
    preview.className = "aiod-direct-video";

    const title = document.createElement("strong");
    title.textContent = option.filename || media.filename || ("Original " + (media.format || "video") + " file");
    preview.appendChild(title);

    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.src = safeUrl.href;
    video.setAttribute("aria-label", "Preview authorized video file");
    preview.appendChild(video);

    const meta = document.createElement("div");
    meta.className = "aiod-direct-video-meta";
    const sizeBytes = Number.isSafeInteger(option.sizeBytes) && option.sizeBytes >= 0
      ? option.sizeBytes
      : (Number.isSafeInteger(media.sizeBytes) && media.sizeBytes >= 0 ? media.sizeBytes : null);
    const sizeLabel = sizeBytes === null
      ? "Size not provided by source"
      : sizeBytes < 1024 * 1024
        ? (sizeBytes / 1024).toFixed(1) + " KB"
        : (sizeBytes / (1024 * 1024)).toFixed(2) + " MB";
    const details = [
      media.format || option.format || "Video",
      media.mimeType || option.mimeType || "",
      sizeLabel,
      hostname ? "Host: " + hostname : ""
    ];
    meta.textContent = details.filter(Boolean).join(" · ");
    preview.appendChild(meta);

    video.addEventListener("loadedmetadata", () => {
      const duration = Number.isFinite(video.duration)
        ? Math.floor(video.duration / 60) + ":" + String(Math.floor(video.duration % 60)).padStart(2, "0")
        : "";
      const dimensions = video.videoWidth && video.videoHeight
        ? video.videoWidth + " × " + video.videoHeight
        : "";
      const updated = [
        media.format || option.format || "Video",
        dimensions,
        duration ? "Duration " + duration : "",
        sizeLabel,
        hostname ? "Host: " + hostname : ""
      ];
      meta.textContent = updated.filter(Boolean).join(" · ");
    }, { once: true });

    video.addEventListener("error", () => {
      const warning = document.createElement("p");
      warning.className = "aiod-status-note";
      warning.textContent = "The browser could not preview this video format. Use Open / save below to open the original file from its host.";
      preview.appendChild(warning);
    }, { once: true });

    resultBox.appendChild(preview);
  }

  function showVideoPreview(video, platform, hostname, message, downloadAvailable) {
    if (!resultBox) return;

    resultBox.replaceChildren();
    resultBox.hidden = false;
    resultBox.classList.remove("error");

    const heading = document.createElement("strong");
    heading.textContent = `Source recognized: ${platform}`;
    resultBox.appendChild(heading);

    const preview = document.createElement("div");
    preview.className = "aiod-video-preview";

    const thumbnail = video && (video.thumbnailUrl || video.thumbnail || video.thumbnail_url);
    if (typeof thumbnail === "string" && /^https:\/\//i.test(thumbnail)) {
      const image = document.createElement("img");
      image.src = thumbnail;
      image.alt = "Video thumbnail";
      image.loading = "lazy";
      image.referrerPolicy = "no-referrer";
      image.onerror = () => image.remove();
      preview.appendChild(image);
    }

    const info = document.createElement("div");
    const tag = document.createElement("div");
    tag.className = "aiod-video-tag";
    tag.textContent = video && video.provider ? String(video.provider) : platform;
    info.appendChild(tag);

    const title = document.createElement("div");
    title.className = "aiod-video-title";
    title.textContent = video && video.title ? String(video.title) : "Video details loaded";
    info.appendChild(title);

    const channelValue = video && (video.channel || video.channelName || video.author || video.uploader);
    if (channelValue) {
      const channel = document.createElement("div");
      channel.className = "aiod-video-meta";
      channel.textContent = `Channel: ${String(channelValue)}`;
      info.appendChild(channel);
    }

    const host = document.createElement("div");
    host.className = "aiod-video-meta";
    host.textContent = `Host: ${hostname}`;
    info.appendChild(host);
    preview.appendChild(info);
    resultBox.appendChild(preview);

    const note = document.createElement("div");
    note.className = "aiod-status-note";
    note.textContent = message || (downloadAvailable
      ? "An authorized download provider is available."
      : "Video details loaded. Downloading is not enabled because an authorized provider has not been configured.");
    resultBox.appendChild(note);
  }

  if (clearBtn && input && resultBox) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearResult();
      input.focus();
    });
  }

  function detectPlatform(url) {
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (host === "youtube.com" || host === "youtu.be" || host.endsWith(".youtube.com")) return "YouTube";
    if (host === "instagram.com" || host.endsWith(".instagram.com")) return "Instagram";
    if (host === "facebook.com" || host === "fb.watch" || host.endsWith(".facebook.com")) return "Facebook";
    if (host === "tiktok.com" || host.endsWith(".tiktok.com")) return "TikTok";
    if (host === "t.me" || host === "telegram.me" || host.endsWith(".telegram.org")) return "Telegram";
    return "Direct / other link";
  }

  function setAnalyzing(isAnalyzing) {
    if (!analyzeButton) return;
    if (isAnalyzing) {
      analyzeButton.dataset.originalText = analyzeButton.textContent.trim();
      analyzeButton.disabled = true;
      analyzeButton.textContent = "Analyzing…";
      analyzeButton.setAttribute("aria-busy", "true");
    } else {
      analyzeButton.disabled = false;
      analyzeButton.removeAttribute("aria-busy");
      const originalText = analyzeButton.dataset.originalText;
      if (originalText) analyzeButton.textContent = originalText;
    }
  }

  if (form && input && resultBox) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const raw = input.value.trim();

      if (!raw) {
        showResult("Please paste a URL first.", true);
        return;
      }

      let url;
      try {
        url = new URL(raw);
        if (!["http:", "https:"].includes(url.protocol)) throw new Error("Unsupported protocol");
      } catch (_) {
        showResult("That does not look like a valid HTTP or HTTPS link. Please check it and try again.", true);
        return;
      }

      const detectedPlatform = detectPlatform(url);
      setAnalyzing(true);
      showResult("Contacting the AIOD server and checking this link…", false, "Analyzing link");

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      try {
        const response = await fetch(ANALYZE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ url: url.href }),
          signal: controller.signal,
          mode: "cors",
          credentials: "omit"
        });

        let data;
        try { data = await response.json(); }
        catch (_) { throw new Error("The AIOD server returned an unreadable response."); }

        if (!response.ok || data.ok === false) {
          throw new Error(data.message || `The server returned HTTP ${response.status}.`);
        }

        const platform = data.platform || detectedPlatform;
        const hostname = data.hostname || url.hostname;

        if (data.supportedForAnalysis !== true) {
          showResult(data.message || "This source is not currently supported for analysis.", false, "Link checked");
          return;
        }

        const video = data.video && typeof data.video === "object" ? data.video : null;
        if (data.media && data.media.kind === "video" && data.downloadAvailable === true) {
          showDirectVideoPreview(data.media, hostname, data.message, data.downloadOptions);
          showDownloadOptions(data.downloadOptions);
        } else if (video && video.available === true) {
          showVideoPreview(
            video,
            platform,
            hostname,
            data.message,
            data.downloadAvailable === true
          );
          showDownloadOptions(data.downloadOptions);
        } else if (data.downloadAvailable === true || (Array.isArray(data.downloadOptions) && data.downloadOptions.length)) {
          if (data.media && data.media.kind === "audio") {
            showAudioPreview(data.media, hostname, data.message, data.downloadOptions);
          } else {
            showResult(
              data.message || "An authorized source file is available.",
              false,
              `Source recognized: ${platform}`
            );
          }
          showDownloadOptions(data.downloadOptions);
        } else {
          showResult(
            `${data.message || "The source was recognized successfully."} No download is available yet because an authorized provider has not been configured.`,
            false,
            `Source recognized: ${platform}`
          );
          const detail = document.createElement("div");
          detail.className = "api-detail";
          detail.textContent = `Host: ${hostname}`;
          resultBox.appendChild(document.createElement("br"));
          resultBox.appendChild(detail);
        }
      } catch (error) {
        let message;
        if (error.name === "AbortError") {
          message = "The request took too long. Please try again in a moment.";
        } else if (error instanceof TypeError) {
          message = "Could not reach the AIOD API. Check your internet connection. If the backend is online, its CORS settings may need to allow https://jagathish.online.";
        } else {
          message = error.message || "Something went wrong while analyzing this link.";
        }
        showResult(message, true, "Unable to analyze link");
      } finally {
        clearTimeout(timeoutId);
        setAnalyzing(false);
      }
    });
  }

  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
})();
