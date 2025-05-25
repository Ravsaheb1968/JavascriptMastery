// Simple for loop

// let i=10;
// console.log("it's all about writing the 10 table")
// for(let j=1;j<=10;j++){
//     console.log(j*2);
// }

const myarr=[42,24,2442,42,241];

// for in Loop(it gives the key of the array not an value)=> used into the Object mostly 

// for(i in myarr){
//     console.log(myarr[i]);
// }

// for of Loop(it gives the value of array not an keys)

for(i of myarr){
    console.log(i);
}

// for Of loop and for in loop in Object

const objForIn={
    name:"Om",
    age:45,
    id:50
}
// for in loop in the object
for(j in objForIn){
    console.log(j,objForIn[j])
}

// for of loop in the object its not possible beacause object never be iterable

// for(k of objForIn){
//     console.log(k)
// }

// For Each Loop 

// In the forEach loop one function that able to return value

const forArr=[34,535,225,224,24];

// let forEachLoop=forArr.forEach(function(item){
//     console.log(item);
// })

// forEach loop with the Arrow function



let forEachArrow=forArr.forEach((item)=>{
    console.log(item);
})

// forEach loop return nothing

// let forEachArrow=forArr.forEach((item)=>{
//     return item // it is not possible in the forEachLoop
// })

