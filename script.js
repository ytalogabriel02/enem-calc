const linguagens = document.getElementById("linguagens");
const humanas = document.getElementById("humanas");
const natureza = document.getElementById("natureza");
const matematica = document.getElementById("matematica");
const redacao = document.getElementById("redacao");

const pesoL = document.getElementById("pesoL");
const pesoH = document.getElementById("pesoH");
const pesoN = document.getElementById("pesoN");
const pesoM = document.getElementById("pesoM");
const pesoR = document.getElementById("pesoR");

const corte = document.getElementById("corte");

const mediaFinal = document.getElementById("mediaFinal");
const situacao = document.getElementById("situacao");

const maiorNota = document.getElementById("maiorNota");
const menorNota = document.getElementById("menorNota");

const barraL = document.getElementById("barraL");
const barraH = document.getElementById("barraH");
const barraN = document.getElementById("barraN");
const barraM = document.getElementById("barraM");
const barraR = document.getElementById("barraR");

function calcularMedia() {

    const notaL = Number(linguagens.value);
    const notaH = Number(humanas.value);
    const notaN = Number(natureza.value);
    const notaM = Number(matematica.value);
    const notaR = Number(redacao.value);

    const pL = Number(pesoL.value);
    const pH = Number(pesoH.value);
    const pN = Number(pesoN.value);
    const pM = Number(pesoM.value);
    const pR = Number(pesoR.value);

    const notaCorte = Number(corte.value);

    if (!notaL || !notaH || !notaN || !notaM || !notaR || !pL || !pH || !pN || !pM || !pR || !notaCorte) {
        alert("Preencha todos os campos");
        return;
    }

    const somaPesos = pL + pH + pN + pM + pR;

    const media = (notaL * pL + notaH * pH + notaN * pN + notaM * pM + notaR * pR) / somaPesos;

    mediaFinal.innerHTML = `Média Final: ${media.toFixed(2)}`;

    if (media >= notaCorte) {
        situacao.innerHTML = "Aprovado";
        situacao.style.color = "green";
    } else {
        situacao.innerHTML = "Não aprovado";
        situacao.style.color = "red";
    }

    const notas = [notaL, notaH, notaN, notaM, notaR];

    maiorNota.innerHTML = `Maior nota: ${Math.max(...notas)}`;
    menorNota.innerHTML = `Menor nota: ${Math.min(...notas)}`;

    barraL.style.width = notaL / 10 + "%";
    barraH.style.width = notaH / 10 + "%";
    barraN.style.width = notaN / 10 + "%";
    barraM.style.width = notaM / 10 + "%";
    barraR.style.width = notaR / 10 + "%";

    barraL.innerHTML = notaL;
    barraH.innerHTML = notaH;
    barraN.innerHTML = notaN;
    barraM.innerHTML = notaM;
    barraR.innerHTML = notaR;
}

document.getElementById("calcular").addEventListener("click", calcularMedia);