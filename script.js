const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const tituloTexto = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const checkboxMusica = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");

checkboxMusica.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
        musica.loop;
    } else {
        musica.paused();
    }
});

btnFoco.addEventListener("click", () => {
    alterarContexto("foco");
    btnFoco.classList.add("active");
});

btnCurto.addEventListener("click", () => {
    alterarContexto("descanso-curto");
    btnCurto.classList.add("active");
});

btnLongo.addEventListener("click", () => {
    alterarContexto("descanso-longo");
    btnLongo.classList.add("active");
});

function alterarContexto(contexto) {
    botoes.forEach((botao) => botao.classList.remove("active"));

    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            tituloTexto.innerHTML = `Otimize sua produtividade,<br />
                    <strong class="app__title-strong"
                        >mergulhe no que importa.</strong
                    >`;
            break;
        case "descanso-curto":
            tituloTexto.innerHTML = `Que tal uma respirada?<br />
                    <strong class="app__title-strong"
                        >Faça uma pausa curta!</strong
                    >`;
            break;
        case "descanso-longo":
            tituloTexto.innerHTML = `Hora de voltar a superfície.<br />
                    <strong class="app__title-strong"
                        >Faça uma pausa longa!!</strong
                    >`;
            break;

        default:
            break;
    }
}
