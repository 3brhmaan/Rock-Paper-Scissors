
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    const choice = ['Rock' , 'Paper' , 'Scissors']
    return choice[num];
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection)
        return `It's a Tie!`;
    else if( 
        playerSelection === 'rock' && computerSelection !== 'scissors' ||
        playerSelection === 'scissors' && computerSelection !== 'paper' ||
        playerSelection === 'paper' && computerSelection !== 'rock' 

    ) return `You Lost!`;
    else return 'You Won!';
}

function getWinner(round){
    if(round.includes("Won"))return 1;
    else if(round.includes("Lost"))return -1;
    else return 0;
}

function displayRoundDescription(roundResult , playerSelection , computerSelection){

    let roundText = document.querySelector('#round-result #result');
    roundText.textContent = roundResult;

    let roundDescription = document.querySelector('#round-result #description')

    if(roundResult.includes("Lost"))
        roundDescription.textContent = `${playerSelection} is beaten by ${computerSelection}`;
    else if(roundResult.includes("Won"))
        roundDescription.textContent = `${playerSelection} beats ${computerSelection}`;
    else roundDescription.textContent = `${playerSelection} ties with ${computerSelection}`;

}

function displayRoundScore(playerScore , computerScore , playerSelection , computerSelection)
{
    let playerText = document.querySelector('#player .text');
    let playerSign = document.querySelector('#player .sign');

    playerText.textContent = `Player: ${playerScore}`;
    playerSign.textContent = document.querySelector(`#${playerSelection} .sign`).textContent;


    let computerText = document.querySelector('#computer .text');
    let computerSign = document.querySelector('#computer .sign');

    computerText.textContent = `Computer: ${computerScore}`;
    computerSign.textContent = document.querySelector(`#${computerSelection} .sign`).textContent;

}

function game(e){

    this.classList.add('click');
    roundNum ++;

    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = this.id;

    console.log(playerSelection);
    console.log(computerSelection);

    
    let roundResult = playRound(playerSelection , computerSelection);

    let flg =  getWinner(roundResult);
    if(flg === 1)playerScore++;
    else if(flg === -1)computerScore++;

    displayRoundScore(playerScore , computerScore , this.id , computerSelection);
    displayRoundDescription(roundResult , playerSelection , computerSelection);
    
}

function setBtnEvents(){
    const btns = document.querySelectorAll('.btn');

    // add hover event
    btns.forEach(btn => btn.addEventListener(
        'mouseover' ,
        function(e){
            this.classList.add('hover');

        }));

    // remove hover event
    btns.forEach(btn => btn.addEventListener(
        'mouseleave' ,
        function(e){
            this.classList.remove('hover');

        }));

    // add click event
    btns.forEach(btn => btn.addEventListener(
            'click' ,
            game
        ));

    // remove click event
    btns.forEach(btn => btn.addEventListener(
        'mouseout' ,
        function(e){
            this.classList.remove('click');

        }));
}


let playerScore = 0 , computerScore = 0 , roundNum = 0;
let playerBtn = 

setBtnEvents();




