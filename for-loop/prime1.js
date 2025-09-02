let num = 42;
let isprime = true;

for (let i =2; i < num/2; i++) {
if (num % i == 0) {
   isprime = false;
};
};

if (isprime) {
    console.log(`${num} is prime number`);
    
}
else{
    console.log(`${num} is not a prime number`);
};