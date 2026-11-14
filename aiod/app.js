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
      .aiod-tools-status{margin-top:12px;padding:10px 12px;border:1px solid var(--border,#2b3650);border-radius:10px;font-size:.78rem;line-height:1.55;color:var(--muted,#9aa6bd);overflow-wrap:anywhere}
      .aiod-tools-status.is-ready{border-color:rgba(32,203,182,.45);color:#20cbb6}
      .aiod-tools-status.is-pending{border-color:rgba(245,158,11,.28)}
      .aiod-processing-panel{display:grid;gap:10px;margin-top:12px;padding:13px;border:1px solid var(--border,#2b3650);border-radius:12px;background:rgba(127,127,127,.05)}
      .aiod-processing-panel h3{margin:0;font-size:1rem}
      .aiod-consent{display:flex;gap:9px;align-items:flex-start;font-size:.85rem;line-height:1.45;color:var(--muted)}
      .aiod-consent input{margin-top:3px;accent-color:#7c5cff}
      .aiod-conversion-controls{display:grid;gap:9px}
      .aiod-conversion-controls>label{font-size:.85rem;font-weight:600}
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

  // Show the live media-processing capability state from the Render backend.
  const mediaToolsStatus = document.createElement("div");
  mediaToolsStatus.className = "aiod-tools-status";
  mediaToolsStatus.setAttribute("role", "status");
  mediaToolsStatus.setAttribute("aria-live", "polite");
  mediaToolsStatus.textContent = "Checking media-processing tools…";
  const downloaderPanel = document.getElementById("downloader");
  const legalNote = downloaderPanel && downloaderPanel.querySelector(".legal-note");
  if (legalNote) legalNote.insertAdjacentElement("beforebegin", mediaToolsStatus);

  async function refreshMediaToolsStatus() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/media/tools`, {
        headers: { "Accept": "application/json" },
        mode: "cors",
        credentials: "omit"
      });
      if (!response.ok) throw new Error("Status unavailable");
      const payload = await response.json();
      const tools = payload && payload.tools ? payload.tools : {};
      const ytDlpReady = tools.ytDlp === true;
      const ffmpegReady = tools.ffmpeg === true;
      const domainsReady = Number(tools.configuredDomains) > 0;
      mediaToolsStatus.classList.toggle("is-ready", payload.ready === true);
      mediaToolsStatus.classList.toggle("is-pending", payload.ready !== true);
      const state = (ok, name) => (ok ? "✓ " : "○ ") + name;
      mediaToolsStatus.textContent = [
        "Media engine",
        state(ytDlpReady, "yt-dlp"),
        state(ffmpegReady, "FFmpeg"),
        state(domainsReady, "authorized sources")
      ].join(" · ") + (payload.ready === true
        ? " · Ready for configured sources"
        : " · Direct file links remain available; source extraction needs an authorized domain allowlist.");
    } catch (_) {
      mediaToolsStatus.classList.remove("is-ready");
      mediaToolsStatus.classList.add("is-pending");
      mediaToolsStatus.textContent = "Media engine status could not be checked. Direct media-file links may still work.";
    }
  }
  refreshMediaToolsStatus();

  function addAuthorizedProcessingPanel(sourceUrl) {
    if (!resultBox) return;
    const sourceHost = new URL(sourceUrl).hostname.toLowerCase().replace(/^www\./, "");
    const blocked = ["instagram.com", "facebook.com", "fb.watch", "tiktok.com", "twitter.com", "x.com"];
    const isBlockedSource = blocked.some((domain) => sourceHost === domain || sourceHost.endsWith("." + domain));

    const panel = document.createElement("section");
    panel.className = "aiod-processing-panel";
    const heading = document.createElement("h3");
    heading.textContent = isBlockedSource ? "Media processing unavailable for this source" : (sourceHost === "youtube.com" || sourceHost.endsWith(".youtube.com") || sourceHost === "youtu.be" ? "Process Creative Commons YouTube media" : "Process authorized media");
    panel.appendChild(heading);

    if (isBlockedSource) {
      const notice = document.createElement("p");
      notice.className = "aiod-status-note";
      notice.textContent = "AIOD currently supports processing only from configured, authorized source domains. This platform is not enabled for extraction here. You can still use the source's official download or export options.";
      panel.appendChild(notice);
      resultBox.appendChild(panel);
      return;
    }

    const intro = document.createElement("p");
    intro.className = "aiod-status-note";
    intro.textContent = (sourceHost === "youtube.com" || sourceHost.endsWith(".youtube.com") || sourceHost === "youtu.be") ? "YouTube processing is limited to videos yt-dlp identifies as Creative Commons licensed. Standard YouTube License videos will be declined. Other configured sources must be authorized for download." : "For media you own or have permission to download. The source host must be configured in the backend allowlist.";
    panel.appendChild(intro);

    const consentLabel = document.createElement("label");
    consentLabel.className = "aiod-consent";
    const consent = document.createElement("input");
    consent.type = "checkbox";
    const consentText = document.createElement("span");
    consentText.textContent = (sourceHost === "youtube.com" || sourceHost.endsWith(".youtube.com") || sourceHost === "youtu.be") ? "I will only process this video if it is explicitly marked with a reusable Creative Commons license." : "I own this media or have permission to download and process it.";
    consentLabel.append(consent, consentText);
    panel.appendChild(consentLabel);

    const extractButton = document.createElement("button");
    extractButton.type = "button";
    extractButton.className = "aiod-watch-link";
    extractButton.textContent = "Extract media information";
    extractButton.disabled = true;
    consent.addEventListener("change", () => { extractButton.disabled = !consent.checked; });
    panel.appendChild(extractButton);

    const feedback = document.createElement("p");
    feedback.className = "aiod-status-note";
    feedback.setAttribute("aria-live", "polite");
    panel.appendChild(feedback);

    const conversion = document.createElement("div");
    conversion.className = "aiod-conversion-controls";
    conversion.hidden = true;
    const formatsLabel = document.createElement("label");
    formatsLabel.textContent = "Output format";
    const outputFormat = document.createElement("select");
    outputFormat.className = "aiod-format-select";
    [["mp4", "MP4 video"], ["mp3", "MP3 audio"]].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      outputFormat.appendChild(option);
    });
    formatsLabel.appendChild(outputFormat);
    const qualityLabel = document.createElement("label");
    qualityLabel.textContent = "Video quality (available source resolutions)";
    const qualitySelect = document.createElement("select");
    qualitySelect.className = "aiod-format-select";
    const bestOption = document.createElement("option");
    bestOption.value = "";
    bestOption.textContent = "Best available";
    qualitySelect.appendChild(bestOption);
    qualityLabel.appendChild(qualitySelect);
    const formatSummary = document.createElement("p");
    formatSummary.className = "aiod-audio-meta";
    const sizeEstimate = document.createElement("p");
    sizeEstimate.className = "aiod-audio-meta";
    sizeEstimate.setAttribute("aria-live", "polite");
    sizeEstimate.textContent = "Estimated output size: unavailable until source formats are analyzed.";
    const processButton = document.createElement("button");
    processButton.type = "button";
    processButton.className = "aiod-watch-link";
    processButton.textContent = "Convert and download";
    conversion.append(formatsLabel, qualityLabel, formatSummary, sizeEstimate, processButton);
    panel.appendChild(conversion);
    resultBox.appendChild(panel);

    let extracted = false;
    let extractedFormats = [];
    const formatBytes = (bytes) => {
      if (!Number.isFinite(bytes) || bytes <= 0) return null;
      const units = ["B", "KB", "MB", "GB"];
      let value = bytes;
      let unit = 0;
      while (value >= 1024 && unit < units.length - 1) { value /= 1024; unit += 1; }
      return value.toFixed(unit === 0 ? 0 : 1) + " " + units[unit];
    };
    const updateSizeEstimate = () => {
      if (!extractedFormats.length) return;
      const audio = extractedFormats.filter((item) => item && item.hasAudio && Number.isFinite(item.filesize));
      const video = extractedFormats.filter((item) => item && item.hasVideo && Number.isFinite(item.filesize));
      let estimate = null;
      if (outputFormat.value === "mp3") {
        const bestAudio = audio.sort((a, b) => b.filesize - a.filesize)[0];
        estimate = bestAudio ? bestAudio.filesize : null;
      } else {
        const maxHeight = qualitySelect.value ? Number(qualitySelect.value) : Infinity;
        const candidates = video.filter((item) => Number.isInteger(item.height) && item.height <= maxHeight);
        const chosenVideo = candidates.sort((a, b) => (b.height - a.height) || ((b.filesize || 0) - (a.filesize || 0)))[0];
        const audioOnly = audio.filter((item) => !item.hasVideo).sort((a, b) => b.filesize - a.filesize)[0];
        const combined = (chosenVideo && chosenVideo.filesize || 0) + (audioOnly && audioOnly.filesize || 0);
        estimate = combined > 0 ? combined : (chosenVideo && chosenVideo.filesize) || null;
      }
      sizeEstimate.textContent = estimate
        ? "Estimated source size: about " + formatBytes(estimate) + " (output may differ after conversion)."
        : "Estimated output size unavailable; the source did not provide file-size estimates.";
    };
    outputFormat.addEventListener("change", updateSizeEstimate);
    qualitySelect.addEventListener("change", updateSizeEstimate);
    extractButton.addEventListener("click", async () => {
      if (!consent.checked) return;
      extractButton.disabled = true;
      feedback.textContent = "Extracting metadata with yt-dlp…";
      conversion.hidden = true;
      try {
        const response = await fetch(`${API_BASE_URL}/api/media/extract`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ url: sourceUrl, authorized: true })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || data.ok !== true) throw new Error(data.error || data.message || `Extraction failed (HTTP ${response.status}).`);
        const formats = Array.isArray(data.formats) ? data.formats : [];
        extractedFormats = formats;
        const heights = Array.from(new Set(formats
          .filter((item) => item && item.hasVideo === true && Number.isInteger(item.height) && item.height >= 144)
          .map((item) => item.height))).sort((a, b) => a - b);
        qualitySelect.replaceChildren(bestOption);
        heights.forEach((height) => {
          const option = document.createElement("option");
          option.value = String(height);
          option.textContent = height + "p";
          qualitySelect.appendChild(option);
        });
        qualityLabel.hidden = heights.length === 0;
        formatSummary.textContent = formats.length
          ? `Source: ${data.source && data.source.title ? data.source.title : "Media"} · ${formats.length} real source format(s) found · ${heights.length ? heights.join("p, ") + "p video heights available" : "no separate video resolutions reported"}.`
          : "Metadata was extracted, but the source did not report separate downloadable formats.";
        conversion.hidden = false;
        extracted = true;
        updateSizeEstimate();
        feedback.textContent = "Metadata extracted successfully. Choose MP4 or MP3 to continue.";
      } catch (error) {
        extracted = false;
        extractedFormats = [];
        conversion.hidden = true;
        qualitySelect.replaceChildren(bestOption);
        formatSummary.textContent = "";
        sizeEstimate.textContent = "Estimated output size unavailable until extraction succeeds.";
        feedback.textContent = error.message || "Could not extract this source.";
      } finally {
        extractButton.disabled = !consent.checked;
      }
    });

    processButton.addEventListener("click", async () => {
      if (!consent.checked || !extracted) return;
      processButton.disabled = true;
      feedback.textContent = "Processing media with yt-dlp and FFmpeg. Large files may take several minutes…";
      try {
        const response = await fetch(`${API_BASE_URL}/api/media/process`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: sourceUrl, authorized: true, outputFormat: outputFormat.value, maxHeight: outputFormat.value === "mp4" && qualitySelect.value ? Number(qualitySelect.value) : undefined })
        });
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Processing failed (HTTP ${response.status}).`);
        }
        const total = Number(response.headers.get("Content-Length")) || 0;
        const reader = response.body && response.body.getReader ? response.body.getReader() : null;
        let received = 0;
        const chunks = [];
        if (reader) {
          while (true) {
            const part = await reader.read();
            if (part.done) break;
            chunks.push(part.value);
            received += part.value.byteLength;
            feedback.textContent = total
              ? "Downloading processed file… " + Math.min(100, Math.round(received / total * 100)) + "% (" + formatBytes(received) + " / " + formatBytes(total) + ")"
              : "Downloading processed file… " + formatBytes(received) + " received";
          }
        } else {
          const fallbackBlob = await response.blob();
          chunks.push(fallbackBlob);
          received = fallbackBlob.size;
        }
        const blob = new Blob(chunks, { type: response.headers.get("Content-Type") || "application/octet-stream" });
        if (!blob.size) throw new Error("The server returned an empty file.");
        const objectUrl = URL.createObjectURL(blob);
        const disposition = response.headers.get("Content-Disposition") || "";
        const match = disposition.match(/filename="([^"]+)"/i);
        const filename = match ? match[1] : `aiod-output.${outputFormat.value}`;
        const download = document.createElement("a");
        download.href = objectUrl;
        download.download = filename;
        document.body.appendChild(download);
        download.click();
        download.remove();
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
        feedback.textContent = `Finished. Your ${outputFormat.value.toUpperCase()} download has started.`;
      } catch (error) {
        feedback.textContent = error.message || "Media processing failed.";
      } finally {
        processButton.disabled = false;
      }
    });
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

    // Only render real HTTP(S) URLs returned by the authorized source/provider.
    const validOptions = options.map((option) => {
      if (!option || typeof option.url !== "string") return null;
      try {
        const url = new URL(option.url);
        if (!["https:", "http:"].includes(url.protocol)) return null;
        return { option, url };
      } catch (_) { return null; }
    }).filter(Boolean);

    if (!validOptions.length) return;

    const section = document.createElement("section");
    section.className = "aiod-download-options";
    const heading = document.createElement("h3");
    heading.textContent = validOptions.length > 1 ? "Choose your available format" : "Available authorized file";
    section.appendChild(heading);

    const formatLabel = (option) => {
      const parts = [
        option.resolution || option.quality || "",
        option.format ? String(option.format).toUpperCase() : "",
        option.sizeLabel || ""
      ].filter(Boolean);
      return option.label || parts.join(" · ") || "Original source file";
    };
    const sizeText = (option) => {
      const bytes = Number.isSafeInteger(option.sizeBytes) && option.sizeBytes >= 0 ? option.sizeBytes : null;
      if (bytes !== null) return bytes < 1024 * 1024
        ? (bytes / 1024).toFixed(1) + " KB"
        : (bytes / (1024 * 1024)).toFixed(2) + " MB";
      return option.sizeLabel || "Size not provided by source";
    };
    const detailsText = (option) => [
      option.filename || "",
      option.mimeType || "",
      sizeText(option),
      option.description || ""
    ].filter(Boolean).filter((value, index, list) => list.indexOf(value) === index).join(" · ");

    const selectorLabel = document.createElement("label");
    selectorLabel.className = "aiod-format-label";
    selectorLabel.textContent = validOptions.length > 1 ? "Available quality / format" : "File details";
    section.appendChild(selectorLabel);

    let selector = null;
    if (validOptions.length > 1) {
      selector = document.createElement("select");
      selector.className = "aiod-format-select";
      selector.setAttribute("aria-label", "Choose an available media format");
      validOptions.forEach(({ option }, index) => {
        const item = document.createElement("option");
        item.value = String(index);
        item.textContent = (option.recommended === true ? "★ " : "") + formatLabel(option);
        selector.appendChild(item);
      });
      const recommendedIndex = validOptions.findIndex(({ option }) => option.recommended === true);
      selector.selectedIndex = recommendedIndex >= 0 ? recommendedIndex : 0;
      section.appendChild(selector);
    }

    const row = document.createElement("div");
    row.className = "aiod-download-row aiod-selected-download";
    const details = document.createElement("div");
    const label = document.createElement("strong");
    const meta = document.createElement("span");
    details.append(label, meta);

    const link = document.createElement("a");
    link.className = "aiod-download-link";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open / save ↗";
    link.setAttribute("aria-label", "Open or save selected authorized media file");
    row.append(details, link);
    section.appendChild(row);

    function updateSelected(index) {
      const selected = validOptions[index] || validOptions[0];
      const option = selected.option;
      label.textContent = option.filename || formatLabel(option);
      meta.textContent = detailsText(option) || "Original source file";
      link.href = selected.url.href;
      link.setAttribute("aria-label", "Open or save " + label.textContent);
      link.download = option.filename || "";
    }

    updateSelected(selector ? selector.selectedIndex : 0);
    if (selector) selector.addEventListener("change", () => updateSelected(selector.selectedIndex));

    const note = document.createElement("p");
    note.className = "aiod-download-footnote";
    note.textContent = "Only formats and file sizes supplied by the authorized source are shown. Open / save uses the original source URL; the host and browser control the final download behavior. AIOD does not re-host or convert this file.";
    section.appendChild(note);
    resultBox.appendChild(section);
  }

  function showOtherDirectFilePreview(media, hostname, message, downloadOptions) {
    if (!resultBox) return;
    resultBox.replaceChildren();
    resultBox.hidden = false;
    resultBox.classList.remove("error");

    const heading = document.createElement("strong");
    heading.textContent = "Source recognized: Direct file";
    resultBox.appendChild(heading);

    const note = document.createElement("p");
    note.className = "aiod-status-note";
    note.textContent = message || "The original file was verified from its host.";
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

    const filename = option.filename || media.filename || ("original." + String(media.format || "file").toLowerCase());
    const preview = document.createElement("div");
    preview.className = "aiod-other-file-preview";

    const title = document.createElement("strong");
    title.textContent = filename;
    preview.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "aiod-audio-meta";
    const sizeBytes = Number.isSafeInteger(option.sizeBytes) && option.sizeBytes >= 0 ? option.sizeBytes : null;
    const sizeLabel = sizeBytes === null
      ? "Size not provided by source"
      : sizeBytes < 1024 * 1024
        ? (sizeBytes / 1024).toFixed(1) + " KB"
        : (sizeBytes / (1024 * 1024)).toFixed(2) + " MB";
    meta.textContent = [media.format || "File", media.mimeType || option.mimeType || "", sizeLabel, hostname ? "Host: " + hostname : ""]
      .filter(Boolean).join(" · ");
    preview.appendChild(meta);

    if (media.kind === "image" && media.mimeType !== "image/svg+xml") {
      const image = document.createElement("img");
      image.src = safeUrl.href;
      image.alt = filename;
      image.loading = "lazy";
      image.referrerPolicy = "no-referrer";
      preview.appendChild(image);
    } else if (media.kind === "document" && media.mimeType === "application/pdf") {
      const frame = document.createElement("iframe");
      frame.src = safeUrl.href;
      frame.title = "PDF preview: " + filename;
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer";
      frame.setAttribute("sandbox", "");
      preview.appendChild(frame);
    }

    resultBox.appendChild(preview);
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

  function showVideoPreview(video, platform, hostname, message, downloadAvailable, sourceUrl) {
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
      : "Video details loaded. No authorized download formats were supplied for this video.");
    resultBox.appendChild(note);

    if (!downloadAvailable && platform === "YouTube") {
      const actions = document.createElement("div");
      actions.className = "aiod-youtube-actions";
      const watch = document.createElement("a");
      let safeWatchUrl = null;
      try {
        const parsed = new URL(sourceUrl);
        const hostName = parsed.hostname.toLowerCase().replace(/^www\./, "");
        if (["youtube.com", "m.youtube.com", "youtu.be"].includes(hostName)) safeWatchUrl = parsed.href;
      } catch (_) {}
      if (safeWatchUrl) {
        watch.href = safeWatchUrl;
        watch.target = "_blank";
        watch.rel = "noopener noreferrer";
        watch.className = "aiod-watch-link";
        watch.textContent = "Watch on YouTube ↗";
        actions.appendChild(watch);
      }

      const availability = document.createElement("p");
      availability.className = "aiod-format-unavailable";
      availability.textContent = "Video quality and file-size choices will appear here only when an authorized provider supplies real downloadable formats. AIOD will not display invented quality options.";
      actions.appendChild(availability);
      resultBox.appendChild(actions);
    }
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
        } else if (data.media && ["image", "document", "file"].includes(data.media.kind) && data.downloadAvailable === true) {
          showOtherDirectFilePreview(data.media, hostname, data.message, data.downloadOptions);
          showDownloadOptions(data.downloadOptions);
        } else if (video && platform === "YouTube") {
          showVideoPreview(
            video,
            platform,
            hostname,
            data.message,
            data.downloadAvailable === true,
            url.href
          );
          showDownloadOptions(data.downloadOptions);
        } else if (data.media && data.media.kind === "audio" && data.downloadAvailable === true) {
          showAudioPreview(data.media, hostname, data.message, data.downloadOptions);
          showDownloadOptions(data.downloadOptions);
        } else if (data.downloadAvailable === true || (Array.isArray(data.downloadOptions) && data.downloadOptions.length)) {
          showResult(
            data.message || "An authorized source file is available.",
            false,
            `Source recognized: ${platform}`
          );
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
        addAuthorizedProcessingPanel(url.href);
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
