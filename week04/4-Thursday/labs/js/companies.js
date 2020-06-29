const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

<<<<<<< HEAD
// for(index = 0; index < companies.length; index++){
    // console.log(companies[index]);
    // console.log(companies[1,0]);
// }

// companies.forEach(function(index){
//     console.log(index);
// })

// var percent = .5

// var newAges = ages.map(function(index){
//     return index + 2;
// })
// console.log(newAges);

// var names = ["Dan", "Michael", "Michah", "Woody", "Cainin", "Chris", "RJ"]

// var greetingsArr = names.map(function(name){
//     return `Hello ${name} how are you?`
// })
// console.log(greetingsArr[3]);

// var newCo = companies.map(function(company){
//     companyObj.end = 2020;
//     return companyObj;
// })
// console.log(newCo);

// var filterArr = ages.filter(function(age){
//     return age % 2 == 0;
// })


//Callback coding. => replaces {Return
// var filterArr = ages.filter(age => age % 2 == 0);
// console.log(filterArr);

//Array.some
var result = ages.some(age => age > 64);
console.log(result);
=======


// Filter out all ages greater than 35 
// var ageFilter = ages.filter((age)=> age<=35)

var greeting = ()=>"hello world"

var result = greeting();

console.log(result)


var ageFilter = ages.filter(age => age <= 35);

console.log(ageFilter)

// console.log(ageFilter)

// Filter all even numbers

var evenNumbers = ages.filter(age => age %2 == 0)

console.log(evenNumbers)

/// map through ages array and return a new ages array where 5 is added to each element.

var newAges = ages.map(function(arrVal){

    return arrVal + 5
})


// var newAges = ages.map(arrVAl => arrVAl +5)
//map through the companies array and change the end date to 2020

    var newComp = companies.map(function(companyObj){

            companyObj.end = 2020;

            return companyObj;
    })


    //console.log(newComp)


//using a for loop print each object of companies array 

for(var i = 0; i<companies.length; i++){

    //console.log(companies[i])
}

//using forEach print each object of companies array

companies.forEach(function(index){
    //console.log(index)
})
>>>>>>> f24067dc7a4c96269fffc1e9ab0fff07da658bb1
