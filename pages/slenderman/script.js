const slender =
  document.getElementById("slender");

const glitch =
  document.getElementById("glitch");

const endingScreen =
  document.getElementById("endingScreen");

const endingFace =
  document.getElementById("endingFace");

const endingText =
  document.getElementById("endingText");

const returnButton =
  document.getElementById("returnButton");

/* =========================
   APROXIMAÇÃO DO SLENDERMAN
========================= */

window.addEventListener("scroll", () => {

  const scroll =
    window.scrollY;

  // escala cresce lentamente
  const scale =
    0.45 + scroll * 0.00045;

  // opacidade aumenta
  const opacity =
    0.12 + scroll * 0.0003;

  slender.style.transform =
    `translateX(-50%) scale(${scale})`;

  slender.style.opacity =
    Math.min(opacity, 0.9);

});

/* =========================
   GLITCH ALEATÓRIO
========================= */

setInterval(() => {

  if (Math.random() < 0.35) {

    glitch.style.opacity = "1";

    document.body.style.transform =
      `translate(
        ${(Math.random()-0.5)*4}px,
        ${(Math.random()-0.5)*4}px
      )`;

    setTimeout(() => {

      glitch.style.opacity = "0";

      document.body.style.transform =
        "none";

    }, 120);

  }

}, 2500);

/* =========================
   FINAL CINEMATOGRÁFICO
========================= */

returnButton.addEventListener("click", () => {

  // ativa tela final
  endingScreen.style.opacity = "1";

  endingScreen.style.pointerEvents =
    "all";

  // glitch pesado
  document.body.style.transform =
    "scale(1.02)";

  setTimeout(() => {

    document.body.style.transform =
      "none";

  }, 200);

  // rosto aparece
  setTimeout(() => {

    endingFace.style.opacity = "1";

  }, 700);

  // frase aparece
  setTimeout(() => {

    endingText.style.opacity = "1";

  }, 1600);

  // glitch final
  const finalGlitch =
    setInterval(() => {

      endingFace.style.transform =
        `translate(
          ${(Math.random()-0.5)*8}px,
          ${(Math.random()-0.5)*8}px
        )`;

    }, 120);

  // retorna pro menu
  setTimeout(() => {

    clearInterval(finalGlitch);

    window.location.href =
      "../../index.html";

  }, 7000);

});