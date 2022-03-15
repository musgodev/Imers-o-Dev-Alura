var gabriel = {nome:"Gabriel", vitorias:0, derrotas:0, empates:0, pontos:0};
var rafaela = {nome:"Rafaela", vitorias:0, derrotas:0, empates:0, pontos:0};
var paulo = {nome:"Paulo", vitorias:0, derrotas:0, empates:0, pontos:0};
var guilherme = {nome:"Guilherme", vitorias:0, derrotas:0, empates:0, pontos:0};

function calcularPontos (player) {
    var pontos = (player.vitorias * 3) + player.empates;
    return pontos;
}

gabriel.pontos = calcularPontos(gabriel);
rafaela.pontos = calcularPontos(rafaela);
paulo.pontos = calcularPontos(paulo);
guilherme.pontos = calcularPontos(guilherme);

var jogadores = [gabriel, rafaela, paulo, guilherme];

function exibirJogadorNaTela (jogadores) {
  var elemento = "";
  for (var i= 0; i < jogadores.length; i++) {
    elemento = elemento + "<tr><td>" + jogadores[i].nome + "</td>" //+= funciona
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria("+ i +")' class='btn-edit'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate("+ i +")' class='btn-edit'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota("+ i +")' class='btn-edit'>Derrota</button></td>"
    elemento += "</tr>" 
}
    
var tabelaJogadores = document.getElementById("tabelaJogadores");
tabelaJogadores.innerHTML = elemento
  
}

exibirJogadorNaTela(jogadores)

function adicionarVitoria(i) {
  var player = jogadores[i]
  player.vitorias++
  player.pontos = calcularPontos(player)
  exibirJogadorNaTela(jogadores)
} 

function adicionarEmpate(i) {
  var player = jogadores[i]
  player.empates++
  player.pontos = calcularPontos(player)
  exibirJogadorNaTela(jogadores)
} 

function adicionarDerrota(i) {
  var player = jogadores[i]
  player.derrotas++
  player.pontos = calcularPontos(player)
  exibirJogadorNaTela(jogadores)
} 







     