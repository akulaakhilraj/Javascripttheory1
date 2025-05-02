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


let rummypoints= new Promise((resolve,reject)=>{
    const value=34;
    const points=76;
    resolve({value,points});
})

rummypoints.then((data)=>{
    console.log("message value:", data.value);
    console.log("message outcome:", data.points);
    
})
