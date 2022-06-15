let scoreKeeper = {'-1': 0, '0': 0, '1': 0}
const roundRes = document.createElement('p')
const guiOut = document.getElementById('output')
guiOut.appendChild(roundRes)

const scoreBoard = document.getElementById('scoreBoard')

function computerPlay() {
    let out = Math.floor(Math.random() * 3)

    switch (out) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper'
            break;
    }
    
}

function playRound(player) {
    
    let out = 0;
    let comp = computerPlay();

    player = player.toLowerCase()
    

    if(player===comp) out =  0
    if(player ==='rock') {

        if(comp==='paper') {
            out =  -1;
        } else
        out =  1;
    } else if(player==='paper') {

        if(comp==='scissors') {
            out =  -1;
        }else out =  1;
    } else {

        if(comp==='rock') {
            out =  -1
        }else out =  1;
    }


        if(out== -1) roundRes.textContent = ('Computer wins!')
        else if(out == 0) roundRes.textContent = ('Tie!') 
        else roundRes.textContent = ('You win!')
        scoreKeeper[out] += 1

        console.log('player: '+player+', '+'comp: '+comp+', out: '+out)


        updateScoreShower()

}

function updateScoreShower() {
    let output = "Your points: " + scoreKeeper[1]+" Ties: "+scoreKeeper[0]+" Bot Points: "+scoreKeeper[-1]
    scoreBoard.textContent = output
}

function victoryFinder() {
    console.log('You tied' + scoreKeeper[0] +" games, the bot won "+scoreKeeper[-1] +" games, and you won "+ scoreKeeper[1]+" games")

    if(scoreKeeper[-1]>scoreKeeper[1]) {
        console.log('bot wins!')
    }else if(scoreKeeper[1]> scoreKeeper[-1]) console.log('you won!')
    else console.log('you tied!')
}