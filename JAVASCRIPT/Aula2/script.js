// EXERCÍCIOS DE FIXAÇÃO A–F — JavaScript Aula 2

// A. Par ou ímpar usando o operador módulo (%).
document.getElementById("verificarPar").addEventListener("click", function () {
  const valor = document.getElementById("numeroPar").value.trim();
  const saida = document.getElementById("resultadoPar");

  if (valor === "") {
    saida.textContent = "Informe um número.";
    return;
  }

  const numero = Number(valor);
  if (!Number.isFinite(numero) || !Number.isInteger(numero)) {
    saida.textContent = "Digite um número inteiro válido.";
  } else if (numero % 2 === 0) {
    saida.textContent = `${numero} é par.`;
  } else {
    saida.textContent = `${numero} é ímpar.`;
  }
});

// B. Desconto de 10% para compras a partir de R$ 200.
document.getElementById("calcularDesconto").addEventListener("click", function () {
  const valorTexto = document.getElementById("valorCompra").value.trim();
  const saida = document.getElementById("resultadoDesconto");

  if (valorTexto === "") {
    saida.textContent = "Informe o valor da compra.";
    return;
  }

  const valor = Number(valorTexto);
  if (!Number.isFinite(valor) || valor < 0) {
    saida.textContent = "Informe um valor válido e não negativo.";
  } else if (valor >= 200) {
    const desconto = valor * 0.10;
    saida.textContent = `Desconto: ${desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}. Total: ${(valor - desconto).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}.`;
  } else {
    saida.textContent = `Sem desconto. Total: ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}.`;
  }
});

// C. Controle de acesso com idade e cadastro ativo.
document.getElementById("verificarAcesso").addEventListener("click", function () {
  const idadeTexto = document.getElementById("idadeAcesso").value.trim();
  const cadastro = document.getElementById("cadastroAtivo").value;
  const saida = document.getElementById("resultadoAcesso");

  if (idadeTexto === "" || cadastro === "") {
    saida.textContent = "Informe a idade e selecione a situação do cadastro.";
    return;
  }

  const idade = Number(idadeTexto);
  if (!Number.isFinite(idade) || !Number.isInteger(idade) || idade < 0) {
    saida.textContent = "Informe uma idade inteira válida.";
  } else if (idade >= 18 && cadastro === "sim") {
    saida.textContent = "Acesso permitido.";
  } else {
    saida.textContent = "Acesso negado.";
  }
});

// D. Saudação com nome informado pelo usuário.
document.getElementById("saudar").addEventListener("click", function () {
  const nome = document.getElementById("nomeUsuario").value.trim();
  const saida = document.getElementById("resultadoSaudacao");

  if (nome === "") {
    saida.textContent = "Digite seu nome.";
  } else {
    saida.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
  }
});

// E. Classificação de temperatura.
// Os limites abaixo são critérios adotados, pois o material não especifica faixas.
document.getElementById("classificarTemperatura").addEventListener("click", function () {
  const texto = document.getElementById("temperatura").value.trim();
  const saida = document.getElementById("resultadoTemperatura");

  if (texto === "") {
    saida.textContent = "Informe a temperatura.";
    return;
  }

  const temperatura = Number(texto);
  if (!Number.isFinite(temperatura)) {
    saida.textContent = "Informe uma temperatura válida.";
  } else if (temperatura < 15) {
    saida.textContent = "Está frio.";
  } else if (temperatura <= 25) {
    saida.textContent = "A temperatura está agradável.";
  } else {
    saida.textContent = "Está quente.";
  }
});

// F. Validação de notas entre 0 e 10.
document.getElementById("validarNota").addEventListener("click", function () {
  const texto = document.getElementById("notaValidar").value.trim();
  const saida = document.getElementById("resultadoNota");

  if (texto === "") {
    saida.textContent = "Informe uma nota.";
    return;
  }

  const nota = Number(texto);
  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    saida.textContent = "Nota inválida. Digite um valor entre 0 e 10.";
  } else {
    saida.textContent = "Nota válida.";
  }
});
