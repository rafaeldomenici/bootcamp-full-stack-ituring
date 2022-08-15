function numeroPrimo(n){
 
  for(let i = 2; i < n; i++) {
    if(n % i == 0){
      return false;
    }
  }
  return true;


}

console.log(numeroPrimo(17));
console.log(numeroPrimo(2));
console.log(numeroPrimo(7));
console.log(numeroPrimo(8));
console.log(numeroPrimo(5));
console.log(numeroPrimo(23));
console.log(numeroPrimo(15));
console.log(numeroPrimo(1500450271));