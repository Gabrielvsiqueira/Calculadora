const resultadoElement = document.getElementById("resultado");

function inserir(valor) {
    resultadoElement.innerText += valor;
}

function limpar() {
    resultadoElement.innerText = "";
}

function calcular() {
    try {

        const resultado = eval(resultadoElement.innerText);
        resultadoElement.innerText = resultado;

    } catch (error) {
        resultadoElement.innerText = "Erro";
    }
}