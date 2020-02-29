

// setTimeout(function(){
//     console.log('yo i am');
// },2000);

let id = setInterval(function(){
    console.log('running');
}, 1000);

setTimeout(function() {
    clearInterval(id);
}, 5000);
console.log(id);