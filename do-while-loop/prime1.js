let num = 17;
let isPrime = true;
let i = 2;

if (num <= 1) {
    isPrime = false;
} else {
    do {
        if (num % i === 0) {
            isPrime = false;
        }
        i++;
    } while (i <= num / 2);
}

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
