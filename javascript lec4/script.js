// //download->compress->upload (this what we gonna do)
function f(f1){
    console.log('f start to run ')
    setTimeout(function (){
        let result = 'r';
        //f1 is call back function.
        // f1(result);
    },3000);
}

f(function(res){
    console.log('f has completed and here is result '+res);
});