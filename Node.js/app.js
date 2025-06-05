const crypto=require("crypto");


console.log("Welcome to the Node.js World")


crypto.pbkdf2("password","salt", 500000, 50, "sha512", (error,response)=>{
    console.log("First key is running");
})

//console.log("First key Password is generated");

// crypto.pbkdf2("passowrd", "salt", 50000000, 50, "sha512", (error,response)=>{
//      console.log("Second key is running");
//      })

// console.log("Second key is generated")



function createVote(x){
    const vote=25;
    if(vote>25) return `The person age is less than 25 which is ${x}`;
    else return `The person age is greater than 25 which is  ${x}`;
}

let age=createVote(20);
let ageNumber =createVote(30);
console.log(age);
console.log(ageNumber);