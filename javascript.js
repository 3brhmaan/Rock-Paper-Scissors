function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    if(choice === 0)return 'Rock';
    else if(choice === 1)return 'Paper';
    else return 'Scissors';
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection)return "It's a Draw !";
    else if( 
        playerSelection === 'rock' && computerSelection !== 'scissors' ||
        playerSelection === 'scissors' && computerSelection !== 'paper' ||
        playerSelection === 'paper' && computerSelection !== 'rock' 
      )
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
    return 'You Won !';
}

function game(){

    function point(round){
        if(round.includes("Won"))return 1;
        else if(round.includes("Lose"))return -1;
        else return 0;
    }

    let humanScore = 0 , computerScore = 0;
    for(let i = 0 ; i < 5 ; i++){

        let computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = prompt("enter your selection : ").toLowerCase();

        let roundResult = playRound(computerSelection , playerSelection);
        console.log(`Round ${i+1} : ${roundResult}`);

        

        let flg =  point(roundResult);
        if(flg === 1)humanScore++;
        else if(flg === -1)computerScore++;
    }

    if(humanScore > computerScore)console.log("You Won !");
    else if(humanScore > computerScore)console.log("You Lose !");
    else console.log("It's a Draw");
}

