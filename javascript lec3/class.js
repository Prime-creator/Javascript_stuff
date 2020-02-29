class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getfirstname = function(){
        return this.name.split(' ')[0];
    }
    //getter:
    get lastname(){
        return this.name.split(' ')[1];
    }
    set lastname(value){
        let a = this.name.split(' ');
        // a.pop();
        // a.push(value);
        //or like this:
        a[1] = value;
        this.name = a.join(' ');
    }
    static agediff(a, b){
        return a.age - b.age;
    }
}

// let p  = new person('harry puttar' , 210);
// let p1 = new person('ajay gutka wala' , 10);
// console.log(person.agediff(p, p1));
// console.log(p.getfirstname());
// //output:
// p
// person {name: "harry puttar", age: 18}
// p1
// person {name: "ajay gutka wala", age: 250}

class student extends person{
    constructor(name , age, marks){
        super(name, age);
        this.marks = marks;
    }
}

let s = new student('kunal', 21, 99);
// console.log(s.name);
// console.log(s.marks);
function outerfunc(){
    let x = 0;
    function innerfunc(){
        x++;
        return x;
    }
    return innerfunc;
}
let a = outerfunc()();
let b = outerfunc();
console.log(a);
console.log(b());
function add(value){
    let ans = value;
    function helper(next_val){
        if(typeof next_val == 'undefined'){
            return value;
        }
        value += next_val;
        return helper;
    }
    return helper;
}

console.log(add(1)(2)(3)());
console.log(add(1)(2)());