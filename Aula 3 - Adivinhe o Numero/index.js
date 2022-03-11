function Chutar() {
  var numeroInserido = parseInt(document.getElementById("valor").value);
  var numeroSecreto = parseInt(Math.random() * 11);
  var printDoResultado = document.getElementById("resultado");
  console.log("Numero Inserido: " + numeroInserido)
 
  if(numeroInserido == numeroSecreto) {
     console.log("Parabens, você acertou, o numero secreto é: "+ numeroSecreto)
     printDoResultado.innerHTML = "Parabens, você acertou, o numero secreto é: " +   numeroSecreto
 }
  else if (numeroInserido > 10 || numeroInserido < 0) {
     console.log("Numero Invalido: o valor deve ser entre 0 e 10.")
     printDoResultado.innerHTML = "Numero Invalido: o valor deve ser entre 0 e 10."
  } 
 
   else {
     console.log("Ops, você errou, o numero correto era: " + numeroSecreto)
     printDoResultado.innerHTML = "Ops, você errou, o numero correto era: " + numeroSecreto
   }
 
 }