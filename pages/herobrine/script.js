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

const herobrineCave =
document.getElementById("herobrineCave");

const finalText =
document.getElementById("finalText");

/* =========================
   MENSAGENS GLITCH
========================= */

const messages = [

  "ELE ESTÁ NESSE MUNDO",
  "SAVE CORROMPIDO",
  "NÃO OLHE PARA AS ÁRVORES",
  "ALGO ESTÁ OBSERVANDO",
  "ERRO DE CHUNK",
  "VOCÊ NÃO ESTÁ SOZINHO",
  "ELE SEMPRE ESTEVE AQUI",
  "BLOCO INVÁLIDO DETECTADO",
  "MOVIMENTO DESCONHECIDO"

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
        ${(Math.random() - 0.5) * power}px,
        ${(Math.random() - 0.5) * power}px
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

  overlay.style.opacity = "0.4";

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
   SPAWN MESSAGES
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

  /* posição aleatória */

  msg.style.left =
    Math.random() *
    (window.innerWidth - 300) + "px";

  msg.style.top =
    Math.random() *
    (window.innerHeight - 100) + "px";

  /* tamanho aleatório */

  msg.style.fontSize =
    (14 + Math.random() * 20) + "px";

  document.body.appendChild(msg);

  /* remove */

  setTimeout(() => {

    msg.remove();

  }, 900);
}

/* =========================
   CENA FINAL
========================= */

function finalScene() {

  /* tela preta */

  overlay.style.opacity = "1";

  /* remove cena anterior */

  scene3.classList.remove("active");

  /* mensagens */

  const messageLoop =
  setInterval(() => {

    spawnMessage();

  }, 120);

  /* glitch pesado */

  const finalGlitch =
  setInterval(() => {

    document.body.style.transform =
      `
      translate(
        ${(Math.random()-0.5)*16}px,
        ${(Math.random()-0.5)*16}px
      )
      `;

  }, 45);

  /* ativa cena final */

  setTimeout(() => {

    scene4.classList.add("active");

    overlay.style.opacity = "0";

    /* Herobrine aparece */

    herobrineCave.style.opacity = "1";

    herobrineCave.style.transform =
      "scale(1.05)";

  }, 2600);

  /* frase */

  setTimeout(() => {

    finalText.style.opacity = "1";

  }, 3400);

  /* volta home */

  setTimeout(() => {

    clearInterval(finalGlitch);

    clearInterval(messageLoop);

    document.body.style.transform =
      "none";

    window.location.href =
      "../../index.html";

  }, 5800);
}

/* =========================
   GLITCHES ALEATÓRIOS
========================= */

setInterval(() => {

  if (Math.random() < 0.35) {

    glitchScreen(3);

  }

}, 5000);