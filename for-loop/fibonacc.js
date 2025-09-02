let a, b = 0, c = 1;
let num = 10;
 let str = `Fibonacci `;

for (let i = 0; i <= num; i++) {
  
    a = b;
    b += c;
    c = a;
    str += `${a} `;
}

console.log(`${str} `);
