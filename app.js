let deck = []
let playerHand = []
let dealerHand = []
var hidden

function newGame() {
    deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]
    playerHand = [drawCard(), drawCard()]
    dealerHand = [drawCard(hidden), drawCard()]
    updateDealerHandValue()
    updatePlayerHandValue()
    console.log("Player hand ", playerHand, handValue(playerHand))
    console.log("Dealer hand ", dealerHand, handValue(dealerHand))
}


function hit() {
    playerHand.push (drawCard())
    updatePlayerHandValue()
    console.log("Player hand  ", playerHand, handValue(playerHand))
}

function stand() {
    while (handValue(dealerHand) < 17) {
        dealerHand.push (drawCard())
    }   updateDealerHandValue()
    console.log("Dealer hand  ", dealerHand, handValue(dealerHand))
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

function updateDealerHandValue() {
    document.getElementById("dealerHandValue").innerHTML = handValue(dealerHand)
}

function updatePlayerHandValue() {
    document.getElementById("playerHandValue").innerHTML = handValue(playerHand)
}

