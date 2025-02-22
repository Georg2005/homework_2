document.addEventListener("DOMContentLoaded", function () {
  // Инициализация MDB
  if (typeof mdb !== "undefined") {
    const { Dropdown, Collapse, initMDB } = mdb;
    initMDB({ Dropdown, Collapse });
  }

  // Переключение между Sign In / Sign Up
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  if (registerBtn && loginBtn) {
    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }
});
