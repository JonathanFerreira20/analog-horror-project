/* =========================
   ELEMENTOS
========================= */

const scene1 =
document.getElementById("scene1");

const scene2 =
document.getElementById("scene2");

const scene3 =
document.getElementById("scene3");

const overlay =
document.getElementById("overlay");

const springtrapFull =
document.getElementById("springtrapFull");

const finalText =
document.getElementById("finalText");

/* =========================
   FRASES GLITCH
========================= */

const messages = [

  "ELE SEMPRE VOLTA",
  "ELE ESTÁ AQUI",
  "VOCÊ NÃO PODE ESCONDER ELE",
  "O SISTEMA FALHOU",
  "NÃO OLHE PARA TRÁS",
  "ELE ENCONTROU VOCÊ",
  "TARDE DEMAIS",
  "EU AINDA ESTOU AQUI"

];

/* =========================
   GLITCH
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

  }, 300);
}

/* =========================
   CENA 2
========================= */

function nextScene() {

  glitchScreen();

  overlay.style.opacity = "0.4";

  setTimeout(() => {

    overlay.style.opacity = "0";

    scene1.classList.remove("active");

    scene2.classList.add("active");

  }, 500);
}

/* =========================
   MENSAGENS
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

  msg.style.left =
    Math.random() *
    (window.innerWidth - 300) + "px";

  msg.style.top =
    Math.random() *
    (window.innerHeight - 100) + "px";

  document.body.appendChild(msg);

  setTimeout(() => {

    msg.remove();

  }, 1200);
}

/* =========================
   CENA FINAL
========================= */

function finalScene() {

  /* tela preta */
  overlay.style.opacity = "1";

  /* remove cena da história */
  scene2.classList.remove("active");

  /* frases */
  const laughMessages = [

    "HAHAHAHAHAHA",
    "HEHEHEHEHE",
    "ELE VOLTOU",
    "VOCÊ NÃO PODE ESCAPAR",
    "ELE ESTÁ VIVO",
    "TARDE DEMAIS",
    "ELE SEMPRE VOLTA",
    "VOCÊ ENCONTROU ELE"

  ];

  /* cria mensagens */
  function spawnLaugh() {

    const msg =
    document.createElement("div");

    msg.classList.add("glitchMessage");

    msg.innerText =
      laughMessages[
        Math.floor(
          Math.random() *
          laughMessages.length
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
      (14 + Math.random() * 28) + "px";

    document.body.appendChild(msg);

    /* remove */
    setTimeout(() => {

      msg.remove();

    }, 700);
  }

  /* glitches fortes */
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

  /* spawn mensagens */
  const laughLoop =
  setInterval(() => {

    spawnLaugh();

  }, 120);

  /* depois aparece springtrap */
  setTimeout(() => {

    /* limpa glitches leves */
    clearInterval(laughLoop);

    /* ativa cena final */
    scene3.classList.add("active");

    overlay.style.opacity = "0";

    /* springtrap invade */
    springtrapFull.style.opacity = "1";

    springtrapFull.style.transform =
      "scale(1.08)";

  }, 2600);

  /* frase final */
  setTimeout(() => {

    finalText.style.opacity = "1";

  }, 3400);

  /* volta home */
  setTimeout(() => {

    clearInterval(finalGlitch);

    document.body.style.transform =
      "none";

    window.location.href =
      "../../index.html";

  }, 5600);
}

/* =========================
   GLITCHES ALEATÓRIOS
========================= */

setInterval(() => {

  if (Math.random() < 0.3) {

    glitchScreen(3);

  }

}, 5000);