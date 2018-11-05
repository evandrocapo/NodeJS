function exibeClientes(clientes) {
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var dadosCliente = '<div id="' + cliente.id + '">' +
            'ID: ' + cliente.id +
            '<br>Nome: ' + cliente.nome +
            '<br>Endereço: ' + cliente.endereco +
            '<br>Telefone: ' + cliente.telefone +
            '<br>Email: ' + cliente.email +
            '<br><a href="insere_cliente.html?id=' + cliente.id + '">ALTERAR</a>' +
            '<br><a href="#" onClick="deletaCliente(' + cliente.id +')"> EXCLUIR </a>' +
            '</div>';
        document.getElementById('result').innerHTML += dadosCliente + '<br><br>';
    }
}

function deletaCliente(id){
     $.ajax({
                url: '/cliente/deleta?id=' + id,
                dataType: 'json',
                type: 'post',
                error: function (dados) {
                    alert('Erro: ' + dados.data);
                },
                success: function (dados) {
                    if (dados.status === 'ERRO')
                        alert('Erro: ' + dados.data);
                    else{
                       alert(dados.data);
                       var divResult = document.getElementById('result');
                       divResult.removeChild(document.getElementById(id));
                    }
                }
            });
}

function salvaCliente() {
    var form = document.formCliente;
    var input = {
        nome: form.nome.value,
        endereco: form.endereco.value,
        email: form.email.value,
        telefone: form.telefone.value
    };

    var urlParams = new URLSearchParams(window.location.search);
    var acao;
    if (urlParams.has('id'))
        acao = '/cliente/altera?id=' + urlParams.get('id');
    else
        acao = '/cliente/insere';

    $.ajax({
        url: acao,
        type: 'post',
        data: input,
        error: function (dados) {
            alert('Erro: ' + dados.data);
        },
        success: function (dados) {
            if (dados.status === 'ERRO')
                alert('Erro: ' + dados.data);
            else
                alert(dados.data);
        }
    });
}

function alteraCliente() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        $.ajax({
                url: '/cliente/listaCliente?id=' + urlParams.get('id'),
                        error: function (data) {
                            alert('Erro: ' + data.dados); // estou com duvida !!!!!!!!!!!
                        },
                        success: function (dados) {
                            if (dados.status === 'ERRO')
                                alert('Erro: ' + dados.data);
                                else {
                                    var form = document.formCliente;
                                    var cliente = dados.data[0];
                                    form.nome.value = cliente.nome;
                                    form.endereco.value = cliente.endereco;
                                    form.email.value = cliente.email;
                                    form.telefone.value = cliente.telefone;
                                }
                            }
                        });
            }
        }