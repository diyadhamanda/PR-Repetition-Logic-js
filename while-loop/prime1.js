let num = 10;
let isPrime = true;
let i = 2;

if (num <= 1) {
    isPrime = false;
} else {
    while (i <= num / 2) {
        if (num % i === 0) {
            isPrime = false;
        }
        i++;
    }
}

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
