// LABORATÓRIO 2 — Calculadora de média
// Recebe três notas entre 0 e 10, calcula a média e informa o resultado.

const campoNota1 = document.getElementById("nota1");
const campoNota2 = document.getElementById("nota2");
const campoNota3 = document.getElementById("nota3");
const botaoCalcularMedia = document.getElementById("calcularMedia");
const resultadoMedia = document.getElementById("resultadoMedia");

botaoCalcularMedia.addEventListener("click", function () {
  const valores = [campoNota1.value.trim(), campoNota2.value.trim(), campoNota3.value.trim()];

  if (valores.some((valor) => valor === "")) {
    resultadoMedia.textContent = "Preencha as três notas.";
    return;
  }

  const notas = valores.map(Number);

  if (notas.some((nota) => !Number.isFinite(nota) || nota < 0 || nota > 10)) {
    resultadoMedia.textContent = "Notas inválidas. Cada nota deve estar entre 0 e 10.";
    return;
  }

  const media = (notas[0] + notas[1] + notas[2]) / 3;

  if (media >= 6) {
    resultadoMedia.textContent = `Média: ${media.toFixed(2)} — Aprovado.`;
  } else {
    resultadoMedia.textContent = `Média: ${media.toFixed(2)} — Recuperação.`;
  }
});
