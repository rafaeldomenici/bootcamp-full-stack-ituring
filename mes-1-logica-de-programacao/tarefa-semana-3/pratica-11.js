function ordenacao(lista) {
  let indiceMenor = 0;
  let menorAtual = lista[0];
  
  for(k=0;k < lista.length; k++) {
    
    menorAtual = lista[k];
    indiceMenor = k;
    
    for (let i = k; i < lista.length; i++) {
      if (lista[i] < menorAtual) {
        menorAtual = lista[i];
        indiceMenor = i;
      }
    }
    
    [lista[k],lista[indiceMenor]]=[lista[indiceMenor],lista[k]];
    
  }
  console.log(lista);
}

ordenacao([70, 20, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]);
  