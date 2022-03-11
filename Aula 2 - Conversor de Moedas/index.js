function Converter() {
    const valorEmReal = document.querySelector("#valor").valueAsNumber;
    const valorEmDolar = valorEmReal / 5.07;
    console.log("Valor em Real:", valorEmReal.toFixed(2));
    console.log("Valor em Dolar:", valorEmDolar.toFixed(2));
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O Resultado em dolares é: " + valorEmDolar.toFixed(2) + " USD";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  