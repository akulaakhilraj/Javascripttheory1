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


// Function Chaining 

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


//SUM OR EVEN ODD 
function sumOrEven(){
    return new Promise((resolve,reject)=>{
        const number=50;
        if (number<=40){
            resolve("Even Number");
        }
        else{
            reject("Odd number");
        }
    })
}
sumOrEven().then((msg)=>{
    console.log(`${msg}`)
}).catch((msg)=>{
    console.log(`${msg}`);
})



function evenorOddNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const number =1000;
            if(number>=1000){
                resolve(`Number is greateer than`)
            }
            else{
                reject(`Number is less than`)
            }
        },5000)
    })
}

evenorOddNumber().then((msg)=>console.log(`${msg}`)).catch((msg)=>console.log(`${msg}`))