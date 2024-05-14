let deck = []
let playerHand = []
let dealerHand = []
let message = ""
let playerChips = 100
let currentWager = 0
let hidden = "cards/red-back-card.jpeg"
let cardImages = {
    "A": "cards/A-C.jpeg",
    2: "cards/2-C.jpeg",
    3: "cards/3-C.jpeg",
    4: "cards/4-C.jpeg",
    5: "cards/5-C.jpeg",
    6: "cards/6-C.jpeg",
    7: "cards/7-C.jpeg",
    8: "cards/8-C.jpeg",
    9: "cards/9-C.jpeg",
    10: "cards/10-C.jpeg",
    "J": "cards/J-C.jpeg",
    "Q": "cards/Q-C.jpeg",
    "K": "cards/K-C.jpeg"

}

function newGame() {
        document.getElementById("messages").innerHTML = ""
        document.getElementById("playerHand").innerHTML = ""
        document.getElementById("dealerHand").innerHTML = ""
        deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
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
    let card = deck[Math.floor(Math.random() * deck.length)]
    let img = document.createElement("img")
        img.src = cardImages[card]
        img.alt = card

    document.getElementById("playerHand").appendChild(img)

    // document.getElementById("dealerHand").appendChild(img)
    
    return card    
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
function betTwentyFive() {
    placeBet(25)
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





