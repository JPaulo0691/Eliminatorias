var addClube = [];

function adicionarTime() {
    var inClube = document.getElementById("inClube");
    
    var clube = inClube.value;

    if ( clube == "") {
        alert("Por favor insira o nome do clube...");
        inClube.focus;
        return;
    }

    addClube.push({clube: clube});    

    listarClubes();

    inClube.value ="";
    inClube.focus();
    
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarTime)


function listarClubes() {
    
    if (addClube.length == 0){
        alert("Não há clubes no cadastro...Insira!")
        return;
    }

    var lista = ""

    for (var i = 0; i < addClube.length; i++) {

        lista = lista + (i + 1) + ". "
        lista += addClube[i].clube + "\n";

    }

    document.getElementById("outListeam").textContent = lista;
    
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click",listarClubes)

function tabela() {

    var tam = addClube.length;

    if (tam % 2 == 1 || tam == 0) {
        alert("Não há uma relação de clubes pares...\nInsira mais um clube!")
        inClube.focus();
        return;
    }

    var confrontos = "";

    var ultimo = tam - 1;

    for( i = 0; i < tam / 2; i++) {

        confrontos += addClube[i].clube + " x " + addClube[ultimo - i].clube + "\n";

    }

    document.getElementById("outListeam").textContent = confrontos;

}

var btTabela = document.getElementById("btTabela");
btTabela.addEventListener("click",tabela)

