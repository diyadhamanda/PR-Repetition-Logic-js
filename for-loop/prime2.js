let num = 100;
let str = `The prime number is ` ;

for (let i = 1; i <= 100; i++) {
count = 0;
for(let j =2 ; j<= i/2; j ++)
{
    if (i % j == 0) {
        count ++;        
    }
}
if (count == 0) {
    str += `${i} `;
}
};
console.log(`${str}`);
