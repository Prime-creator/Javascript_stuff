// function f(){
//     return 1;
// }

// f.k = 20;
// let yo = f();
// console.log(f());
// console.log(f.k);

// constructor
// function person(){
//     return {a:1};
// }


//constructor

// function person(name, age){
//     this.age = age;
//     this.name = name;
//     // return(this);
// }
// person('hello boi', 18);
//output:
// window.name
// "hello boi"
// window.age
// 18
// name
// "hello boi"
// age
// 18
// window.window == window
// true

//binding

// let o = {
//     k:1,
//     l:function(){return this;}
// }
// let x = person.bind(o);
// console.log(o.l);

// let p = person();
// let p1 = new person('lol',12);
// console.log('hello');
// console.log(p);
// console.log(p1);




// function person(name, age){
//     // comment age to make it private
//     this.age = age;
//     this.name = name;
//     this.getfirstname = function(){
//         return this.name.split(' ')[0];
//     }
//     this.isadult = function(){
//         return age >= 18;
//     }
//     this.updateFisrtName = function(name){
//         let a = this.name.split(' ');
//         a[0] = name;
//         this.a.join(' ');
//         return a;
//     }
// }
// person.staticfunc = person.prototype.staticfunc = function(){
//     console.log('this is static func');
//     return 'hello';
// }
// let p = new person('hello boi', 18);
// let p1 = new person('great lol', 180);
// let p2 = new person('topper cool', 180917);
//output:
// p
// person {age: 18, name: "hello boi"}
// p1
// person {age: 180, name: "hello lol"}
// p2
// person {age: 180917, name: "hello cool"}
// p.getfirstname()
// "hello"
// p1.getfirstname()
// "great"