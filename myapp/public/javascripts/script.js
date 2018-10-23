function exibeClientes(clientes) {
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var dadosCliente = 'ID: ' + cliente.id +
            '<br>Nome: ' + cliente.nome +
            '<br>Endereço: ' + cliente.endereco +
            '<br>Telefone: ' + cliente.telefone +
            '<br>Email: ' + cliente.email +
            '<br><a href="#" onClick="deletaCliente(' + cliente.id + ')">EXCLUIR</a>';
        document.getElementById('result').innerHTML += dadosCliente + '<br><br>';
    }
}

function deletaCliente(id) {
    $(document).ready(function () {
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
                    else
                       alert(dados.data);
                }
            });
        });
}