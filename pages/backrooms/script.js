/* =========================
   ELEMENTOS
========================= */

const scene1 =
document.getElementById("scene1");

const scene2 =
document.getElementById("scene2");

const scene3 =
document.getElementById("scene3");

const scene4 =
document.getElementById("scene4");

const overlay =
document.getElementById("overlay");

const darkness =
document.getElementById("darkness");

const observers =
document.getElementById("observers");

const finalText =
document.getElementById("finalText");

/* =========================
   FRASES GLITCH
========================= */

const glitchMessages = [

  "VOCÊ ESTÁ PERDIDO",
  "NÃO EXISTE SAÍDA",
  "ALGO ESTÁ OBSERVANDO",
  "VOCÊ NÃO DEVERIA ESTAR AQUI",
  "CONTINUE ANDANDO",
  "ELA ESTÁ PRÓXIMA",
  "AS LUZES NÃO PARAM",
  "NÃO OLHE PARA TRÁS"

];

/* =========================
   GLITCH LEVE
========================= */

function softGlitch(power = 4) {

  const glitch =
  setInterval(() => {

    document.body.style.transform =
      `
      translate(
        ${(Math.random()-0.5)*power}px,
        ${(Math.random()-0.5)*power}px
      )
      `;

  }, 60);

  setTimeout(() => {

    clearInterval(glitch);

    document.body.style.transform =
      "none";

  }, 250);
}

/* =========================
   TEXTO GLITCH
========================= */

function createGlitchText() {

  const text =
  document.createElement("div");

  text.classList.add("glitchText");

  text.innerText =
    glitchMessages[
      Math.floor(
        Math.random() *
        glitchMessages.length
      )
    ];

  /* posição */

  text.style.left =
    Math.random() *
    (window.innerWidth - 300) + "px";

  text.style.top =
    Math.random() *
    (window.innerHeight - 100) + "px";

  /* tamanho */

  text.style.fontSize =
    (14 + Math.random() * 18) + "px";

  document.body.appendChild(text);

  setTimeout(() => {

    text.remove();

  }, 1200);
}

/* =========================
   CENA 1 -> 2
========================= */

function nextScene1() {

  overlay.style.opacity = "0.2";

  softGlitch(3);

  setTimeout(() => {

    scene1.classList.remove("active");

    scene2.classList.add("active");

    overlay.style.opacity = "0";

  }, 700);
}

/* =========================
   CENA 2 -> 3
========================= */

function nextScene2() {

  overlay.style.opacity = "0.35";

  softGlitch(5);

  /* textos aparecendo */

  createGlitchText();

  setTimeout(() => {

    scene2.classList.remove("active");

    scene3.classList.add("active");

    overlay.style.opacity = "0";

  }, 900);
}

/* =========================
   CENA FINAL
========================= */

function finalScene() {

  /* ativa cena */

  scene3.classList.remove("active");

  scene4.classList.add("active");

  /* overlay */

  overlay.style.opacity = "0.45";

  /* glitches lentos */

  const ambientGlitch =
  setInterval(() => {

    softGlitch(2);

  }, 1800);

  /* mensagens ocasionais */

  const textLoop =
  setInterval(() => {

    if (Math.random() < 0.5) {

      createGlitchText();

    }

  }, 1500);

  /* escuridão crescendo */

  setTimeout(() => {

    darkness.style.transition =
      "8s ease";

    darkness.style.opacity = "0.75";

  }, 1000);

  /* observers surgindo */

  setTimeout(() => {

    observers.style.transition =
      "4s ease";

    observers.style.opacity = "0.5";

  }, 3500);

  /* frase final */

  setTimeout(() => {

    finalText.style.transition =
      "4s ease";

    finalText.style.opacity = "1";

  }, 5000);

  /* overlay aumenta */

  setTimeout(() => {

    overlay.style.opacity = "0.7";

  }, 7000);

  /* tela quase preta */

  setTimeout(() => {

    darkness.style.opacity = "0.92";

  }, 9000);

  /* volta home */

  setTimeout(() => {

    clearInterval(ambientGlitch);

    clearInterval(textLoop);

    window.location.href =
      "../../index.html";

  }, 13000);
}

/* =========================
   GLITCHES AMBIENTE
========================= */

setInterval(() => {

  if (Math.random() < 0.25) {

    softGlitch(2);

  }

}, 5000);

/* =========================
   PISCAR OVERLAY
========================= */

setInterval(() => {

  if (Math.random() < 0.18) {

    overlay.style.opacity = "0.12";

    setTimeout(() => {

      overlay.style.opacity = "0";

    }, 120);
  }

}, 3500);