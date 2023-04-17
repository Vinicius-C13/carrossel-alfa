let navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navButtons.forEach((btn) => btn.classList.remove("ativo"));
    e.target.classList.add("ativo");
  });
});
