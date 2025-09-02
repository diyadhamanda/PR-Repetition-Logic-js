let num = 100;
let str = `The prime numbers are: `;
let i = 2;

while (i <= num) {
    let count = 0;
    let j = 2;

    while (j <= i / 2) {
        if (i % j == 0) {
            count++;
        }
        j++;
    }

    if (count == 0) {
        str += `${i} `;
    }

    i++;
}

console.log(str);
