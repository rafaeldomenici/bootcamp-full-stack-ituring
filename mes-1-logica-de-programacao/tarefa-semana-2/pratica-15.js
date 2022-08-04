function classificacaoImc(imc) {
 
  if (imc < 18.5) {
    return "Abaixo do Peso";
  }
  else if (imc <= 25) {
    return "Peso Normal";
  }
  else if (imc <= 30) {
    return "Sobrepeso";
  }
  else {
    return "Obesidade";
  }
}

function calcularImc(peso,altura) {
  console.log(peso/(altura*altura));
  return peso/(altura*altura);
  
}

console.log(classificacaoImc(calcularImc(85,1.74)));