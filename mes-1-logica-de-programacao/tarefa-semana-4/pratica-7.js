function listaDeChaves(obj) {
  console.log(Object.getOwnPropertyNames(obj))  


}


listaDeChaves({
  marca: "Tramontina",
  produto: "Jogo de talheres",
  preco: 500,
  quantidade: 132,
  categoria: "Utensilhos domésticos"
})