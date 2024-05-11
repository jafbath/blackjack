let deck = []
let playerHand = []
let dealerHand = []
let message = ""
let playerChips = 100
let currentWager = 0
var hidden

function newGame() {
        document.getElementById("messages").innerHTML = ""
        deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]
        playerHand = [drawCard(), drawCard()]
        dealerHand = [drawCard(hidden), drawCard()]
        updateDealerHandValue()
        updatePlayerHandValue()
        winBet()
        loseBet()
        tieBet()
        updatePlayerChips()
        updateCurrentWager()
}



function hit() {
    playerHand.push (drawCard())
    updatePlayerHandValue()  
    if (handValue(playerHand) > 21) {
        checkWinLoss(handValue(playerHand), handValue(dealerHand))
    }
}

function stand() {
    while (handValue(dealerHand) < 17) {
        dealerHand.push (drawCard())
    }   updateDealerHandValue()
    checkWinLoss(handValue(playerHand), handValue(dealerHand))
}

function drawCard() {
    return deck[Math.floor(Math.random() * deck.length)]
}

function handValue(hand) {
    let value = 0
    let aces = 0

    for (let i=0; i < hand.length; i++) {
        let card = hand[i]
        if (card === "A") {
            aces += 1
            value += 11
        } else if (["K", "Q", "J"].includes(card)) {
            value += 10
        } else {value += card}
    } while (value > 21 && aces > 0) {
        value -= 10
        aces -= 1
    }
    return value
}

function checkWinLoss(playerHandValue, dealerHandValue) {
    if (playerHandValue > 21) {
        loseBet()
        document.getElementById("messages").innerHTML = "You have lost"
    }else if (playerHandValue === 21) {
        winBet()
        document.getElementById("messages").innerHTML = "BLACKJACK!"
    }else if (dealerHandValue > 21) {
        winBet()
        document.getElementById('messages').innerHTML = "You have won!"
    }else if (playerHandValue < dealerHandValue) {
        loseBet()
        document.getElementById('messages').innerHTML = "You have lost!"
    }else if (playerHandValue > dealerHandValue) {
        winBet()
        document.getElementById("messages").innerHTML = "You have won!"
    }else if(playerHandValue === dealerHandValue) {
        tieBet()
        document.getElementById('messages').innerHTML = "You have ended in a tie!"
    }
}

function betFive() {
    placeBet(5)
    updateCurrentWager()
    updatePlayerChips()
}
function betTen() {
    placeBet(10)
    updateCurrentWager()
    updatePlayerChips()
}
function betTwenty() {
    placeBet(20)
    updateCurrentWager()
    updatePlayerChips()
}

function placeBet(amount) {
    if (amount > playerChips) {
        document.getElementById("messages").innerHTML = `You dont have enough money for that bet!`
    } else {
        currentWager += amount
        playerChips -= amount
        
    }
    updatePlayerChips()
    updateCurrentWager()
}
//create a win loss scenario to make betting outcomes function
function winBet() {
    playerChips += currentWager * 2
    currentWager = 0
    updatePlayerChips()
    updateCurrentWager()
    
}

function loseBet() {
    currentWager = 0
    updatePlayerChips()
    updateCurrentWager()
    
}

function tieBet() {
    playerChips += currentWager
    currentWager = 0
    updatePlayerChips()
    updateCurrentWager()
}

function updateDealerHandValue() {
    document.getElementById("dealerHandValue").innerHTML = handValue(dealerHand)
}

function updatePlayerHandValue() {
    document.getElementById("playerHandValue").innerHTML = handValue(playerHand)
}

function updatePlayerChips() {
    document.getElementById("playerChips").innerHTML = playerChips
}

function updateCurrentWager() {
    document.getElementById("currentWager").innerHTML = currentWager
}





