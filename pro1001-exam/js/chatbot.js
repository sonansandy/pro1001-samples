import { OPENAI_API_KEY } from "./config.js";

/* ------------------ DOM ELEMENTS ------------------ */
const form = document.querySelector("#chat-form");
const input = document.querySelector("#chat-input-field");
const log = document.querySelector("#chat-log");
const button = document.querySelector("#chat-main-button");
const buttonIcon = document.querySelector("#chat-main-button-icon");
const errorBox = document.querySelector("#chat-error");

/* ------------------ STATE ------------------ */
let isSending = false;

/* ------------------ UI HELPERS ------------------ */
function setBusy(isBusy) {
  button.disabled = isBusy;
  input.disabled = isBusy;
  button.setAttribute("aria-busy", String(isBusy));
  buttonIcon.textContent = isBusy ? "×" : "↑";
  button.setAttribute("aria-label", isBusy ? "Stop" : "Send message");
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.hidden = true;
  errorBox.textContent = "";
}

function addMessage({ role, text, isHtml = false }) {
  const wrap = document.createElement("div");
  wrap.className = `chat-message chat-message--${role}`;

  if (role === "assistant") {
    const label = document.createElement("div");
    label.className = "chat-message__label";
    label.textContent = "FRAM";
    wrap.appendChild(label);
  }

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble chat-bubble--${role}`;

  if (isHtml) bubble.innerHTML = text;
  else bubble.textContent = text;

  wrap.appendChild(bubble);
  log.appendChild(wrap);
  log.scrollTop = log.scrollHeight;

  return bubble;
}


/* ------------------ OPENAI CALL ------------------ */
async function askOpenAI(userText) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are FRAM customer service. Answer questions about the sustainable food delivery service and partner farms. If you are unsure, say you don’t know. Keep answers short and helpful.",
        },
        { role: "user", content: userText },
      ],
      temperature: 0.6,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI error (${response.status}): ${text}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

/* ------------------ FORM SUBMIT ------------------ */
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (isSending) return;

  clearError();

  const userText = input.value.trim();
  if (!userText) return;

  isSending = true;
  setBusy(true);

  addMessage({ role: "user", text: userText });
  input.value = "";

const typingBubble = addMessage({
  role: "assistant",
  text: `<i class="fa-solid fa-spinner chat-typing-icon" aria-label="Loading"></i>`,
  isHtml: true
});

  try {
    const reply = await askOpenAI(userText);
    typingBubble.textContent = reply;
  } catch (error) {
    typingBubble.textContent = "Sorry — something went wrong.";
    showError(error.message);
  } finally {
    isSending = false;
    setBusy(false);
  }
});
