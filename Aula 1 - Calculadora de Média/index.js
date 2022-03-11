let listaDeAlunos = ["Guilherme","Gabriel","Paulo","Rafa"]
let listaDeNotas = [ [3.5,4.0], [6.5,7.0], [7.5,8.0], [7.5,9.0] ]

for(num = 0; num < listaDeAlunos.length; num++) {

i = num

let alunoEspecifico = listaDeAlunos[i]
let conjuntoNotasEspecificas = listaDeNotas[i]
let notaProva1 = conjuntoNotasEspecificas[0]
let notaProva2 = conjuntoNotasEspecificas[1]

media = (notaProva1 + notaProva2) / 2



console.log("Nome:",alunoEspecifico)
console.log("Nota da Prova 1:",notaProva1)
console.log("Nota da Prova 2:",notaProva2)
console.log("Media Final:",media)

desempenho = ""

if (media <= 4.0) {
  desempenho = "Ruim"
}

else if (media <= 7.0) {
  desempenho = "Regular"
}

else if (media <= 8.0) {
  desempenho = "Bom"
}

else {
  desempenho = "Excelente"
}

switch(desempenho) {
  case "Ruim":
    console.log("Precisa estudar mais.")
  break;
   
  case "Regular":
    console.log("Esta quase lá.")
  break;
    
  case "Bom":
    console.log("Esta no caminho certo.")
  break;
    
  case "Excelente":
    console.log("Mandou Bem.")
  break;
}
console.log("")
}

