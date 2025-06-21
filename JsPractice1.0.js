
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

let alphanum="2424abc";
let intonum = Number(alphanum);
console.log(intonum); // => NaN;

let nullVal=null
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
console.log(a,b) // => a=6 b=6

b = a++;
console.log(a,b) // => a=7 b=6


// comparison of Datatypes

// console.log(null==undefined); // => true
// console.log(null===undefined); // => false due different in data types null have obj and undefined have undefined

// console.log(null==0); // => false 
// console.log(null===0); // => false 


// Symbol 
const fId = Symbol("242");
const SId = Symbol("652");

console.log(fId==SId); // => False , Symbol value always in unique form

// BigNumber 
 const bigNum =  1234567345678903456789n // => at end n is manadatory
 console.log(bigNum);

// Non Primitive Datatypes 
// Array, Objects, Functions

const myarr = ["om","rohit","shubham"];
console.log(myarr);

const emp = {
    name:"Ok",
    fullname:{
        fname:"om",
        mname:"Rav",
        lname:"Korde"
    },
    age:23
}
console.log(emp);


function myfun(){
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
console.log(str.slice(2,5));
console.log(str.trim());
console.log(str.length); // it is object doesn't method to call it
console.log(str.replace("o","O"));








