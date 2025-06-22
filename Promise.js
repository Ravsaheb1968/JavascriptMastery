// Promise is the mostly used to take output for the future, some work output we require in the future that time promise come into
// the existing.
// Promise have three state 1) Pending 2) Resolve or Fulfilled 3) Reject

// it is simple example how the promise are initialize.
let firstPromise = new Promise(function (resolve, reject) {
    console.log("First Promise Printing Here");
})

let secondPromise = new Promise(function (resolve, reject) {
    console.log("The second Promise with Pending State of Promise");
})

// it used to show the promise in the pending state.
console.log(secondPromise);   

// How to resolve the promise 

let thirdPromise = new Promise(function (resolve, reject) {
    console.log("Write the resolve case in the third promise");
    // resolve(); untill we not callback the resolve the .then condition are not ready to give o/p .then is used to resolve the promise 
    resolve(); // after call the resolve here .then output are able to print
})
thirdPromise.then(() => {
    console.log("Printing the Resolve state of the Promise");
})

// How to pass the data from the resolve calling

let fourthPromise = new Promise(function (resolve, reject) {
    console.log("Pass the object into the resolve at time of calling it");
    resolve({ Username: "Ok652", Password: "ok@123" });
})

// how to print the pass object as parameter from the resolve at time of calling

fourthPromise.then((user) => {
    console.log(user.Username);
    return user;
}).then((username) => {
    // first then return that value that value are comes into the second then as output data e.g return user give all the data that pass as parameter at time of resolve calling
    // the parameter u pass in second then that parameter val comes from the first then return 
    console.log(username);
    console.log(username.Username);
})

let promiseFifth = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            // for resolve we require the .then block need to declare 
            // if error val is false this blcok will be execute
            resolve({ Username: "Ok652", password: "Ok@123" });
        }
        else {
            // for the rejection we require the catch block need to declare 
            // if error val is true this block will be execute
            reject("Error: Something went wrong");
        }
    }, 1000);
})

promiseFifth.then((user) => {
    return user;
}).then((user) => {
    console.log(user.Username);
}).catch((error) => {
    console.log(error);

}).finally(() => {
    console.log("Finally anything is happen this statment is manadatory to print either it is go with resolve or reject");

})

let promiseSix = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ Username: "Ok652", Password: "ok@123" });
        }
        else {
            reject("Error: 404 Not Found");
        }
    }, 1000);
})

// to use another method that replace the .then .catch used one async fucntion and after that use try and catch block try blcok used to resolve and cathc for the reject
async function consumePromiseSix() {
    try {
        const response = await promiseSix;
        console.log("it is Response",response);
        console.log(response.Username);
        
    }
    catch (error) {
        console.log(error);
    }
}
// to get the output call the async function here
consumePromiseSix()


//used of fetch while using the async method with try n catch

async function fetchAPI(){
    try{
        let url="https://jsonplaceholder.typicode.com/users";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E:",error);
    }
}

fetchAPI();

// fetch method by using  .then .catch .finally

let url="https://jsonplaceholder.typicode.com/users";

let apiData = fetch(url)

apiData.then((response)=>{
    let data = response.json();
    return data;
}).then((data)=>{
    console.log("it is data belong from the .then",data[0]);
    31  
}).catch((error)=>{
    console.log(error);
    
})