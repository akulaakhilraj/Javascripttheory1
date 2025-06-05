// CREATE AN IF ELSE STATEMENT 

function createVote(x){
    const vote=25;
    if(vote>25) return `The person age is less than 25 which is ${x}`;
    else return `The person age is greater than 25 which is  ${x}`;
}

let age=createVote(20);
let ageNumber=createVote(30);
console.log(age);
console.log(ageNumber);