function buscarSeriado(listaSeriados,termoPesquisado) {
  let seriadosComTermo = []
  let encontrou;
  for(seriado of listaSeriados) {
    encontrou = false;
    for(let i = 0; i < seriado.length - termoPesquisado.length + 1; i++) {
      if(seriado.substring(i,termoPesquisado.length+i) == termoPesquisado){
        encontrou = true;
        break;
      }
    }  
    if(encontrou) {
      seriadosComTermo.push(seriado);
    }
  }
  return seriadosComTermo;
}

//Solução 2
function buscarSeriado2(listaSeriados,termoPesquisado) {
  let seriadosComTermo = []
  
  for(seriado of listaSeriados) {
    
    if(seriado.includes(termoPesquisado)) {
      seriadosComTermo.push(seriado);
    }
  }
  return seriadosComTermo;
}

console.log(buscarSeriado2(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"))
  

