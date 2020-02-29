// let a = {
//     k:1,
//     l:'hello',
//     m:true,
//     n:[1,2,3]

// }

// let b = Object.create(a);
// let c = Object.create(b);
// b.n[2] = 30;
// console.log(a);
// console.log(b);
// b.n = a.n.join(',').split(',');

// //output:
// // a.k
// // 1
// // b.k
// // 1
// // b.l
// // "hello"
// // b.m
// // true
// // a
// // {k: 1, l: "hello", m: true}
// // b
// // {}
// // b.k
// // 1
// // a.__proto__ == Object.prototype
// // true

// // if(a.hasOwnProperty('k')){
// //     console.log('true');
// // }
// // else{
// //     console.log('false');
// // }
// // if(b.hasOwnProperty('k')){
// //     console.log('true');
// // }
// // else{
// //     console.log('false');
// // }
// function f(){
//     console.log('hello');
// }

// //output:-
// // f()
// // hello
// // undefined
// // f.__proto__ == Function.prototype
// // true
// // typeof Object
// // "function"
// // typeof Number
// // "function"
// // typeof String
// // "function"
// // f.toString
// // ƒ toString() { [native code] }
// // f.toString()
// // "function f(){
// //     console.log('hello');
// // }"

// // let n = Number(10.11);

// // console.log(n);

// // n = Boolean(1)
// // console.log(n);

// // function f(){
// //     console.log('hello');
// // }


