var deleteUrl = "http://localhost/APIREST-ImpostodeRenda/ApiRestImpostoDeRenda/controller/index.php"; 

var pessoaToDelete = JSON.parse(localStorage.getItem('pessoaToDelete'));
console.log(pessoaToDelete.id)

fetch(deleteUrl, {
    method: "DELETE", 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({'id': pessoaToDelete.id}), 
})
.then(function (response) {
    if (JSON.stringify(response.status) == "200") {
        console.log(JSON.stringify(response))
       alert("Dados Excluidos com sucesso");
        window.location.href = "http://localhost/APIREST-ImpostodeRenda/ApiRestImpostoDeRenda/view/listagem.php";

    } else {
        alert("Falha ao atualizar os dados");
        window.location.href = "http://localhost/APIREST-ImpostodeRenda/ApiRestImpostoDeRenda/view/listagem.php";

    }
})
.catch(function (error) {
    console.error(error);
});