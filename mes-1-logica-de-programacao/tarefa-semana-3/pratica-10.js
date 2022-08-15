function quantidadeVotos(listaVotos) {
  let votosBrasil = 0;
  let votosArgentina = 0;
  let votosEspanha = 0;
  let votosPortugal = 0;
  let preferidos = [];
  let empate = 0;
  let j = 0;

  for(voto of listaVotos) {
    if(voto == 1) {
      votosBrasil++;
    }
    if(voto == 2) {
      votosArgentina++;
    }
    if(voto == 3) {
      votosEspanha++;
    }
    if(voto == 4) {
      votosPortugal++;
    }
  }
  listaPaises = ["Brasil","Argentina","Espanha","Portugal"];
  listaQuantVotos = [votosBrasil,votosArgentina,votosEspanha,votosPortugal];

  for (let i=0; i < listaQuantVotos.length;i++) {
    if (Math.max.apply(null,listaQuantVotos) == listaQuantVotos[i]) {
      preferidos[empate] = listaPaises[i]
      empate++;
    }
  }

  console.log(`Brasil: ${listaQuantVotos[0]} voto(s)`)
  console.log(`Argentina: ${listaQuantVotos[1]} voto(s) `)
  console.log(`Espanha: ${listaQuantVotos[2]} voto(s) `)
  console.log(`Portugal: ${listaQuantVotos[3]} voto(s)`)
  console.log('Resultado:')

  if(empate < 2) {
    console.log(`${preferidos[0]} é o preferido para ganhar a Copa do Mundo!`);
  }
  else {
    console.log('Houve um empate entre os países mais votados. Os países mais votados foram:')
    for(let i = 0; i < empate; i++ ) {
      console.log(preferidos[i]);
    }
  }
  


}


quantidadeVotos([1,1,2,2,2,3,3,3,3,3,4,4,4]);
