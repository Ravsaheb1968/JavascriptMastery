
// Datatypes

// 1.Primitive Datatypes 
// i.Number
// ii.String
// iii.Boolean
// iv.null
// v.Undefined
// vi.Symbol
// vii.Bigint

// 2.Non Primitive Datatypes
// i.Object
// ii.Function
// iii.Array

// Typeof 
// conosole.log(Typeof(Undefined)) => Undefined
// console.log(Typeof(null)); =>  Object


// Datatypes Conversion

let alphanum = "2424abc";
let intonum = Number(alphanum);
console.log(intonum); // => NaN;

let nullVal = null
let nullNum = Number(nullVal);
console.log(nullNum); // => 0;

let undef = undefined;
let undefNum = Number(undef);
console.log(undefNum); // => NaN;

let boolVal = true;
let boolNum = Number(boolVal);
console.log(boolNum); // => 1

// PreIncrement & PostIncrement

let a = 5
let b = ++a
console.log(a, b) // => a=6 b=6

b = a++;
console.log(a, b) // => a=7 b=6


// comparison of Datatypes

// console.log(null==undefined); // => true
// console.log(null===undefined); // => false due different in data types null have obj and undefined have undefined

// console.log(null==0); // => false 
// console.log(null===0); // => false 


// Symbol 
const fId = Symbol("242");
const SId = Symbol("652");

console.log(fId == SId); // => False , Symbol value always in unique form

// BigNumber 
const bigNum = 1234567345678903456789n // => at end n is manadatory
console.log(bigNum);

// Non Primitive Datatypes 
// Array, Objects, Functions

const myarr = ["om", "rohit", "shubham"];
console.log(myarr);

const emp = {
    name: "Ok",
    fullname: {
        fname: "om",
        mname: "Rav",
        lname: "Korde"
    },
    age: 23
}
console.log(emp);


function myfun() {
    console.log("Hello World !");

}
myfun();

// String Operation

let str = " omRav Korde ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(5));
console.log(str.indexOf("R"));
console.log(str.includes("K"));
console.log(str.split("v"));
console.log(str.slice(2, 5));
console.log(str.trim());
console.log(str.length); // it is object doesn't method to call it
console.log(str.replace("o", "O"));


// Array Method

let arr = [43, 5352, 45, 243];
arr.push(24);
console.log(arr);

arr.pop();
console.log(arr);
arr.indexOf(243);
console.log(arr);
arr.includes(523);
console.log(arr);
arr.unshift(256);
console.log(arr);
arr.shift();
console.log(arr);

// let arr1 = []
// its not way to used of join 
// arr1.join(arr);

// console.log(arr1);

let arr1 = arr.join();
// console.log(arr1);


// Difference between slice & splice

arr.slice(0, 3);
console.log(arr);

arr.splice(0, 2);
console.log(arr);

let arr2 = [42, 5, 67, 4565, 4234];
let arr3 = [35, 67, 635467, 34546643];

//  used of the spread to add the two arr
let arr4 = [...arr1, ...arr2];

console.log(arr4);

let arr5 = arr.concat(arr2);

const mixarr = [33, 553, [53, 25, 322], [42, 53]];
const spreadarr = mixarr.flat(Infinity);
console.log(spreadarr);

// string to array conversion

console.log(Array.from("Ok652"));

// Objects

const sym = Symbol("ok652");

const obj = {
    name: "ok652",
    fullname: {
        fname: "om",
        mname: "Rav",
        lname: "korde"
    },
    age: 23,
    Days: [
        {
            // array of index 0
            loginDays: ["mon", "tue"]
        },
        {
            // array of index 1
            logOffDays: ["wed", "thr", "frd"]
        }
    ],
    [sym]: "ok652",
}

// Accesing the object values

console.log(obj.Days[0].loginDays[1]);

// passed the object into the function as parameter

function myobj(objpara) {
    console.log([sym]);

}
myobj(obj);

// How to Declare singleton object?

const arrobj = new Object();

// Addition of two Object

const obj1 = {
    name: "ok652"
}
const obj2 = {
    name: "sk652"
}

// Used assign method
const obj3 = Object.assign({}, obj1, obj2);

// used spread method
const obj4 = { ...obj2, ...obj1 }
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.values(obj4));

// Destructure of Object 
// Destructure (short for destructuring) is a feature in JavaScript that allows you to unpack values from arrays or 
// properties from objects into distinct variables in a clean and concise way.

const Employee = {
    fullname: "ok652", age: 23,
}

const { fullname: name } = Employee;

console.log(name);

// another way to used 

const user = {
    name: 'Om',
    age: 25,
    city: 'Pune'
};

// Destructuring
const { name: fullname, age: age1 } = user;

console.log(fullname); // Om
console.log(age1);  // 25

// Function

// if parameter number are not fix

