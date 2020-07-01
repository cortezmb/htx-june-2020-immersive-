// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.


let sum = (...args) => {
    let sum =0;
    for (let arg of args){
        sum += arg
    }
    return sum;
}

console.log(sum(1,3));
console.log(sum(10, 20, 5));

