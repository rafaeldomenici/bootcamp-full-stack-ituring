function grupos(lista) {
  let quantgrupos = parseInt(lista.length/2);
  let j = 0;
  
  for (let i = 0; i < quantgrupos; i++) {
    
    if(i == (quantgrupos - 1) && lista.length % 2 != 0 )
      console.log(`Grupo ${i+1}: ${lista[j]}, ${lista[j+1]}, ${lista[j+2]}`);
    else
      console.log(`Grupo ${i+1}: ${lista[j]}, ${lista[j+1]}`);
    j += 2;
  }
  

}

//Solução 2
function grupos2(lista) {
  let quantgrupos = parseInt(lista.length/2);
  let j = 0;
  
  for (let i = 0; i < quantgrupos; i++) {
    
    if(i == (quantgrupos - 1) && lista.length % 2 != 0 )
      console.log(`Grupo ${i+1}: ${lista.slice(j,j+3)}`);
    else
      console.log(`Grupo ${i+1}: ${lista.slice(j,j+2)}`);
    j += 2
    
  }

}


grupos2(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"])
