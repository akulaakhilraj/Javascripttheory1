//Call back Functions
function playergame(callback){
    setTimeout(()=>{
        callback("Need to enter the game play");
    },1000)
}

playergame((game)=>{
    console.log(game)
})

function playergame1(callback){
    setTimeout(()=>{
        const error=null;
        const winner="player won the game"
        callback(error,winner);
    },1000)
}

playergame1((error,winner)=>{
    if(error){
        console.log("Error:", error);
    }
    else{
        console.log("Winner :", winner);
    }
})


function gameWinner(callback){
    setTimeout(()=>{
        const winner= "game one won";
        const error="Player lost the game and exit the match and sit on the next table";
        callback(error,winner);
    },5000)
}

gameWinner((error,winner)=>{
    if(error){
        console.log("game player lost :", error);
    }
    else{
        console.log("Game player winner:", winner);
    }
})



//Promise

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


//Chaining In Promise Function
let myPlayer= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2);
    })
})

myPlayer.then((resolve)=>{
    console.log("get the value:", resolve);
    return resolve*2
}).then((resolve)=>{
    console.log("Get the outcome value:", resolve);
    return resolve**2
}).then((resolve)=>{
    console.log("Get the value:", resolve);
    return resolve**3
}).then((resolve)=>{
    console.log(("Get the value outcme:",resolve));
})
.catch((error)=>{
    console.log("Get the Error value:", error);
})

// CHECK EVEN OR ODD NUMBER USING PROMISE FUNTION 
function checkEvenNumber(number){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(number%2==0){
                console.log(`The number ${number} is an Even number`);
            }else{
                console.log(`The number ${number} is and Odd number`)
            }
        }, 1000);
    })

}
checkEvenNumber(6)
.then((response)=>console.log("Q1: ", response))
.catch((error)=>console.log("Q2", error));



function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 === 0) {
                console.log(`The number ${number} is an Even number`);
                // No resolve() here
            } else {
                console.log(`The number ${number} is an Odd number`);
                // No reject() here
            }
        }, 1000);
    });
}

checkEvenNumber(6)
.then((response) => console.log("Q1: ", response))  // response will be undefined
.catch((error) => console.log("Q2: ", error));


// Function Chaning 


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