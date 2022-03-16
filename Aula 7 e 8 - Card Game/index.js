var carta1 = {  
    nome:"Aprendiz",
    imagem: "https://browiki.org/images/9/91/Arte_Aprendizes.png",
    atributos: {
    str:5,
    agi:5,
    vit:5,
    int:5,
    dex:5,
    luk:5
    } //fechamento atributos
};

var carta2 = {  
    nome:"Super Aprendiz",
    imagem: "https://browiki.org/images/3/33/Arte_Superaprendizes.png",
    atributos: {
    str:10,
    agi:10,
    vit:10,
    int:10,
    dex:10,
    luk:10
    } 
};

var carta3 = {  
    nome:"Arqueiro",
    imagem: "https://browiki.org/images/b/b2/Arte_Arqueiros.png",
    atributos: {
    str:0,
    agi:35,
    vit:0,
    int:0,
    dex:45,
    luk:0
    } 
};

var carta4 = {  
    nome:"Espadachim",
    imagem: "https://browiki.org/images/9/9f/Arte_Espadachins.png",
    atributos: {
    str:45,
    agi:15,
    vit:5,
    int:0,
    dex:15,
    luk:0
    } 
};

var carta5 = {  
    nome:"Gatuno",
    imagem: "https://browiki.org/images/5/52/Arte_Gatunos.png",
    atributos: {
    str:25,
    agi:35,
    vit:0,
    int:0,
    dex:20,
    luk:0
    }
};

var carta6 = {  
    nome:"Mago",
    imagem: "https://browiki.org/images/1/18/Arte_Magos.png",
    atributos: {
    str:0,
    agi:0,
    vit:0,
    int:45,
    dex:35,
    luk:0
    }
};

var carta7 = {  
    nome:"Noviço",
    imagem: "https://browiki.org/images/e/e4/Arte_Novi%C3%A7os.png",
    atributos: {
    str:0,
    agi:0,
    vit:0,
    int:55,
    dex:25,
    luk:0
    }
};

var carta8 = {  
    nome:"Alquimista",
    imagem: "https://browiki.org/images/2/27/Arte_Alquimistas.png",
    atributos: {
    str:35,
    agi:15,
    vit:0,
    int:85,
    dex:45,
    luk:0
    }
};

var carta9 = {  
    nome:"Arruaceiro",
    imagem: "https://browiki.org/images/3/3b/Arte_Arruaceiros.png",
    atributos: {
    str:75,
    agi:50,
    vit:0,
    int:0,
    dex:55,
    luk:0
    }
};

var carta10 = {  
    nome:"Bardo",
    imagem: "https://browiki.org/images/0/0d/Arte_Bardos.png",
    atributos: {
    str:0,
    agi:70,
    vit:0,
    int:11,
    dex:90,
    luk:0
    }
};

var carta11 = {  
    nome:"Bruxo",
    imagem: "https://browiki.org/images/9/99/Arte_Bruxos.png",
    atributos: {
    str:0,
    agi:0,
    vit:0,
    int:99,
    dex:81,
    luk:0
    }
};

var carta12 = {  
    nome:"Cavaleiro",
    imagem: "https://browiki.org/images/6/6a/Arte_Cavaleiros.png",
    atributos: {
    str:85,
    agi:30,
    vit:20,
    int:0,
    dex:45,
    luk:0
    }
};

var carta13 = {  
    nome:"Caçador",
    imagem: "https://browiki.org/images/f/fd/Arte_Ca%C3%A7adores.png",
    atributos: {
    str:0,
    agi:81,
    vit:0,
    int:0,
    dex:99,
    luk:0
    }
};

var carta14 = {  
    nome:"Ferreiro",
    imagem: "https://browiki.org/images/9/92/Arte_Ferreiros.png",
    atributos: {
    str:50,
    agi:0,
    vit:30,
    int:0,
    dex:50,
    luk:50
    }
};

var carta15 = {  
    nome:"Mercenário",
    imagem: "https://browiki.org/images/6/63/Arte_Mercen%C3%A1rios.png",
    atributos: {
    str:80,
    agi:20,
    vit:30,
    int:0,
    dex:50,
    luk:0
    }
};

var carta16 = {  
    nome:"Monge",
    imagem: "https://browiki.org/images/d/d1/Arte_Monges.png",
    atributos: {
    str:90,
    agi:0,
    vit:0,
    int:40,
    dex:50,
    luk:0
    }
};

var carta17 = {  
    nome:"Odalisca",
    imagem: "https://browiki.org/images/3/3c/Arte_Odaliscas.png",
    atributos: {
    str:0,
    agi:30,
    vit:30,
    int:30,
    dex:90,
    luk:0
    }
};

var carta18 = {  
    nome:"Sábio",
    imagem: "https://browiki.org/images/7/77/Arte_S%C3%A1bios.png",
    atributos: {
    str:0,
    agi:0,
    vit:0,
    int:81,
    dex:99,
    luk:0
    }
};

var carta19 = {  
    nome:"Sacerdote",
    imagem: "https://browiki.org/images/9/92/Arte_Sacerdotes.png",
    atributos: {
    str:0,
    agi:0,
    vit:20,
    int:80,
    dex:80,
    luk:0
    }
};

var carta20 = {  
    nome:"Templário",
    imagem: "https://browiki.org/images/7/74/Arte_Templ%C3%A1rios.png",
    atributos: {
    str:20,
    agi:0,
    vit:90,
    int:35,
    dex:35,
    luk:0
    }
};




var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12,
carta13, carta14, carta15, carta16, carta17, carta18, carta19, carta20]

