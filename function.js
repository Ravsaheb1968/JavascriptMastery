let a=24;
let b=34;

// Hoisting in the Javascript

console.log(add(a,b));
function add(a,b){
     return a+b;
}

// function as expression

let myfun=function (){
    console.log("function written as expression");
}

myfun();

// passed obj as parameter into the function

const objFun={
    fullName:{
        name:"korde",
        middleName:"om",
        lastName:"Ravsaheb",
    },
    age:24,
    id:55
}

objPassed(objFun);
function objPassed(obj){
    console.log(obj.fullName.name);
}

// Arrow Function

let fun = ()=>{
    console.log("Write the arrow function");
}

fun();

// write the arrow function within one statement

let myaddArrowFun= ()=> 32+252;
console.log(myaddArrowFun());

let num1=90;
let num2=43;

//Arrow function with parameter & exponetial way



let arrPara=(a,b)=>{
    return a+b;
}
console.log(arrPara(num1,num2))

let oneLine = (n1,n2) => (n1*n2);

console.log(oneLine(num1,num2));

