function buscarSeriado2(listaSeriados,termoPesquisado) {
  let seriadosComTermo = listaSeriados.filter(function(item) {
    return item.includes(termoPesquisado)
  })
  return seriadosComTermo;
} 
  

console.log(buscarSeriado2(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"))