var cartaDoJogador;
var cartaDaMaquina; 
var txtEscolhaAtributo = document.getElementById("escolha-atributo");
var selecaoSelecionarAtributo = document.getElementsByName("atributo");


function sortearCarta() {
    
    var numeroCartaMaquina = parseInt(Math.random() * 20);
    cartaDaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaDaMaquina)

    var divMolduras = document.querySelector(".box-posicionamento-molduras");
    

    var numeroCartaJogador = parseInt(Math.random() * 20);
    
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 20);
    }
    
    cartaDoJogador = cartas[numeroCartaJogador]
    
    console.log(cartaDoJogador)
    txtEscolhaAtributo.innerHTML = "Escolha seu Atributo."
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("botao-sorteio").disabled = true;
    divMolduras.style.opacity = "1";
    exibirAtributos()
    exibirCartaJogador()
    exibirCartaAnonima()
    
    

}


function exibirAtributos() {
    var boxSelecionarAtributo = document.getElementById("box-selecionar-atributos");
    var textOpcoes = ""

    for (var atributo in cartaDoJogador.atributos) {
        
        textOpcoes += "<option>" + atributo +  "</option>"
 
    }
    boxSelecionarAtributo.innerHTML = textOpcoes
    document.getElementById("box-selecionar-atributos").hidden = false;
}


function receberAtributoSelecionado() {
    var atributoSelecionado = document.getElementById("box-selecionar-atributos").value;
    return atributoSelecionado


    
}


function iniciarJogo() {
    var atributoSelecionado = receberAtributoSelecionado();
    var atributoCartaAtualJogador = cartaDoJogador.atributos[atributoSelecionado]
    var atributoCartaAtualMaquina = cartaDaMaquina.atributos[atributoSelecionado]
    var divResultadoDaBatalha = document.getElementById("resultado");
    var botaoTentarNovamente = document.getElementById("btnreload");
    console.log("Atributo Selecionado: " + atributoSelecionado)
    console.log("Atributo da maquina: " + atributoCartaAtualMaquina)
    console.log("Seu Atributo: " + atributoCartaAtualJogador)


if ( atributoCartaAtualMaquina < atributoCartaAtualJogador) {
    console.log("Parabens, voce ganhou a batalha.")
    divResultadoDaBatalha.innerHTML = "Parabens, voce ganhou a batalha, seu inimigo era um(a): " + cartaDaMaquina.nome + "."
}
else if (atributoCartaAtualJogador < atributoCartaAtualMaquina){ 
    console.log("Eita, parece que voce tomou uma surra.")
    divResultadoDaBatalha.innerHTML = "Eita, parece que voce tomou uma surra, seu inimigo era um(a): " + cartaDaMaquina.nome + "."
} 
else {
    console.log("Parece que voces empataram.")
    divResultadoDaBatalha.innerHTML = "Parece que voces empataram, seu inimigo era um(a): " + cartaDaMaquina.nome + "."
}
document.getElementById("btnJogar").disabled = true;
exibirCartaMaquina()
botaoTentarNovamente.hidden = false;
   
}

function reload() {
    location.reload();
    window.scrollTo(0, 0);
    
}

function exibirCartaJogador() {
    var divMolduras = document.querySelector(".box-posicionamento-molduras");
    var divCartaJogador = document.querySelector(".posicionamento-img-carta-jogador");
    var boxListarAtributos = document.querySelector(".box-posicionamento-atributos");
    var textOpcoes = ""
    var divNomeDaCartaJogador = document.querySelector(".box-nome-carta-jogador");

    for (var atributo in cartaDoJogador.atributos) {
        
        textOpcoes += "<p>" + atributo + " : " + cartaDoJogador.atributos[atributo] + "</p>"
 
    }
    boxListarAtributos.innerHTML = textOpcoes
    divNomeDaCartaJogador.innerHTML = "<h3>" + cartaDoJogador.nome + "</h3>"

    divCartaJogador.style.backgroundImage = "url(" + cartaDoJogador.imagem + ")"; //`ulr(${cartaDoJogador.imagem})`
     
}

function exibirCartaMaquina() {
    var divMolduras = document.querySelector(".box-posicionamento-molduras");
    var divCartaMaquina = document.querySelector(".posicionamento-img-carta-maquina");
    var divNomeDaCartaMaquina = document.querySelector(".box-nome-carta-maquina");
    var boxListarAtributosMaquina = document.querySelector(".box-posicionamento-atributos-maquina");
    var textOpcoes = ""

    for (var atributo in cartaDaMaquina.atributos) {
        
        textOpcoes += "<p>" + atributo + " : " + cartaDaMaquina.atributos[atributo] + "</p>"
 
    }
    boxListarAtributosMaquina.innerHTML = textOpcoes
    
    
    
    divCartaMaquina.style.backgroundImage = "url(" + cartaDaMaquina.imagem + ")"; //`ulr(${cartaDoJogador.imagem})` 
    divNomeDaCartaMaquina.innerHTML = "<h3>" + cartaDaMaquina.nome + "</h3>"
}

function exibirCartaAnonima() {
    var divMolduras = document.querySelector(".box-posicionamento-molduras");
    var divCartaAnonima = document.querySelector(".posicionamento-img-carta-maquina");
    var divNomeDaCartaMaquina = document.querySelector(".box-nome-carta-maquina"); 
    divCartaAnonima.style.backgroundImage = "url(https://123emoji.com/wp-content/uploads/2016/08/Ragnarok-Stickers-2747440.png)"; //`ulr(${cartaDoJogador.imagem})`
    divNomeDaCartaMaquina.innerHTML = "<h3> ??? </h3>"
}




