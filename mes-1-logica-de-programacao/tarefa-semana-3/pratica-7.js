function calcularSaldo(listaDepositosRetiradas) {
  let saldoFinal = 0;
  let situacaoSaldo;
  for(item of listaDepositosRetiradas) {
    saldoFinal += item;
  }
  if(saldoFinal < 0) {
    situacaoSaldo = "negativo";
  }
  else {
    situacaoSaldo = "positivo";
  }
  console.log(`O saldo final de sua conta foi ${situacaoSaldo} no valor de ${saldoFinal}`);

}

calcularSaldo([100, -20, -30, 10, -7, -21, -5]);