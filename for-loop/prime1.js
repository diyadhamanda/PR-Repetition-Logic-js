let num = 5;
let isprime = false;

for (let i =2; i < num/2; i++) {
if (num % i == 0) {
   isprime = true;
};
};

if (isprime) {
    console.log(`${num}is prime number`);
    
}
else{
    console.log(`${num} is not a prime number`);
};