function adicionarContato() {
            
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    
    var tabela = document.getElementById("tabelaContatos");
    var newRow = tabela.insertRow(tabela.rows.length);

    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}