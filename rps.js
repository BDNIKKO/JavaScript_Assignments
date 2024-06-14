const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

const player3 = {
    name: 'player 3',
    getHand: getHand
};

const player4 = {
    name: 'player 4',
    getHand: getHand
}



function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} played ${hand1}`);
    console.log(`${player2.name} played ${hand2}`);

    let winner = null;

    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        console.log(`${player1.name} wins this round with ${hand1}`);
        return player1;
    } else {
        console.log(`${player2.name} wins this round with ${hand2}`);
        return player2;
    }
}

function playGame(player1, player2, playUntil) {
    let score1 = 0
    let score2 = 0

    while (score1 < playUntil && score2 < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            score1++;
        } else if (winner === player2) {
            score2++;
        }
        console.log(`${player1.name}: ${score1}, ${player2.name}: ${score2}`);
   }


    const finalWinner = score1 === playUntil ? player1 : player2;
    console.log(`${finalWinner.name} wins the game!`);
    return finalWinner;
}

function playTournament(players, playUntil) {
    const semiFinalWinner1 = playGame(players[0], players[1], playUntil);
    const semiFinalWinner2 = playGame(players[2], players[3], playUntil);

    console.log(`Final match between ${semiFinalWinner1.name} and ${semiFinalWinner2.name}`);
    const champion = playGame(semiFinalWinner1, semiFinalWinner2, playUntil);

    console.log(`${champion.name} is the world champion!`);
    return champion;
    
}

playGame(player1, player2, 3);
playTournament([player1, player2, player3, player4], 3);


