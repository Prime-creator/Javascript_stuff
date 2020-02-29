// let arr = [5,3,2,1,4,6,100, 2, 1000]

// console.log(arr);
// //sort string ki tarah sort krta hai(lexicograhic)
// // arr.sort();
// //or
// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr);
let arr = [1,4,5,2,6,9];
//index and arr argument mandatory nahi hai nahi doge toh bhi chalega.
let arr2  = arr.map(function(value, index, arr){
    console.log('yo = '+value+' '+index);
    return value;
})
let arr3 = arr.map((value)=>value*2);
let arr4 = arr.filter(function(value){
    if(value % 2 == 0) return true;
    else return false;
})

let arr5 = arr.reduce(function(accum,value,index, arr){
    return accum+value;
})
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);