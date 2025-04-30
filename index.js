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
