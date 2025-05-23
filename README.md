# Javascripttheory1
Javascript

# What is strict mode and unstrict mode difference

--> Strict mode throws errors for actions that are silently ignored in non-strict mode.
"use strict";
x = 5; // ❌ ReferenceError: x is not defined

-->In non-strict mode, this refers to the global object inside regular functions.
   In strict mode, this is undefined, preventing accidental access to global scope.
  
    function test() {
    console.log(this);
    }

    test(); 
    // Non-strict → logs `window`
    // Strict → logs `undefined`


Duplicate Parameters in Functions are allowed in unstrict mode but not in strict mode gets Syntax Error


# What is a Call Back Function? 
Callbacks are functions passed as arguments to another function to be executed later, often used in asynchronous operations. They are typically used to handle the result of an asynchronous operation once it completes.

Callbacks can also be used for error handling in asynchronous operations.


# What is a Promise and how it works?
Promises is an Object that represent the eventual completion(or failure) of an asynchronous operation and allow chaining multiple asynchronous operations together. 

What are the benefits of Promises?
--> Best use of handling Asyc/await
--> Avoid Callback Hell 
--> Support Chaining and composition 

What are the drawback of Promises?

--> Still require .catch error handling
--> can lead to silent error if misused
--> 

Promises have several methods available:

then: Used to handle the fulfillment of a promise.1`    
catch: Used to handle the rejection of a promise.
finally: Used to execute code after a promise, regardless of its outcome.
all: Combines multiple promises into a single promise that is fulfilled when all of the input promises are fulfilled.
race: Returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects.


CREATING A PROMISE FUNCTION 

A Promise can be created using the Promise constructor, which takes a function with two parameters: resolve and reject. Within this function, you perform the asynchronous operation, and then call resolve(value) when it succeeds or reject(reason) when it fails.

Once a Promise is created, you can consume its eventual result using the .then() and .catch() methods. These methods allow you to specify what to do when the Promise is fulfilled (resolved) or rejected.

Promises can be chained together using .then() to execute asynchronous operations sequentially or conditionally. Each .then() call returns a new Promise, allowing for easy chaining.

Code: 

let myPromise= new Promise((resolve,reject)=>{
    //Perform Asynchronus operations
    setTimeout(()=>{
        resolve("Get the fetch data");
    },1000)
})

myPromise.then((result)=>{
    console.log("Get the Result Outcome:", result);
}).catch((error)=>{
    console.log("Get the value dii:", error);
})



# What is a Promise Chnaining

When you use .then() on a Promise, it returns another Promise. This lets you attach another .then() to continue the sequence. 

Each step in the chain:
Waits for the previous Promise to resolve.
Gets the result of the previous step as input.
Can return a new value or another Promise.


function firstStep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Get the Value of the 1 ")
        },1000)
    })
}
function secondStep(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${prev} and 2`)
        },1000)
    })
}
function thirdStep(prev){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${prev} and 3rd `)
        },1000)
    })
}

firstStep()
.then(secondStep)
.then(thirdStep)
.then((result)=>{
    console.log("Result:", result)
})




# What is IIFE in javascript?

The code in the module is wrapped in a function and get executed

(function (){

})(); #Here to wrap an ananomous function we need () and we can call it immediately

The variables are private because of IIFE and require 


# What is a V8 Engine?

# What is a memory heap?

# What is a Garbage Collector?


# What is a synchronous and asynchronous?

# What is a SetTimeout()?




# Node.js Concepts and it's History

# Node.js Hostory and working?



# What is the difference between common.js and module.js

common.js

--> By default is works in node.js
--> we use module.exports and require

    module.exports=function name();
    const function name anything =require function name();

--> older way
--> It is  a synchronous by default
--> The code is run in non-strict mode



module.js (ESM OR ES6)
-->By default it works in react.js, angular.js
-->we export directly and import it

        export function name with function in it()
        import {function name } from "path"
--> newer way
--> It is asynchronus
--> The code is run in strict way.


# What is the purpose of require in node.js
In Node.js, `require` is used to import built-in modules, third-party, or custom modules into a file.
It loads ypur local files, JSON files and share the reuseable logic 
Wrap inside IIFE and Evalutaion and caching