function myfun(...num1) {
    return num1;
}
console.log(myfun(2));

// function as expression must to used when u return something in the function

let myfunExp = function () {
    return 24 + 3453;
}

let result = myfunExp();
console.log(result);

// By passing object as parameter

let objj = {
    name: "ok652",
    age: 23,
}

function myobjj(objjpara) {
    console.log(`My name is: ${objjpara.name}`);
}

myobjj(objj);

// Arrow Function

let myarrow = () => {
    console.log("My name is ok652");
}
myarrow();

// with parameter

let myarropara = (n1, n2) => {
    return n1 + n2;
}

console.log(`My number sum is: ${myarropara(24, 44)}`);

// implict no use of curly braces and in explicit way use of curly braces  
// return the implicit arrow function 

let myImpArr = () => console.log("My Implicit Arrow function");
myImpArr();

// False Value in js
// false,0,-0,null,undefined,NaN,""(empty string)

// Truthy Value in js
//" "(non empty string), [],{},function(){},"0","false"

// Nullish Coalescing Operator

let val
val = 2 ?? 24;
console.log(val);

// Ternary Operator

let mynum = 240;
mynum % 2 == 0 ? console.log("My num is Even ") : console.log("My num is Odd");


// For of loop

const ar24 = [24, 53, 353, 23, 673, 454];
str = "Mynameis";
for (k of str) {
    console.log(k);
}
for (i of ar24) {
    console.log(i);
}

for (j in ar24) {
    console.log(j);
}

// for the array best to use of for of loop 
// for the objects best to use of for in loop

let objIn={
    name:"sk412",
    age:24
}
// we can't use of for of loop with objects
for(i in objIn){
    console.log(i,objIn[i]);
}
  
// forEach loop
// In forEach Loop always have one function have one parameter that make the iteration until the len isn't over. 
// forEach loop have alredy well info about len how many possible iteration need to made in it.

const forEachArr=[245,5324,53,243,24];
forEachArr.forEach(function(item){
    console.log(item);
})

// forEach loop with arrow function

forEachArr.forEach((item)=>{
    console.log(item);
})

// forEach loop with normal function

function myForEachFun(item){
    console.log(item);
}

forEachArr.forEach(myForEachFun);

forEachArr.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const mycoding=[
    {
        mylang:"js",
        version:"Es15",
    },
    {
        mylang:"py",
        version:24,
    },
    {
        mylang:"Reactjs",
        version:19
    }
]
mycoding.forEach((item)=>{
    console.log(item.mylang);
})

// IMP -- forEach loop not use with objects

// Filter Map Reduce

// Filter 
// Filter is used to segregate the output and take the ouput from the particular condition. 
// it goes through all present element in given array, segregate element that suitable for the given condition.

const arrr=[2,4,24,425,224,22];

// if u used curly braces return are must
let myresult = arrr.filter((item)=>{
    return item>200;
})

console.log(myresult);

let resultFilter = arrr.filter((item)=> item<300)
console.log(resultFilter);

// Map is used to work on the all present element in the given array.
// Any condition u state that apply on the all element.
let myMap = arrr.map((item)=>item>34);
console.log(myMap);

let myMapResult = arrr.map((item)=>item+100);
console.log(myMapResult);

// Map and Filter Same time use

let mapFilter = arrr.map((item)=>(item*10)).map((item)=>item+100).filter((item)=>item>1000);
console.log(mapFilter);

// Reduce In JavaScript, the .reduce() method is used to reduce an array to a single value by applying a function to each element (from left to right). 
// It’s very useful for things like summing numbers, flattening arrays, grouping items, etc.

let reduceResult = arrr.reduce((acc,currval)=>acc+currval,0);
console.log(`The Reduce Sum are : ${reduceResult}`);

// if u used curly braces return are must

let reduceRes = arrr.reduce((acc,currVal)=>{
    return acc*10 + currVal;
})

console.log(`The Updated Value of the Reduce Expression are : ${reduceRes}`);

// Sync
// In the sync, source code execute line by line there is no any timestamp to break source code wait for the excute 
console.log("Power On");
console.log("Start");
console.log("End");
console.log("shutdown");

//Async 
console.log("start")

// In the Async js engine doesn't wait for the one second to execute the next statement, that statement goes into queue after it's time over print
setTimeout(()=>{
    console.log("Hi");
},1000);

console.log("End");

setTimeout(function (){
    console.log("Hii");
},2000);

//use of setTimeout assign the function to the varible that function reference use in setTimout

let setTime = function (){
    console.log("Print the value after within second");
}

setTimeout(setTime,1000);

// clearTimeout

let setClear = function(){
    console.log("First set then Clear");
}

let set = setTimeout(setClear,2000);

clearTimeout(set); // it stop the printing i.e happing after the two second i.e "First set then Clear";