
// const name = "Tiger";
// const age = 13;

// console.log(`My cat is named ${name} and is ${age} years old.`);

// var text = `
// cat
// dog
// nickelodeon`
// console.log(text);

//creating an object named today
// let today = new Date();

// var text =` the date is ${today.getUTCDate}`
// // var text = ` the sum of 4 and 5 is ${4+5}`
// console.log(text);

// var arr = [1,2,3,4,5];

// // var a = arr[0] // a = 1
// // var b = arr[1] // b = 2

// var [a, b, c, d, e] = arr;

// console.log(a);
// console.log(b);

// var luke ={
//     occupation: 'jedi',
//     father: 'anakin'
// }

// var occupation = luke.occupation;

// console.log(occupation);

//ES6
// var {occupation, father}  = luke;

// console.log(occupation);
// console.log(father);

//Arrow function
// function test1(obj){
//     //
//     return "hello"
// }

// let test = function(obj){
//     //
// }

// let test2 = obj => {
//     return "hello"
// }

// let test2 = obj => "hello"
// console.log(test2(1));

// function sample(){
//     console.log(this);
// }

// function addTwoNumbers(x, y){

//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }

// let addTwoNumbers = (x=0, y=0) => x + y;

// console.log(addTwoNumbers());

// let arr1 = [1, 4, 7];
// let arr2 = arr1;

// arr2.push(99)

// console.log(arr1);
// console.log(arr2);

// let arr1 = [1, 4, 7];
// let arr2 = [...arr1, 8, 9, 10];

// // [0, 1, 4, 7, 8, 9 ,10]

// // arr2.push(99)

// console.log(arr1);
// console.log(arr2);

// let a = "80"; 

// if (a == 5){

//     console.log(5);
// }
// else {
//     console.log(10);
// }

//if else ternary statement 
// a == 5 ? console.log(5) : console.log(10);

// typeof(a) == "number" ? console.log("number") : console.log("not a number");

function Person(name, age, gender){

    this.name = name;
    this.age = age;
    this.gender = gender;

    // this.greeting = function(){
    //     console.log(this.name);
    // }
}

//Prototypes: every function has a prototype
//this takes place of function withing Person()
// Person.prototype.greeting = function(){
//     console.log(this.name);
// }


// let michael = new Person("michael", 21, "M")
// michael.greeting()


class Person{
    constructor(name, age, gender) {
        this.name = name,
        this.age = age,
        this.gender = gender,

    }

    // name(){
    //     //
    // }
// }

let michael = new Person("michael", 21, "M")
michael.greeting()