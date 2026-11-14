const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.querySelector(".theme-label");
const form = document.getElementById("analyzeForm");
const input = document.getElementById("mediaUrl");
const clearBtn = document.getElementById("clearBtn");
const resultBox = document.getElementById("resultBox");

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#0b1020" : "#f6f7fb";
  try { localStorage.setItem("aiod-theme", theme); } catch (_) {}
}

let savedTheme = "dark";
try { savedTheme = localStorage.getItem("aiod-theme") || "dark"; } catch (_) {}
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  resultBox.hidden = true;
  input.focus();
});

function detectPlatform(url) {
  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (host === "youtube.com" || host === "youtu.be" || host.endsWith(".youtube.com")) return "YouTube";
  if (host === "instagram.com" || host.endsWith(".instagram.com")) return "Instagram";
  if (host === "facebook.com" || host === "fb.watch" || host.endsWith(".facebook.com")) return "Facebook";
  if (host === "tiktok.com" || host.endsWith(".tiktok.com")) return "TikTok";
  if (host === "t.me" || host === "telegram.me" || host.endsWith(".telegram.org")) return "Telegram";
  return "Direct / other link";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const raw = input.value.trim();
  resultBox.hidden = false;
  resultBox.classList.remove("error");

  if (!raw) {
    resultBox.classList.add("error");
    resultBox.textContent = "Please paste a URL first.";
    return;
  }

  let url;
  try {
    url = new URL(raw);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("Unsupported protocol");
  } catch (_) {
    resultBox.classList.add("error");
    resultBox.textContent = "That does not look like a valid HTTP or HTTPS link. Please check it and try again.";
    return;
  }

  const platform = detectPlatform(url);
  resultBox.innerHTML = `<strong>Source recognized: ${platform}</strong><br>This is the interface preview. A real download option will appear only after we connect an authorized provider for this source.`;
});

document.getElementById("year").textContent = new Date().getFullYear();
