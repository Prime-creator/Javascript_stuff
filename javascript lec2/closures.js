// let x = 0;

// function outerfun(){
//     function innerfun(){
//         x++;
//         return x;
//     }
//     return innerfun;
// }

// let fun = outerfun();
// let fun1 = outerfun();
// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun1());
// console.log(fun1());
// console.log('this is x => '+x);
//closures:- 

//function outerfun(){
//     let x = 0;
//     function innerfun(){
//         x++;
//         return x;
//     }
//     return innerfun;
// }

// let fun = outerfun();
// let fun1 = outerfun();
// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun1());
// console.log(fun1());


// function outerfun(){
//     let x = 0;
//     function innerfun(){
//        x++;
//         function innermostfun(){
//             x++;
//             return x;
//         }
//         return innermostfun;
//     }
//     return innerfun;
// }

// let fun = outerfun();
// let fun1 = fun();
// let fun2 = fun();
// let fun3 = fun();
// console.log(fun1());
// console.log(fun1());
// console.log(fun1());
// console.log(fun2());
// console.log(fun2());
// console.log(fun3());
// console.log(fun3());
