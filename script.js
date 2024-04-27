function isPrime(num) {
    if (num <= 1)
     return false;
    if (num <= 3) 
    return true; 
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function findPrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    if (isNaN(start) || isNaN(end)) {
      alert("Please enter valid numbers");
      return;
    }
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    document.getElementById('result').innerText = "Prime numbers between " + start + " and " + end + " are: ";
    document.getElementById('primeNumbersOutput').value = primes.join(", ");
  }
  