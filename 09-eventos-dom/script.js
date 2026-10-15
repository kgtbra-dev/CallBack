// document representa a página HTML aberta no navegador.
// querySelector("#btn") localiza o elemento cujo id é "btn".
const botao = document.querySelector("#btn");

// Localiza o parágrafo cujo id é "status".
const status = document.querySelector("#status");

// Esta função será nosso callback: ela descreve o
// que deve acontecer no clique.
function acenderLuz() {
    // textContent altera o TEXTO exibido dentro do parágrafo.
    status.textContent = "Luz acesa!";
}

// addEventListener registra um "ouvinte" de evento.
// "click" é o tipo de evento: o usuário clica no botão.
// acenderLuz SEM parênteses: entregamos a função para o navegador.
// O navegador chama essa função quando acontecer o clique.
botao.addEventListener("click", acenderLuz);