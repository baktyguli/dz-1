//1
// let num = "*";
// while (num.length <= 8) {
// console.log(num);
// num += "*"
// }


// //2
// for(let i = 1; i <= 100; i++) {
//     if(i % 5 === 0 &&  i % 3 === 0){
//         console.log('FizzBazz');
//     } else if(i % 3 === 0){
//         console.log('Fizz');
//     } else if(i % 5 ===0){
//         console.log('Bazz');  
//     } else{
//         console.log(i);
//     }
// }


//3
let full = ' # # # # ';
for (let i = 0; i < 7; i++) {
   console.log(full.substring(i % 2))
}
