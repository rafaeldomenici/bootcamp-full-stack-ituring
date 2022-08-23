function buscarSeriado(listaSeriados,seriadoPesquisado) {
  
  let indiceBusca = undefined;
  listaSeriados.forEach(function(item,indice) {
    
    if (item == seriadoPesquisado) {
      indiceBusca = indice;
    }
  
  })
  return indiceBusca;

}
console.log(buscarSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Game of Thrones"))