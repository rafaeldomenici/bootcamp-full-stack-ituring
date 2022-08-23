function informacoesListaFilmes(lista) {
  lista.forEach(function(item) {
    console.log(`${item.titulo} (Nota: ${item.notaAvaliacao})`)
    console.log(`• Duração: ${item.duracao} minutos`)
    console.log(`• Ano de publicação: ${item.anoPublicacao}`)
    console.log(`• Gênero: ${item.genero.slice(0,item.genero.length-1)} e ${item.genero[item.genero.length-1]}`)
  })

}

informacoesListaFilmes([{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}])