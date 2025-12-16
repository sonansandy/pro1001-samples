import { GOOGLE_MAPS_API_KEY } from "./config.js";

const statusEl = document.querySelector("#map-status");

function setStatus(msg) {
  if (statusEl) statusEl.textContent = msg;
}

function showError(msg) {
  setStatus(msg);
  if (statusEl) statusEl.style.color = "#c93333";
}

init();

async function init() {
  try {
    setStatus("Loading map…");
    await loadGoogleMapsGMP();
    setStatus("Map loaded.");
  } catch (err) {
    console.error(err);
    showError("Map failed to load. Check API key / billing / connection.");
  }
}

function loadGoogleMapsGMP() {
  return new Promise((resolve, reject) => {
    // already loaded?
    if (window.google?.maps) return resolve();

    if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === "YOUR_API_KEY_HERE") {
      return reject(new Error("Missing GOOGLE_MAPS_API_KEY"));
    }

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;

    const params = new URLSearchParams({
      key: GOOGLE_MAPS_API_KEY,
      v: "beta",
      libraries: "maps,marker",
      callback: "console.debug",
    });

    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps script failed to load"));

    document.head.appendChild(script);
  });
}
