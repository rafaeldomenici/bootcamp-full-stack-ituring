function classificacaoImc(peso,altura) {
  let imc = peso/(altura*altura);
  
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





