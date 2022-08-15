function buscarSeriado(listaSeriados,seriadoPesquisado) {
  for(let i = 0; i < listaSeriados.length; i++) {
    if (listaSeriados[i] == seriadoPesquisado) {
      return i;
    }

  }
  return undefined;

}

console.log(buscarSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"))