let deck = []
let playerHand = []
let dealerHand = []

function newGame() {
    deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]
    playerHand = [drawCard(), drawCard()]
    dealerHand = [drawCard(), drawCard()]
}


function hit() {
    playerHand.push (drawCard())
}

function stand() {
    while (handValue (dealerHand < 17)) {
        dealerHand.push (drawCard())
    }
}

function drawCard() {
    return deck[Math.floor(Math.random() * deck.length)]
}

