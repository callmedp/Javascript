"use strict"

let taskMaster = (function(){
    var  _counter = 0;
    return {
        incrementMaster(){
            _counter++;
        },
        displayMaster(){
            console.log(
                "value of counter is", _counter
            )
        },
        resetMaster(){
            _counter = 0 
        }
    }
})()

console.log(taskMaster.incrementMaster())
console.log(taskMaster.displayMaster())





+function sum(){
    //function definition
    console.log("function definition")
    }()
    
    const sum = function(){
    //function expression
    console.log("function expression")
    }()
    
    console.log(sum)


