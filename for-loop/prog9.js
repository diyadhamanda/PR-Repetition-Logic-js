
// * * * * * * * * *
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 


let rows = 5;

for (let i = 1; i <= rows; i++) {
    let space = '';
    for (let k = 1; k < i; k++) {
        space += '  '; 
    }

    let str = '';
    for (let j = i; j <= rows * 2 - i; j++) {
        str += '* ';
    }

    console.log(space + str);
}
