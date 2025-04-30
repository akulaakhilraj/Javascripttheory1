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
