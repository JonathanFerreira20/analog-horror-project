const jasonFar =
document.getElementById("jasonFar");

const jasonMid =
document.getElementById("jasonMid");

const overlay =
document.getElementById("overlay");

/* =========================
   APROXIMAÇÃO CINEMATOGRÁFICA
========================= */

window.addEventListener("scroll", () => {

  const scroll =
    window.scrollY;

  /* Jason distante desaparece */
  if (scroll > 150) {

    jasonFar.style.opacity = "0.08";

    jasonFar.style.transform =
      "scale(1.08) translateX(30px)";
  }

  /* Jason médio aparece */
  if (scroll > 450) {

    jasonMid.style.opacity = "0.45";

    jasonMid.style.transform =
      "scale(1.03)";
  }

  /* aproxima mais */
  if (scroll > 900) {

    jasonMid.style.opacity = "0.7";

    jasonMid.style.transform =
      "scale(1.08)";
  }

  /* quase no final */
  if (scroll > 1300) {

    jasonMid.style.opacity = "1";

    jasonMid.style.transform =
      "scale(1.15)";
  }

});

/* =========================
   GLITCH ALEATÓRIO
========================= */

function randomGlitch() {

  if (Math.random() < 0.4) {

    document.body.style.transform =
      `
      translate(
      ${(Math.random()-0.5)*6}px,
      ${(Math.random()-0.5)*6}px
      )
      `;

    overlay.style.opacity = "0.08";

    setTimeout(() => {

      document.body.style.transform =
        "none";

      overlay.style.opacity = "0";

    }, 120);
  }
}

setInterval(randomGlitch, 4000);

/* =========================
   SAÍDA CINEMATOGRÁFICA
========================= */

function leavePage() {

  /* trava scroll */
  document.body.style.overflow = "hidden";

  /* volta para o topo */
  window.scrollTo(0, 0);

  /* esconde cena antiga */
  const content =
    document.querySelector(".content");

  if (content) {
    content.style.opacity = "0";
  }

  /* overlay */
  overlay.style.opacity = "1";

  /* esconde Jason distante */
  jasonFar.style.opacity = "0";

  /* Jason FULL aparece */
  jasonMid.style.opacity = "1";

  jasonMid.style.left = "50%";

  jasonMid.style.right = "auto";

  jasonMid.style.top = "55%";

  jasonMid.style.bottom = "auto";

  jasonMid.style.transform =
    "translate(-50%, -50%) scale(1.15)";

  /* glitch */
  const glitchLoop =
  setInterval(() => {

    document.body.style.transform =
      `
      translate(
        ${(Math.random() - 0.5) * 10}px,
        ${(Math.random() - 0.5) * 10}px
      )
      `;

  }, 60);

  /* frase final */
  setTimeout(() => {

    document.body.innerHTML += `

      <div id="finalMessage">

        VOCÊ NÃO
        DEVERIA TER
        ENTRADO AQUI

      </div>

    `;

  }, 1000);

  /* voltar para home */
  setTimeout(() => {

    clearInterval(glitchLoop);

    document.body.style.transform =
      "none";

    window.location.href =
      "../../index.html";

  }, 4200);
}