/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

// function square(a) {
//     console.log(a * a);
// }

// var missingArg = () =>{
//     throw new Error('Function square requires an argument');    
// }

// let square = (a = missingArg()) => {
//     console.log(a * a);
//     return a * a; 
// }
    

// square(10)
// // 100 

// console.log(square(9));
// square();
//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument

// function logArguments(){

//     for(let i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }

function logArguments(...args){

    for (let arg of args){
        console.log(arg);
    }
}

logArguments(2, 5, 7, 8, 9, 10)
logArguments(2)
logArguments(2, 4)