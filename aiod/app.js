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

if (clearBtn && input && resultBox) {
  clearBtn.addEventListener("click", () => {
    input.value = "";
    resultBox.hidden = true;
    resultBox.classList.remove("error");
    resultBox.replaceChildren();
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
    const timeoutId = setTimeout(() => controller.abort(), 20000);

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
        showResult(data.message || "This link was received, but its source is not currently supported for analysis.", false, "Link checked");
        return;
      }

      if (data.downloadAvailable === true) {
        showResult(data.message || "An authorized provider is available for this source. Follow the provider's permitted download process.", false, `Source recognized: ${platform}`);
      } else {
        showResult(`${data.message || "The source was recognized successfully."} No download is available yet because an authorized provider has not been configured.`, false, `Source recognized: ${platform}`);
      }

      const detail = document.createElement("div");
      detail.className = "api-detail";
      detail.textContent = `Host: ${hostname}`;
      resultBox.appendChild(document.createElement("br"));
      resultBox.appendChild(detail);
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
