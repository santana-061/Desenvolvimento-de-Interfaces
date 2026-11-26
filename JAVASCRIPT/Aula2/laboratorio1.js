// LABORATÓRIO 1 — Verificador de idade
// Valida se o campo foi preenchido e se a idade é um número inteiro entre 0 e 120.

const campoIdade = document.getElementById("idade");
const botaoVerificarIdade = document.getElementById("verificar");
const resultadoIdade = document.getElementById("resultadoIdade");

botaoVerificarIdade.addEventListener("click", function () {
  const valorDigitado = campoIdade.value.trim();

  // Verifica o campo vazio antes de converter para Number.
  if (valorDigitado === "") {
    resultadoIdade.textContent = "Informe a idade.";
    return;
  }

  const idade = Number(valorDigitado);

  if (!Number.isFinite(idade) || !Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultadoIdade.textContent = "Idade inválida. Digite um número inteiro entre 0 e 120.";
  } else if (idade >= 18) {
    resultadoIdade.textContent = "Maior de idade.";
  } else {
    resultadoIdade.textContent = "Menor de idade.";
  }
});
