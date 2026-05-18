const audio = document.getElementById("ambience");
const entity = document.getElementById("entity");
const cards = document.querySelectorAll(".card");

const audioButton =
document.getElementById("audioButton");

const bootEntity =
document.getElementById("bootEntity");

const eyes =
document.getElementById("entityEyes");

/* =========================
   HOVER NOS CARDS
========================= */

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    const rect =
      card.getBoundingClientRect();

    const type =
      getType(card);

    card.classList.add("sensed");

    entity.style.left =
      rect.left + rect.width / 2 - 120 + "px";

    entity.style.top =
      rect.top - 40 + "px";

    entity.style.opacity = "1";

    applyEffect(type);

    glitchFlash();

  });

  card.addEventListener("mouseleave", () => {

    card.classList.remove("sensed");

    glitchFlash();

    entity.style.opacity = "0";
  });

});

/* =========================
   TIPOS
========================= */

function getType(card) {

  if (card.classList.contains("slender"))
    return "slender";

  if (card.classList.contains("jason"))
    return "jason";

  if (card.classList.contains("springtrap"))
    return "springtrap";

  if (card.classList.contains("herobrine"))
    return "herobrine";

  if (card.classList.contains("pennywise"))
    return "pennywise";

  if (card.classList.contains("backrooms"))
    return "backrooms";
}

/* =========================
   EFEITOS DAS ENTIDADES
========================= */

function applyEffect(type) {

  switch(type) {

    case "slender":

      entity.style.backgroundImage =
        "url('assets/images/entities/slender.png')";

      entity.style.backgroundSize =
        "170%";

      entity.style.filter =
        "brightness(1.2) contrast(2)";

    break;

    case "jason":

      entity.style.backgroundImage =
        "url('assets/images/entities/jason.png')";

      entity.style.backgroundSize =
        "150%";

      entity.style.filter =
        "brightness(1.1) contrast(1.6)";

      microShake();

    break;

    case "springtrap":

      entity.style.backgroundImage =
        "url('assets/images/entities/springtrap.png')";

      entity.style.backgroundSize =
        "135%";

      entity.style.filter =
        "brightness(0.9) contrast(1.8)";

      glitchFlash();

    break;

    case "herobrine":

      entity.style.backgroundImage =
        "url('assets/images/entities/herobrine.png')";

      entity.style.backgroundSize =
        "contain";

      entity.style.filter =
        "brightness(1.5) contrast(2.2)";

    break;

    case "pennywise":

      entity.style.backgroundImage =
        "url('assets/images/entities/pennywise.png')";

      entity.style.backgroundSize =
        "140%";

      entity.style.filter =
        "brightness(1.05) contrast(1.8)";

      microShake();

    break;

    case "backrooms":

      entity.style.backgroundImage =
        "url('assets/images/entities/backrooms.png')";

      entity.style.backgroundSize =
        "contain";

      entity.style.filter =
        "brightness(0.8) contrast(1.4)";

    break;
  }
}

/* =========================
   MICRO SHAKE LEVE
========================= */

function microShake() {

  document.body.animate([
    {
      transform: "translate(0px)"
    },
    {
      transform: "translate(1px, -1px)"
    },
    {
      transform: "translate(-1px, 1px)"
    },
    {
      transform: "translate(0px)"
    }
  ], {
    duration: 120
  });
}

/* =========================
   GLITCH LEVE
========================= */

function glitchFlash() {

  document.body.classList.add(
    "vhs-active"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "vhs-active"
    );

  }, 80);
}

/* =========================
   SYSTEM ERRORS
========================= */

const errors = [

  "ERRO DE SINAL",
  "PACOTE CORROMPIDO",
  "ANOMALIA DETECTADA",
  "RECONNECTING...",
  "ENTITY SIGNAL FOUND",
  "PROTOCOLO INVÁLIDO",
  "ERRO DE SEGURANÇA"

];

function spawnError() {

  const error =
    document.createElement("div");

  error.classList.add(
    "system-error"
  );

  error.innerText =
    errors[Math.floor(
      Math.random() * errors.length
    )];

  error.style.left =
    Math.random() *
    (window.innerWidth - 300) + "px";

  error.style.top =
    Math.random() *
    (window.innerHeight - 100) + "px";

  document.body.appendChild(error);

  glitchFlash();

  setTimeout(() => {

    error.remove();

  }, 1800);
}

/* loop leve */

setInterval(() => {

  if (Math.random() < 0.4) {

    spawnError();

  }

}, 10000);

/* =========================
   TRANSIÇÃO ENTRE PÁGINAS
========================= */

function openPage(page) {

  document.body.classList.add(
    "transitioning"
  );

  entity.style.opacity = "1";

  entity.style.left = "50%";
  entity.style.top = "50%";

  glitchFlash();

  setTimeout(() => {

    window.location.href = page;

  }, 700);
}

/* =========================
   ENABLE TRANSMISSION
========================= */

if (audioButton) {

  audioButton.addEventListener(
    "click",
    () => {

      if (audio) {

        audio.volume = 0.2;

        audio.play();
      }

      glitchFlash();

      audioButton.innerText =
        "TRANSMISSION ENABLED";

      audioButton.style.borderColor =
        "#00ff99";

      audioButton.style.color =
        "#00ff99";

      setTimeout(() => {

        audioButton.style.opacity = "0";

      }, 1200);

      setTimeout(() => {

        audioButton.style.display =
          "none";

      }, 2000);

    }
  );
}

/* =========================
   BOOT SCREEN
========================= */

window.addEventListener("load", () => {

  const boot =
    document.getElementById(
      "bootScreen"
    );

  const glitchLoop =
    setInterval(() => {

      if (Math.random() < 0.45) {

        glitchFlash();

        flashBootEntity();
      }

    }, 500);

  setTimeout(() => {

    boot.style.opacity = "0";

  }, 5000);

  setTimeout(() => {

    clearInterval(glitchLoop);

    boot.style.display = "none";

  }, 6500);

});

/* =========================
   ENTIDADE NO BOOT
========================= */

function flashBootEntity() {

  if (!bootEntity) return;

  const x =
    Math.random() *
    (window.innerWidth - 260);

  const y =
    Math.random() *
    (window.innerHeight - 420);

  bootEntity.style.left =
    x + "px";

  bootEntity.style.top =
    y + "px";

  bootEntity.style.opacity =
    "0.85";

  setTimeout(() => {

    bootEntity.style.opacity =
      "0";

  }, 100);
}

/* =========================
   ENTITY EYES
========================= */

let eyesActive = false;

function spawnEyes() {

  if (eyesActive || !eyes) return;

  eyesActive = true;

  eyes.style.left =
    Math.random() *
    (window.innerWidth - 240) + "px";

  eyes.style.top =
    Math.random() *
    (window.innerHeight - 140) + "px";

  eyes.style.opacity = "1";

  glitchFlash();

  const protocol =
    document.createElement("div");

  protocol.classList.add(
    "protocol-warning"
  );

  protocol.innerText =
    "ENTIDADE TENTANDO ATRAVESSAR";

  document.body.appendChild(protocol);

  setTimeout(() => {

    eyes.style.opacity = "0";

    protocol.remove();

    eyesActive = false;

  }, 2200);
}

/* loop dos olhos */

setInterval(() => {

  if (Math.random() < 0.65) {

    spawnEyes();

  }

}, 9000);