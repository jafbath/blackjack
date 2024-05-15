let deck = []
let playerHand = []
let dealerHand = []
let messages = ""
let playerChips = 100
let currentWager = 0
let hidden = "cards/red-back-card.jpeg"
let suits = ["C", "D", "H", "S"]
let cardImages = {
    "A": suits.map(suit => `cards/A-${suit}.jpeg`),
    2: suits.map(suit => `cards/2-${suit}.jpeg`),
    3: suits.map(suit => `cards/3-${suit}.jpeg`),
    4: suits.map(suit => `cards/4-${suit}.jpeg`),
    5: suits.map(suit => `cards/5-${suit}.jpeg`),
    6: suits.map(suit => `cards/6-${suit}.jpeg`),
    7: suits.map(suit => `cards/7-${suit}.jpeg`),
    8: suits.map(suit => `cards/8-${suit}.jpeg`),
    9: suits.map(suit => `cards/9-${suit}.jpeg`),
    10: suits.map(suit => `cards/10-${suit}.jpeg`),
    "J": suits.map(suit => `cards/J-${suit}.jpeg`),
    "Q": suits.map(suit => `cards/Q-${suit}.jpeg`),
    "K": suits.map(suit => `cards/K-${suit}.jpeg`),

}

function newGame() {
        document.getElementById("messages").innerHTML = ""
        document.getElementById("playerHand").innerHTML = ""
        document.getElementById("dealerHand").innerHTML = ""
        updatePlayerChips()
        updateCurrentWager()
        deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        playerHand = [drawCard("playerHand"), drawCard("playerHand")]
        dealerHand = [drawCard("dealerHand")]
        checkBlackjack()
        updateDealerHandValue()
        updatePlayerHandValue()
        winBet()
        loseBet()
        tieBet()
        
}



function hit() {
    playerHand.push (drawCard("playerHand"))
    updatePlayerHandValue()  
    if (handValue(playerHand) > 21) {
        checkWinLoss(handValue(playerHand), handValue(dealerHand))
    }
}

function stand() {
    while (handValue(dealerHand) < 17) {
        dealerHand.push (drawCard("dealerHand"))
    }   updateDealerHandValue()
    checkWinLoss(handValue(playerHand), handValue(dealerHand))
}

function drawCard(hand) {
    let card = deck[Math.floor(Math.random() * deck.length)]
    let img = document.createElement("img")
        img.src = cardImages[card]
        [Math.floor(Math.random() * cardImages[card].length)]
        img.alt = card

        if (hand == "playerHand") {
            document.getElementById("playerHand").appendChild(img)
        }else if (hand == "dealerHand") {
            document.getElementById("dealerHand").appendChild(img)
        }
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

function checkBlackjack(playerHandValue) {
    if (playerHandValue === 21) {
        winBet()
        document.getElementById("messages").innerHTML = "BLACKJACK"
    }
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
    }else if (playerHandValue === dealerHandValue) {
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





