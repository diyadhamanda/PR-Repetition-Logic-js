
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1



for (i = 5; i >=1 ; i--) {
    str = '';
    for (j = i; j >=1; j--){
        str += `${j} `;
}
console.log(str);

}