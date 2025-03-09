const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const tituloTexto = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const checkboxMusica = document.querySelector("#alternar-musica");
const btnStartPause = document.querySelector("#start-pause span");
const iconStartPause = document.querySelector(".app__card-primary-butto-icon");
const tempoNaTela = document.querySelector("#timer");

const musica = new Audio("/sons/luna-rise-part-one.mp3");
const audioPlay = new Audio("/sons/play.wav");
const audioPausa = new Audio("/sons/pause.mp3");
const audioTempoFinalizado = new Audio("/sons/beep.mp3");

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

checkboxMusica.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
        musica.loop;
    } else {
        musica.pause();
    }
});

btnFoco.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto("foco");
    btnFoco.classList.add("active");
});

btnCurto.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto("descanso-curto");
    btnCurto.classList.add("active");
});

btnLongo.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto("descanso-longo");
    btnLongo.classList.add("active");
});

function alterarContexto(contexto) {
    mostrarTempo();
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

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        alert("Tempo Finalizado");
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
};

btnStartPause.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    btnStartPause.textContent = "Pausar";
    iconStartPause.setAttribute("src", "/imagens/pause.png");
}

function zerar() {
    clearInterval(intervaloId);
    btnStartPause.textContent = "Começar";
    iconStartPause.setAttribute("src", "/imagens/play_arrow.png");
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString("pr-br", {
        minute: "2-digit",
        second: "2-digit",
    });
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
