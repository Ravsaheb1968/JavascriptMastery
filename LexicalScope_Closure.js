// Lexical Scope 
// Lexical scope means that a variable's scope is determined by its position in the source code, 
// and nested functions have access to variables declared in their outer scope.

function Outer(){

    let name = "ok652";

    //age not accessible in the outer function 
    // console.log(age);
    
    // Here the place in which we preserved the outer variables like the name lexical scope starting from line 12 to line 22 
    function inner(){
        let age=23
        console.log(name);
    }
    function innerTwo(){
        console.log(name);

        // age not accessible here also.
        // console.log(age);
    }
    inner();
    innerTwo();
}
Outer();

// Closure 
// A closure is created when a function remembers and has access to variables from its lexical scope, 
// even after the outer function has finished executing.

function outerClosure(){
    let count = 0;
    // declaration of function name(innerClosure) not an mandatory it's depend on you, u can only use function keyword;
    return function innerClosure(){
        count++;
        console.log(count);
        
    }
}
const counter = outerClosure();
counter();
counter();

