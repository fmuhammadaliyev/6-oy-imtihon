const elForm = document.getElementById("form");
const alertBox = document.getElementById("alert");

async function register(user) {
  try {
    const req = await fetch(
      "https://json-api.uz/api/project/fn44/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const res = await req.json();

    if (!req.ok)
      throw new Error(res.message || "Ro'yxatdan o'tishda xatolik yuz berdi");

    return res;
  } catch (err) {
    throw err;
  }
}

function showAlert(type, msg) {
  alertBox.className = "";
  alertBox.classList.add("mb-4", "p-3", "rounded-lg", "text-sm", "text-center");
  if (type === "success") {
    alertBox.classList.add("bg-green-50", "text-green-700");
  } else {
    alertBox.classList.add("bg-red-50", "text-red-700");
  }
  alertBox.textContent = msg;
  alertBox.classList.remove("hidden");
}

elForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const formData = new FormData(elForm);
  const result = Object.fromEntries(formData.entries());

  try {
    const res = await register(result);

    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
    }

    showAlert("success", "Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    setTimeout(() => (window.location.href = "./login.html"), 1000);
  } catch (err) {
    showAlert("error", err.message || "Xatolik yuz berdi!");
  }
});
