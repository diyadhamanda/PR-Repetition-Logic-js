// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

for (i = 5; i >= 1; i--) {
    str = '';
    for (j = i; j <= 5; j++){
        str += `${j} `;
}
console.log(str);

}
