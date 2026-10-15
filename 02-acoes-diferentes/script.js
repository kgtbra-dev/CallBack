// EXEMPLO 02 - A mesma função executando ações diferentes.

function ligar() {
console.log("Maquina ligada!");
}

function desligar() {
console.log("Máquina desligada!");
}

// "acao" é o nome do parâmetro que vai guardar a função recebida.
function controlarMaquina(acao) {
acao(); // Executa a função que foi recebida neste momento.
}

controlarMaquina(ligar); // Entrega a funçao ligar.
controlarMaquina(desligar); // Agora entrega a função desligar.
// SAÍDA: Máquina ligada! / Máquina desligada