let myarr=[34,64,87,12,54]
console.log(myarr);

// add the Element at the end of arr
console.log(myarr.push(24));
console.log(myarr);

// Remove the Element from the end of arr
console.log(myarr.pop(24));
console.log(myarr);

// add Element starting of arr
console.log(myarr.unshift(652));
console.log(myarr);

// remove element from starting of arr
console.log(myarr.shift(652));
console.log(myarr);

// includes check element present or not in the arr
console.log(myarr.includes(34));

// Indexoff => find the index of the given Element
console.log(myarr.indexOf(87))

// Join in the Array

let arr2=myarr.join();

console.log(arr2);

// Difference between splice and slice

const newarr=myarr.splice(0,3);
console.log(newarr);
console.log(myarr);

// Adding Two Array

const arrConcat=myarr.concat(newarr);
console.log(arrConcat);

// another method to concate an arr

let arr1=[43,35,5,12,55];
let arr5=[34,53,5,45,522,5,32]

const arr7= [...arr1,...arr5]
console.log(arr7);

let mixarr=[2,42,4,[242,24,2,2444],[24422,2,24,42,4,[4,2,42,42,22]]]

console.log(mixarr.flat(Infinity));

// it is possible to object to array conversion?

// string to array conversion

str="omkorde";

console.log(Array.from(str));

