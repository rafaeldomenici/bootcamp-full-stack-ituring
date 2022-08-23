function exibirMedia(obj) {
  let somaNotas = 0;
  let mediaAvaliacoes = 0;
  for (let item of obj.avaliações) {
    somaNotas += item.nota;
  }

  mediaAvaliacoes = somaNotas/obj.avaliações.length;
  console.log(`A média de avaliações do restaurante ${obj.restaurante} foi ${mediaAvaliacoes.toFixed(2)}`);


}

exibirMedia({
  restaurante: "Turing Gourmet",
  tipo: "Comida britânica",
  avaliações: [
    {
      cliente: "Thais S.",
      nota: 9.8
    },
    {
      cliente: "Thales Gonçalves",
      nota: 8.9
    },
    {
      cliente: "José Lopes",
      nota: 9.9
    },
    {
      cliente: "Cristina Souza",
      nota: 9.3
    },
    {
      cliente: "Leo Garcia",
      nota: 8.5
    }
  ]
});