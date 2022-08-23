function ordenar(lista) {
  return lista.sort(compararNumeros)

}

function compararNumeros(a, b) {
  return a - b;
}
console.log(ordenar([4, 9, 7, 1, 8, 12]))

