// Promise is the mostly used to take output for the future, some work output we require in the future that time promise come into
// the existing.
// Promise have three state 1) Pending 2) Resolve or Fulfilled 3) Reject

// it is simple example how the promise are initialize.
let firstPromise = new Promise(function(resolve,reject){
    console.log("First Promise Printing Here");
})

let secondPromise = new Promise(function(resolve,reject){
    console.log("The second Promise with Pending State of Promise");
})

// it used to show the promise in the pending state.
console.log(secondPromise);

// How to resolve the promise 

let thirdPromise = new Promise(function(resolve,reject){
    console.log("Write the resolve case in the third promise");
    // resolve(); untill we not callback the resolve the .then condition are not ready to give o/p .then is used to resolve the promise 
    resolve(); // after call the resolve here .then output are able to print
})
thirdPromise.then(()=>{
    console.log("Printing the Resolve state of the Promise");
})

// How to pass the data from the resolve calling

let fourthPromise = new Promise(function(resolve,reject){
    console.log("Pass the object into the resolve at time of calling it");
    resolve({Username:"Ok652",Password:"ok@123"});
})

// how to print the pass object from the resolve at time of calling

fourthPromise.then((user)=>{
    console.log(user);
    // return user;
}).then((username)=>{
    // console.log(username);
})