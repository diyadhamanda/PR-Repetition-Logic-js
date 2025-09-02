let a = 0, b = 1, c;
let num = 10;
let i = 0;
let str = `Fibonacci: `;

do {
    str += `${a} `;
    c = a + b;
    a = b;
    b = c;
    i++;
} while (i <= num);

console.log(str);
