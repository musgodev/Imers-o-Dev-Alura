function adicionarFilme() {
    var filmeInserido = document.getElementById("filme").value;

    if (filmeInserido.endsWith(".jpg")) {
        var boxCatalogo =  document.getElementById("listaFilmes");
        boxCatalogo.innerHTML = boxCatalogo.innerHTML + "<img src=" + filmeInserido + ">";
    }
    else if (filmeInserido.endsWith(".png")) {
        var boxCatalogo =  document.getElementById("listaFilmes");
        boxCatalogo.innerHTML = boxCatalogo.innerHTML + "<img src=" + filmeInserido + ">";
    }

    else {
        console.error("Formato Incompativel, inserir img.jpg")
    }
    
    document.getElementById("filme").value = ""
}