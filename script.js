let navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navButtons.forEach((btn) => btn.classList.remove("ativo"));
    e.target.classList.add("ativo");
    let index = parseInt(e.target.id);

    mudarCard(index);
  });
});

function mudarCard(index) {
  let info = document.querySelector(".info");
  info.classList.add("down");
  setTimeout(() => {
    info.classList.remove("down");
    console.log(index);
    index ? (info.innerHTML = arr[index]) : (info.innerHTML = arr[0]);
  }, 300);
}

let arr = [
  `
      <div class="titulo up">
          <h2>Nome Pessoa 1</h2>
          <h3>Informações pessoais da pessoa</h3>
        </div>
        <p class="descricao up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
          tellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdiet
          nunc. Nunc congue, orci in dapibus facilisis, libero ligula maximus
          neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.
        </p>
      </div>`,
  `
      <div class="titulo up">
          <h2>Nome Pessoa 2</h2>
          <h3>Informações pessoais da pessoa</h3>
        </div>
        <p class="descricao up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
          tellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdiet
          nunc. Nunc congue, orci in dapibus facilisis, libero ligula maximus
          neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.
        </p>
      </div>`,
  `
      <div class="titulo up">
          <h2>Nome Pessoa 3</h2>
          <h3>Informações pessoais da pessoa</h3>
        </div>
        <p class="descricao up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
          tellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdiet
          nunc. Nunc congue, orci in dapibus facilisis, libero ligula maximus
          neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.
        </p>
      </div>`,
  `
      <div class="titulo up">
          <h2>Nome Pessoa 4</h2>
          <h3>Informações pessoais da pessoa</h3>
        </div>
        <p class="descricao up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
          tellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdiet
          nunc. Nunc congue, orci in dapibus facilisis, libero ligula maximus
          neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.
        </p>
      </div>`,
];

mudarCard();
