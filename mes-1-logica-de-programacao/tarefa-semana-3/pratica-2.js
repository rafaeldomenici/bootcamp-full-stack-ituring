function exibirImpares(n) {
  for(let i = 1; i <= n; i += 2) {
    console.log(i);
  }

}

//Solução 2
function exibirImpares2(n) {
  for(let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
    console.log(i);
    }
  }

}


exibirImpares2(43);