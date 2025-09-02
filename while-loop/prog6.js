
// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

let i = 5;

while (i >= 1) {
    let j = 5;
    let str = '';

    while (j >= 6 - i) {
        str += `${j} `;
        j--;
    }

    console.log(str);
    i--;
}
