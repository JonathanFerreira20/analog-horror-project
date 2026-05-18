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

const balloonContainer =
document.getElementById("balloonContainer");

const giantBalloon =
document.getElementById("giantBalloon");

const pennywiseFinal =
document.getElementById("pennywiseFinal");

const finalText =
document.getElementById("finalText");

/* =========================
   FRASES
========================= */

const messages = [

  "HAHAHAHAHAHA",
  "ELE ESTÁ AQUI",
  "VOCÊ ESCUTA ISSO?",
  "TODOS FLUTUAM",
  "VENHA MAIS PERTO",
  "ELE SABE SEU NOME",
  "HAHAHAHA",
  "VOCÊ TAMBÉM VAI FLUTUAR"

];

/* =========================
   GLITCH SCREEN
========================= */

function glitchScreen(power = 8) {

  const glitch =
  setInterval(() => {

    document.body.style.transform =
      `
      translate(
        ${(Math.random()-0.5)*power}px,
        ${(Math.random()-0.5)*power}px
      )
      `;

  }, 40);

  setTimeout(() => {

    clearInterval(glitch);

    document.body.style.transform =
      "none";

  }, 350);
}

/* =========================
   CENA 1 -> 2
========================= */

function nextScene1() {

  overlay.style.opacity = "0.3";

  glitchScreen(4);

  setTimeout(() => {

    scene1.classList.remove("active");

    scene2.classList.add("active");

    overlay.style.opacity = "0";

  }, 600);
}

/* =========================
   CENA 2 -> 3
========================= */

function nextScene2() {

  overlay.style.opacity = "0.5";

  glitchScreen(7);

  setTimeout(() => {

    scene2.classList.remove("active");

    scene3.classList.add("active");

    overlay.style.opacity = "0";

  }, 700);
}

/* =========================
   MENSAGENS GLITCH
========================= */

function spawnMessage() {

  const msg =
  document.createElement("div");

  msg.classList.add("glitchMessage");

  msg.innerText =
    messages[
      Math.floor(
        Math.random() * messages.length
      )
    ];

  /* posição */

  msg.style.left =
    Math.random() *
    (window.innerWidth - 300) + "px";

  msg.style.top =
    Math.random() *
    (window.innerHeight - 100) + "px";

  /* tamanho */

  msg.style.fontSize =
    (16 + Math.random() * 26) + "px";

  document.body.appendChild(msg);

  /* remove */

  setTimeout(() => {

    msg.remove();

  }, 900);
}

/* =========================
   BALÕES
========================= */

function spawnBalloon() {

  const balloon =
  document.createElement("div");

  balloon.classList.add("balloon");

  /* posição */

  balloon.style.left =
    Math.random() * 100 + "vw";

  /* velocidade */

  balloon.style.animationDuration =
    (4 + Math.random() * 5) + "s";

  /* tamanho aleatório */

  const size =
    70 + Math.random() * 80;

  balloon.style.width =
    size + "px";

  balloon.style.height =
    size * 1.5 + "px";

  balloonContainer.appendChild(balloon);

  /* remove */

  setTimeout(() => {

    balloon.remove();

  }, 9000);
}

/* =========================
   CENA FINAL
========================= */

function finalScene() {

  /* overlay vermelho */

  overlay.style.opacity = "0.9";

  /* remove cena anterior */

  scene3.classList.remove("active");

  /* ativa cena final */

  scene4.classList.add("active");

  /* mensagens */

  const messageLoop =
  setInterval(() => {

    spawnMessage();

  }, 100);

  /* balões */

  const balloonLoop =
  setInterval(() => {

    spawnBalloon();

  }, 180);

  /* glitch pesado */

  const finalGlitch =
  setInterval(() => {

    document.body.style.transform =
      `
      translate(
        ${(Math.random()-0.5)*18}px,
        ${(Math.random()-0.5)*18}px
      )
      `;

  }, 40);

  /* balão gigante */

  setTimeout(() => {

    giantBalloon.style.opacity = "1";

    giantBalloon.style.transition =
      "2s ease";

    giantBalloon.style.transform =
      "scale(12)";

  }, 1800);

  /* Pennywise invade */

  setTimeout(() => {

    overlay.style.opacity = "0";

    pennywiseFinal.style.opacity = "1";

    pennywiseFinal.style.transform =
      "scale(1)";

    glitchScreen(20);

  }, 3400);

  /* frase */

  setTimeout(() => {

    finalText.style.opacity = "1";

  }, 4200);

  /* volta home */

  setTimeout(() => {

    clearInterval(messageLoop);

    clearInterval(balloonLoop);

    clearInterval(finalGlitch);

    document.body.style.transform =
      "none";

    window.location.href =
      "../../index.html";

  }, 7000);
}

/* =========================
   GLITCHES ALEATÓRIOS
========================= */

setInterval(() => {

  if (Math.random() < 0.3) {

    glitchScreen(3);

  }

}, 5000);