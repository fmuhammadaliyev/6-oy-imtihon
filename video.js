const video = document.getElementById("introVideo");
const skipBtn = document.getElementById("skipIntro");
const bodyElements = document.querySelectorAll(
  "body > :not(#introVideo):not(#skipIntro)"
); // video va skipdan boshqa hammasi

// Dastlab boshqa elementlarni yashirish
bodyElements.forEach((el) => (el.style.display = "none"));

// Video tugagach yoki skip bosilganda
function showMainUI() {
  video.style.display = "none";
  skipBtn.style.display = "none";
  bodyElements.forEach((el) => (el.style.display = "block"));
}

video.addEventListener("ended", showMainUI);
skipBtn.addEventListener("click", showMainUI);
