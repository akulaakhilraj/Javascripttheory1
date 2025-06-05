// CREATE AN IF ELSE STATEMENT 

function createVote(x){
    //const vote=25;
    if(x>25) return `The person age is gretaer than 25 which is ${x}`;
    else if (x>=20 && x<=25) return `The person age is in between 20 and 25 which is  ${x}`;
    else return `The person age is less than 20 which is  ${x}`;
}

let age=createVote(22);
let ageNumber=createVote(29);
let ageFactor=createVote(19);
console.log(age);
console.log(ageNumber);
console.log(ageFactor);




let numbers=[1,4,7,2,8,4,88,23,22,24,25]

//Print all the even number using for loop

for(let i=0; i<numbers.length;i++){
    if(numbers[i]%2 ==0){
        console.log(numbers[i]);
    }
    
    
}


//Print all the odd number using for while loop

let i=0;
while(i<numbers.length){
    if(numbers[i]%2 !==0){
        console.log(numbers[i]);
    }
    i++
}