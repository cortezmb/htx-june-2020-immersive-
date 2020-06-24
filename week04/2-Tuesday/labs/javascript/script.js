

// console.log("Hello Michael");

// console.log('print + print');

// console.log("print again");

// console.log(`back tick`);

// this_is_snake_case = 5

// // thisIsSnakeCase

// myName = "Michael"

// console.log(myName.length)

// var myName = "Michael";

// var val = 2;

// var a;

// a = 5;

// a = "hello";

// console.log(a);

// var name = "This is a great day";

// console.log(name.indexOf("great"));

// var boolean = true;

// // ! = not
// var not = !boolean;

// // && = and
// var and = boolean && !boolean;

// // || = or
// var or = !boolean || false;

// var equals = 1 != 10;
// console.log(equals);

// var equals = "5" == 5;

// console.log(equals);

// if (4 == 5){
//     console.log("greater than");
// }
// else if (false && true){
//     console.log("inside of and statement");
// }
// else{
//     console.log("default statment");
// }

// var fruit = "Papayas";

// if (fruit == "Oranges"){
//     console.log("Oranges");
// }
// else if (fruit == "Mangos"){
//     console.log("Mangos");
// }
// else if (fruit == "Papayas"){
//     console.log("Papayas");
// }
// else{
//     console.log("Sorry we are out of " + fruit);
// }

// switch(fruit){
//     case "Oranges":
//         console.log("Oranges");
//         break;
//     case "Mangos":
//         console.log("Mangos");
//         break;
//     case "Papayas":
//         console.log("Papayas");
//         break;
//     default:
//         console.log("default case");
//         break;
// }

// var day = "Monday";
//  switch(day){
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//  }

// While Loop
// var count = 0;

// while (count < 10){
//     count += 1;
//     console.log(count);
// }

//For Loop: 
// for (var count = 0; count < 10; count ++){
//         console.log(count);
//     }

//For Loop with While Statement
// for (var count = 0; count < 20; count += 1){
//     if (count % 2 == 0){
//         console.log(count)
//     }
// }
//Array
// var myArray = [2,4,5,7,"six", false];
// console.log(myArray);

// myArray.push(99);

// console.log(myArray);

// var myArray = [2,4,5,7,"six", false];
// console.log(myArray.length);

// myArray.push(99);

// console.log(myArray.length);

// myArray[4] = 6;
// // console.log(myArray[4]);
// console.log(myArray);

// myArray.pop();

// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// while(days.length > 0){
//     console.log(days.shift());
// }
// console.log(days == []);

// var lottoNums = [23,11,43,19,37,16];

// // var result = lottoNums.splice(1,3);
// var result = lottoNums.slice(1,4);
// console.log(lottoNums);
// console.log(result);

// var greeting = "This is a hot and humid day";

// // var result = greeting.split('');

// //print everything before and after a space
// var result = greeting.split(' ');
// console.log(greeting);
// console.log(result);

// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// for (var index = 0; index < days.length; index++){

//     console.log(days[index]);
// }

// var fruit = ["pineapple", "orange", "peach", "apple", "pear", "cantalope"];

// for (var index = 0; index < fruit.length; index += 1){
//     console.log(fruit[index]);
// }

//Join opposite of split
// var greeting = "This is a hot and humid day";

// var result = greeting.split('');

// console.log(result.reverse().join(''));

// console.log(result);

// var joinstr = result.join('');

// console.log(joinstr);

//Objects
// var name = "name1";
// var students = {
//     name1: "Cainin",
//     name2: "RJ",
//     name3: "Jeremy",
//     name4: "Micah",
//     name5: "Dan",
//     name6: "Michael",
//     name7: "Woody",
//     name8: "Chris",
// }

// var r = students["name1"];
// var s = students.name1;
// console.log(r);
// console.log(s);

// delete students.name7;
// console.log(students);

//Dynamic key names
// console.log(students[name]);

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// characterSheet["name"];

// var keys = ['name', 'title', 'powers'];

// for(var i = 0; i < keys.length; i++){
//     console.log(keys[i]);
// }

//Function
// function name(){

// }

// name()

// function hello(name){
//     var output = "Hello " + name;


//     console.log(output);
//     return output;
// }

// var result = hello('Dan');
// console.log(result);
// console.log(hello("Michael"));

