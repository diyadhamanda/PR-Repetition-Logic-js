
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1


for (i = 1; i <= 5; i++) {
    str = '';
    for (j = 5; j >= 6-i; j--){
        str += `${j} `;
}
console.log(str);

}