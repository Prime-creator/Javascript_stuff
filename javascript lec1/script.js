// alert('hello javascript');
// name = prompt('enter name');
// alert('hello '+name);
// console.log(name);
// name = 10;
// console.log(name);


// const datatype
// const name = 100;
// alert('hello '+name);
// console.log(name);
// name = 10;
// console.log(name);


// //var datatype
// var name = 100;
// // alert('hello '+name);
// console.log(name);
// name = 10;
// console.log(name);

//let datatype
// let name = prompt('enter name');
// // alert('hello '+name);
// console.log(name);
// name = 10;
// console.log(name);

// let x = 30;
// if(true){
//     x = 10;
//     console.log(x);
//     x = 20;
// }
// console.log(x);

// var x = 30;
// if(true){
//     var x = 10;
//     console.log(x);
//     x = 20;
// }
// console.log(x);


// let x =10;
// function fun(){
//     console.log(x);
//     x = 20;
//     console.log(' hell o'+x);
// }
// console.log('yo' + x);
// fun();
// console.log(x);


// function fun(){
//     let x =10;
//     if(true){
//         console.log(x);
//         let x = 30;
//         x = 20;
//     }
// }
// fun();
// console.log(x);

// function fun(){
//     var x =10;
//     if(true){
//         console.log(x);
//         var x = 30;
//         x = 20;
//     }
// }
// fun();
// console.log(x);


// let str = "hello \"world\"";
// console.log(str);
// console.log(typeof str);
// str = 'hello "world"';
// console.log(str);   
// str = 'h';
// console.log(str);
// console.log(typeof str);

// object and array

// let obj = {
//     a:10,
//     b:'hello',
//     c:10.11
// }
// let obj1 = {
//     'a':10,
//     b:'hello',
//     c:10.11,
//     '':'empty',
//     ' ':true,
// }
// Key = prompt('enter key');
// value = prompt('enter value');
// obj1.Key = value;

//array

// let arr = ['hello',1,2,3,true,10.11];
// for(var i = 0 ;  i < arr.length ; i++){
//     console.log(arr[i]);
// }

//data types:

// let a = 10;
// let b = 10.11;
// let c = 'hello';
// let d = 'h';
// let e = true;
// let obj = {a:10, b:20};
// let arr = [10,20,30];
// let f;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof obj);
// console.log(typeof arr);
// console.log(typeof f);

// let a = '10' + 1;
// console.log(a);
// let b = '10' - 1;
// console.log(b);

// let c = '10' - 1 + 1;
// console.log(c);

//equality operator
// 1 == 1
// true
// 1===1
// true
// 0 == '\t'
// true
// 0 == '\n'
// true
// '\t' == '\n'
// false
// [] == '\t'
// false

// equality operator
// let arr=[10,20,30];
// let b = arr;
// console.log(arr == b);
// console.log(arr == [10,20,30]);
// console.log(arr == 10);

//call by value call by reference
// let a = 10;
// let b = 20;
// function swap(a,b){
//     temp = a;
//     a = b;
//     b = temp;
// }
// console.log(a,b);
// swap(a,b);
// console.log(a,b);

// // call by reference
// let arr = [10,20];
// function swap1(arr){
//     temp = arr[0];
//     arr[0] = arr[1];
//     arr[1] = temp;
// }
// console.log(arr[0],arr[1]);
// swap1(arr);
// console.log(arr[0],arr[1]);

// []+{}
// "[object Object]"
// {}+[]
// 0

//parse float is used to convert any data type to float type
let a = parseFloat('11.1')
console.log(a);

// parse int is used to convert any data type to float type
// let a = parseInt('11.1')
// console.log(a);

// function add(a,b = 0,c = 0){
//     return a+b+c;
// }

// console.log(add(10));
// console.log(add(10,20));
// console.log(add(10,20,30));