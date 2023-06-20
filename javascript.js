function showPrime(n){
    for (let i = 2; i <= n; i++) {
        if (!calcPrime(i)) continue;
        console.log(`prime ${i}`);
      }
}

function calcPrime(n){
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
        return false;
        }
      }
      return true;
}

console.log(showPrime(11));




  
