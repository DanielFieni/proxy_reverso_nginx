var tabelaBody = document.getElementById('tabelaBody');

function inserir() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let contador_linhas = tabelaBody.getElementsByTagName('tr').length;
    let i = contador_linhas + 1;

    tabelaBody.innerHTML += 
            "<tr id='" + i + "'>"+
                "<td>" + nome.value + "</td>"+
                "<td>" + email.value + "</td>"+
                "<td>" + telefone.value + "</td>"+
                "<td class='cmpBotao'>" +
                    "<button class='btn btn-editar' "+"onclick='editar("+ i + ")'"+">Editar</button>" +
                    "<button class='btn btn-excluir' "+"onclick='excluir("+ i + ")'"+">Excluir</button>" +
                "</td>"+
            "</tr>";

    nome.value = '';
    email.value = '';
    telefone.value = '';

}

function excluir(linhaId) {
    var linha = document.getElementById(linhaId);
    linha.parentNode.removeChild(linha);
}

function editar(linhaId) {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    var linha = document.getElementById(linhaId);
    var campos = linha.getElementsByTagName("td");
    campos[0].innerHTML = nome.value;
    campos[1].innerHTML = email.value;
    campos[2].innerHTML = telefone.value;

    nome.value = '';
    email.value = '';
    telefone.value = '';
}