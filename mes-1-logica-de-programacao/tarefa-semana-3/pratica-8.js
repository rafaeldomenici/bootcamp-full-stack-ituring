function extratoMensal(listaDepositosRetiradas) {
  let saldoFinal = 0;
  let SomaDepositos = 0;
  let SomaRetiradas = 0;
  let situacaoSaldo;
  for(item of listaDepositosRetiradas) {
    if (item < 0) {
      SomaRetiradas += item;
    }
    else {
      SomaDepositos += item;
    }
  }
  saldoFinal = SomaRetiradas + SomaDepositos;

  if(saldoFinal < 0) {
    situacaoSaldo = "negativo";
  }
  else {
    situacaoSaldo = "positivo";
  }
  console.log(`O valor total depositado foi de: R$ ${SomaDepositos}`)
  console.log(`O valor total retirado foi de: R$ ${0-SomaRetiradas}`)
  console.log(`O saldo final de sua conta foi ${situacaoSaldo} no valor de ${saldoFinal}`);

}

extratoMensal([100, -20, -30, 10, -7, -21, -5]);