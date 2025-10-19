import { getAll } from "./request.js";

getAll()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error.message));

const elBtn = document.getElementById("btn");
const html = document.documentElement;
const alertBox = document.getElementById("alertBox");

function showAlert(message, type = "info") {
  alertBox.className = `fixed top-4 right-4 alert alert-${type} shadow-lg w-64 transition-all duration-300`;
  alertBox.textContent = message;
  alertBox.classList.remove("hidden");

  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, 3000);
}

function setTheme(mode) {
  html.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);

  elBtn.textContent = mode === "dark" ? "☀️ " : "🌙 ";

  if (mode === "dark") {
    showAlert("🌙 Qorong'u rejimga o'tildi", "info");
  } else {
    showAlert("☀️ Oq rejimga o'tildi", "success");
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

elBtn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
});

window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    setTheme(event.newValue);
  }
});
