// new Date().getTime()
// console.log(new Date().getTime());

// function wait_a_second(){
//     let starttime = new Date().getTime();
//     while(new Date().getTime() < starttime+1000){}
// }

// function myfun(){
//     console.log('yo i am here');
// }

// function runAfterNSec(fun, N){
//     for(let i = 0 ; i < N; i++){
//         wait_a_second();
//     }
//     fun();
// }

// runAfterNSec(myfun,5);

console.log(new Date().getTime());

function waitASec(){
    let startTime = new Date().getTime();
    while(new Date().getTime()<startTime+1000){}
}

function myFun(){
    console.log('Function is running');
}

function runAfterNSec(fun,N){
    for(let i = 0 ;i < N; i++){
        waitASec();
    }
    fun();
}

runAfterNSec(myFun,5);