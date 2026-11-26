# Atividade prática — JavaScript Aula 2

Projeto de exercícios sobre **entrada de dados, DOM, eventos, conversão de valores e estruturas condicionais**, baseado no módulo JavaScript Aula 2.

## Arquivos do projeto

- `index.html` — página principal com os campos, botões e resultados dos laboratórios e exercícios.
- `laboratorio1.js` — verificador de idade.
- `laboratorio2.js` — calculadora de média de três notas.
- `script.js` — exercícios de fixação A, B, C, D, E e F.
- `style.css` — estilos visuais da página.

## Como executar

1. Extraia todos os arquivos do ZIP para uma mesma pasta.
2. Não altere os nomes dos arquivos nem separe os arquivos JavaScript do `index.html`.
3. Abra o arquivo `index.html` em um navegador (Google Chrome, Edge ou Firefox).
4. Preencha os campos e clique nos botões para conferir os resultados.

Não é necessário instalar programas, extensões ou bibliotecas.

## O que cada parte faz

### Laboratório 1 — Verificador de idade
- Solicita uma idade.
- Exibe uma mensagem se o campo estiver vazio.
- Aceita somente números inteiros de 0 a 120.
- Informa se a pessoa é maior ou menor de idade.

Testes sugeridos: `17` (menor), `18` (maior), campo vazio, `-2` (inválida) e `18.5` (inválida).

### Laboratório 2 — Calculadora de média
- Recebe três notas.
- Valida se os três campos foram preenchidos.
- Aceita notas de 0 a 10.
- Calcula a média aritmética.
- Média maior ou igual a 6: **Aprovado**; abaixo de 6: **Recuperação**.

Testes sugeridos: `6, 6, 6` (média 6); `0, 0, 0` (média 0); `10, 10, 10` (média 10); testar também campo vazio e nota acima de 10.

### Exercícios de fixação
- **A — Par ou ímpar:** usa o operador módulo `%`.
- **B — Desconto:** aplica 10% de desconto para compras a partir de R$ 200.
- **C — Controle de acesso:** exige idade mínima de 18 anos e cadastro ativo.
- **D — Saudação:** utiliza o nome digitado pelo usuário.
- **E — Temperatura:** classifica como frio, agradável ou quente. Como o material da aula não determina limites, foram adotados estes critérios: abaixo de 15 °C = frio; de 15 °C a 25 °C = agradável; acima de 25 °C = quente.
- **F — Validação de notas:** verifica se a nota está entre 0 e 10.

## Conceitos utilizados

`document.getElementById()`, `.value`, `.textContent`, `addEventListener("click", ...)`, `Number()`, `Number.isFinite()`, `Number.isInteger()`, operador `%` e estruturas `if`, `else if` e `else`.

## Observação

Os arquivos JavaScript são separados para facilitar a identificação de cada laboratório. O `index.html` carrega os três scripts automaticamente. Mantenha os cinco arquivos principais (`index.html`, os três arquivos `.js` e `style.css`) na mesma pasta.
