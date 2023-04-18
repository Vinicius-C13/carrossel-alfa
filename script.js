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

function setIndex(left = false) {
  if (left) {
    if (index <= 0) {
      index = listaCarrossel.length - 1;
    } else {
      index--;
    }
  } else {
    if (index >= listaCarrossel.length - 1) {
      index = 0;
    } else {
      index++;
    }
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

function setAtivo() {
  navButtons.forEach((btn) => {
    if (btn.id == index.toString()) {
      navButtons.forEach((btn) => btn.classList.remove("ativo"));
      btn.classList.add("ativo");
    }
  });
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
    return this.stop().start();
  };
}

mudarCard();

let timer = new Timer(function () {
  setIndex();
  mudarCard();
  setAtivo();
}, 5000);

document
  .querySelector(".carrossel")
  .addEventListener("touchstart", handleTouchStart, false);
document
  .querySelector(".carrossel")
  .addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* right swipe */
      setIndex();
      mudarCard();
      setAtivo();
      timer.reset();
      console.log("teste direita");
    } else {
      /* left swipe */
      mudarCard();
      setIndex(true);
      console.log(index);
      mudarCard();
      setAtivo();
      timer.reset();
      console.log("teste esquerda");
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
