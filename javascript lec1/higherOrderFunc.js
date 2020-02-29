function outerfunc(anotherFun){
    console.log('this is outer func' + anotherFun);
}
function innerfunc(){
    console.log('this is inner func');
}
outerfunc(innerfunc);
// outerfunc(innerfunc());

// function outerfunc(anotherFun){
//     console.log('this is outer fun');
//     function newFunc(){
//         console.log('this is new fun');
//     }
//     return newFunc;
// }
// function innerfunc(){
    
// }
// let fun = outerfunc();
// fun();

