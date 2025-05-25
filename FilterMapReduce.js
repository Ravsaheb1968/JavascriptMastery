let arr=[2424,42,24,2422,3,4,55];

// filter is used to sort the give data
// forEach loop return nothing due to this filter map reduce come in exist
// By using the filter we are able to return with sorted output

let filter=arr.filter((item)=> item>2000)
console.log(filter);

let result =arr.filter((item)=>{
    return item<2000
})
console.log(result);

// filter without arrow function

let filterResult=arr.filter(function(item){
    return item%2==0;
})
console.log(filterResult);

// Map method

let mapResult=arr.map((item)=> item+3250);
console.log(mapResult);

mapResult=arr.map((item)=> item>2000);
console.log(mapResult);

// map with return and arrow

let mp=arr.map(function(item){
    return item*10
})
console.log(mp);

//map & filter
let mapfilter=[424,42,24,442,555]
let mapfilterResult=mapfilter.filter((item)=> item>200).map((item)=>item+100).map((item)=>item*100);
console.log(mapfilterResult);

// console.log(mpfilter);

// Reduce method

let arr2=[43,5,35,124,12,542]
let reduceResult=arr2.reduce((acc,curr)=> acc+curr)

console.log(reduceResult);

// map reduce and filter only you can use with the array not with an object
