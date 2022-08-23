function exibirMotoristaMenorTempo(lista) {
  lista.sort(function (a,b) {
    if (a.tempoEstimado > b.tempoEstimado) {
      return 1;
    } 
    if (a.tempoEstimado < b.tempoEstimado) {
      return -1;
    } 
    return 0;
  })
  let primeiroNome = lista[0].motorista.split(' ')[0];
  console.log(`${primeiroNome} está a caminho com o carro ${lista[0].veiculo} de placa ${lista[0].placa}. Chega em ${lista[0].tempoEstimado} minutos.`);


}

exibirMotoristaMenorTempo([{
  motorista: "Thais S.",
  avaliacao: 9.8,
  tempoEstimado: 7,
  veiculo: "Palio",
  placa: "ABC4321"
},
{
  motorista: "Thales Gonçalves",
  avaliacao: 8.9,
  tempoEstimado: 4,
  veiculo: "Celta",
  placa: "ABC0987"
},
{
  motorista: "José Lopes",
  avaliacao: 9.9,
  tempoEstimado: 5,
  veiculo: "Fox",
  placa: "ABC1234"
},
{
  motorista: "Cristina Souza",
  avaliacao: 9.3,
  tempoEstimado: 3,
  veiculo: "Fox",
  placa: "ABC1234"
},
{
  motorista: "Leo Garcia",
  avaliacao: 8.5,
  tempoEstimado: 9,
  veiculo: "Ka",
  placa: "ABC8765"
}])