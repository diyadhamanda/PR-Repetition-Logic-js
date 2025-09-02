let num = 100;
let str = `The prime numbers are: `;
let i = 2;

do {
    let count = 0;
    let j = 2;

    do {
        if (j > i / 2) break; 
        if (i % j == 0) {
            count++;
        }
        j++;
    } while (true);

    if (count == 0) {
        str += `${i} `;
    }

    i++;
} while (i <= num);

console.log(str);
