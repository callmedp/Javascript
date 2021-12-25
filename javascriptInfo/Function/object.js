// Getting the name of the function

arr = [
    function multiverse(){}
]

console.log("in the madness of ", arr[0].name)


//Function is a special object
//callable object

function hello(a, b,...c){
}

//Accessing name property
console.log("hello", hello.name)

//counting number of parameters in function
console.log("paramsF(...args)", hello.length)