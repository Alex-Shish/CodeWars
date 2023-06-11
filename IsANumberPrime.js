function isPrime(num) {
  if(num < 2) return false
  if(num === 2) return true
  for (let i = 2; i <= num ** 0.5; i++){
    if (num % i === 0) return false
  }
return true
}

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(73))
console.log(isPrime(-5))