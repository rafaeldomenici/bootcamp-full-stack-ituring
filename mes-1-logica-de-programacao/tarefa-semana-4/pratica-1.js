function exibirSeriados(listaSeriados) {
  listaSeriados.forEach(function(item,indice) {
    console.log(`[${indice}] ${item}`)
  })

}
exibirSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])