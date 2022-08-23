function informacoesfilme(obj) {
  console.log(`O filme ${obj.titulo} que estreou em ${obj.anoPublicacao}, tem a avaliação de ${obj.nota} pelo IMDb`)



}

function filmes(titulo,nota,duracao,anoPublicacao,categoria) {
  let obj = {}
  obj.titulo = titulo
  obj.nota = nota
  obj.duracao = duracao
  obj.anoPublicacao = anoPublicacao
  obj.categoria = categoria

  return obj
}

let filme1 = filmes("Estrelas Além do Tempo",7.8,127,2016,"Drama")
informacoesfilme(filme1)

