// function original(){
//     console.log(this);
//     function not_original(){
//         console.log(this);
//     }
//     not_original();
// }

// // console.log('yo yiss is = '+ this);
// original();

// let obj = {
//     k:1,
//     getProp: function(){
//         return this;
//     },
//     l:'hello'

// }

// // console.log(obj.getProp());
// //explicit binding:
// //.call,.bind,.apply
// function f(x,y){
//     console.log(this);
//     console.log(x+y);
// }

// f.call(obj, 10, 20);
// var s = f.bind(obj);

// function person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// let p = new person('harry',20);
