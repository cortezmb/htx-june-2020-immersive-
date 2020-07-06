////Chained promises
// let promise = new Promise();

// promise = (() => {

//     setTimeout(() => {
//         console.log('inside promise');
//         resolve('succes');
//     }, 1000)
// })
// promise.then(result => {

//     console.log(result);
// })

////Previous example using multiple promises

// Promise.all([])

// let promise = new Promise((resolve, reject) => {

//     if(True){

//         setTimeout(() => {
//             console.log('inside promise');
//             resolve('succes');
//         }, 1000)
//     }
//     else {
//         reject("There was an erro in the code");
//     }      
// })

// promise.then(result => {

//     console.log(result);
// })

// promise.catch((error) => {
//     console.log(error);
// })

//Multiple Promises using multiple fetch calls
var p1 = fetch('https://jsonplaceholder.typicode.com/albums');
var p2 = fetch('https://jsonplaceholder.typicode.com/posts');

Promise.all([p1, p2])
  .then(responses => {

    responses[0].json;
    responses[1].json;

    return responses;
  })

  .then((data) => {
    console.log(data);
  })