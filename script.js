let listaCarrossel = [
  {
    index: 0,
    imagem: "https://place-hold.it/237x300/ff",
    nomeDaPessoa: "Nome Pessoa 1",
    informacoesPessoais: "Informações pessoais da pessoa",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus atellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdietnunc. Nunc congue, orci in dapibus facilisis, libero ligula maximum neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.",
  },
  {
    index: 1,
    imagem: "https://place-hold.it/237x300/E74C3C",
    nomeDaPessoa: "Nome Pessoa 2",
    informacoesPessoais: "Informações pessoais da pessoa",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus atellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdietnunc. Nunc congue, orci in dapibus facilisis, libero ligula maximum neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.",
  },
  {
    index: 2,
    imagem: "https://place-hold.it/237x300/58D68D",
    nomeDaPessoa: "Nome Pessoa 3",
    informacoesPessoais: "Informações pessoais da pessoa",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus atellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdietnunc. Nunc congue, orci in dapibus facilisis, libero ligula maximum neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.",
  },
  {
    index: 3,
    imagem: "https://place-hold.it/237x300/F4D03F",
    nomeDaPessoa: "Nome Pessoa 4",
    informacoesPessoais: "Informações pessoais da pessoa",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus atellus ante. Nulla sit amet nulla cursus, vehicula elit id, imperdietnunc. Nunc congue, orci in dapibus facilisis, libero ligula maximum neque, at tempus ligula ex non dui. Proin iaculis volutpat accumsan.",
  },
];

let navButtons = document.querySelectorAll(".nav-btn");
let info = document.querySelector(".info");
let image = document.querySelector(".imagem > img");

let index = 0;

navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navButtons.forEach((btn) => btn.classList.remove("ativo"));
    e.target.classList.add("ativo");
    index = parseInt(e.target.id);

    mudarCard();
    timer.reset();
  });
});

function mudarCard() {
  info.classList.add("down");
  image.classList.add("fadeout");
  localIndex = index;
  setTimeout(() => {
    image.classList.remove("fadeout");
    image.classList.add("fadein");
    info.classList.remove("down");
    info.innerHTML = criaElemento(listaCarrossel[localIndex]);
    image.src = listaCarrossel[localIndex].imagem;
  }, 400);
}

function setIndex() {
  if (index >= listaCarrossel.length - 1) {
    index = 0;
  } else {
    index++;
  }
}

function criaElemento(obj) {
  return `
  <div class="titulo up">
      <h2>${obj.nomeDaPessoa}</h2>
      <h3>${obj.informacoesPessoais}</h3>
    </div>
    <p class="descricao up">${obj.descricao}</p>
  </div>`;
}

function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function () {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };

  // start timer using current settings (if it's not already running)
  this.start = function () {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  };

  // start with new or original interval, stop current interval
  this.reset = function (newT = t) {
    t = newT;
    console.log("do reset: " + index);
    return this.stop().start();
  };
}

var timer = new Timer(function () {
  setIndex();
  mudarCard();
  console.log("do intervalo: " + index);
}, 5000);

// stop the timer
//timer.stop();

// start the timer
//timer.start();

/*setInterval(() => {
  mudarCardAutomaticamente();
  console.log(index);
}, 3000);*/
