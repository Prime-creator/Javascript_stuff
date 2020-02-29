// //iife : immediately invoked function expression.
// basically to make function private
// (function sayhello(name){
//     console.log(`hello ${name}`);
// })('harry');

function math(){
    console.log('3^4 = '+Math.pow(3,4));
    console.log('4^3 = '+Math.pow(4,3));
    console.log('root 4 = '+Math.sqrt(4));
}
// math()
// (function(l,p,r){
//     l('3^4 = '+p(3,4));
//     l('4^3 = '+p(4,3));
//     l('root 4 = '+r(4));
// })(console.log, Math.pow, Math.sqrt)

(function(l, p, r){
    l('3^4 = '+p(3,4));
    l('4^3 = '+p(4,3));
    l('root 4 = '+r(4));
})(console.log, Math.pow, Math.sqrt)