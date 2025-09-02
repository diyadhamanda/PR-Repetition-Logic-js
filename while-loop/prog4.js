
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

let i = 1;

while (i <= 5) {
    let j = 5;
    let str = '';

    while (j >= 6 - i) {
        str += `${j} `;
        j--;
    }

    console.log(str);
    i++;
}