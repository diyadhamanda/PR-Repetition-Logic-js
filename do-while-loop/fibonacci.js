let a = 0, b = 1, c;
let num = 10;
let i = 0;
let str = `Fibonacci: `;

while (i <= num) {
    str += `${a} `;
    c = a + b;
    a = b;
    b = c;
    i++;
}

console.log(str);
