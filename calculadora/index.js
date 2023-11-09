function insert(num){
    // Função para inserir um elemento na calculadora
    var numero = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = numero + num;
}

function clean(){
    // Função que irá limpar a calculadora, tudo que foi inserido será apagado
    document.querySelector('.resultado').innerHTML = "";
}

function back(){
    // Essa função apagará elemento por elemento, começando da direita para a esquerda
    let resultado = document.querySelector(".resultado").innerHTML;
    document.querySelector(".resultado").innerHTML = resultado.substring(0, resultado.length-1);
    // Obs. resultado.substring() (Basicamente irá retornar uma parte da string entre os índices inicio e fim)
    // resultado.length (Retorna  o comprimento da string)
}

function calculate(){
    // Função que calcula os resultados
    // Se algum elemento por inserido, irá ser feito o cálculo
    // Obs. função "eval" (foi utilizada para fazer o cálculo)
    // !!! A função eval() deve ser usada com cuidado, ler instruções MDN
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
    let resultado = document.querySelector(".resultado").innerHTML;
    if(resultado){
        document.querySelector('.resultado').innerHTML = eval(resultado);
    } else {
        document.querySelector('.resultado').innerHTML = "ERROR!!"
    }
}
