function exibeClientes(clientes) {
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var dadosCliente = 'ID: ' + cliente.id +
            '<br>Nome: ' + cliente.nome +
            '<br>Endereço: ' + cliente.endereco +
            '<br>Telefone: ' + cliente.telefone +
            '<br>Email: ' + cliente.email;
        document.getElementById('result').innerHTML += dadosCliente + '<br><br>';
    }
}