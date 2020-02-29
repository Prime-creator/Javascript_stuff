// function normalfunc(){
//     console.log(this.x);
// }
//Arrow functions allow us to write shorter function syntax:
var x = 30;
// let arrowfun = () => this.x;
//or
let arrowfun = () => {
    console.log('inside arrow fun');
    return this.x
};
// // console.log(arrowfun());
let func = function(){
    console.log('inside normal fun');
    return this.x;
}
// console.log(func());
let obj1 = {
    x:10,
    y:arrowfun
}

let obj2 = {
    x:20,
    y:func
}

console.log(obj1.y());
console.log(obj2.y());