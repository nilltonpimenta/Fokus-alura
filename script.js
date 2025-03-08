const html = document.querySelector("html");
const BtnFoco = document.querySelector(".app__card-button--foco");
const BtnCurto = document.querySelector(".app__card-button--curto");
const BtnLongo = document.querySelector(".app__card-button--longo");

BtnFoco.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
});

BtnCurto.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
});

BtnLongo.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
});
