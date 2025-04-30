# Javascripttheory1
Javascript


# What is a Call Back Function? 
Callbacks are functions passed as arguments to another function to be executed later, often used in asynchronous operations. They are typically used to handle the result of an asynchronous operation once it completes.

Callbacks can also be used for error handling in asynchronous operations.


# What is a Promise and how it works?
Promises is an Object that represent the eventual completion (or failure) of an asynchronous operation and allow chaining multiple asynchronous operations together. 

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