let player = {
    name: "You",
    chips: 100
}

let cards = []
let sum = 0
let Blackjack = false
let open_f = false
let message = ""
let messageE = document.getElementById("message")
let sumE = document.getElementById("sum")
let cardsE = document.getElementById("cards")
let playerE = document.getElementById("player")

playerE.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    open_f = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsE.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsE.textContent += cards[i] + " "
    }
    
    sumE.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        Blackjack = true
    } else {
        message = "You're out of the game!"
        open_f = false
    }
    messageE.textContent = message
}


function newCard() {
    if (open_f === true && Blackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}