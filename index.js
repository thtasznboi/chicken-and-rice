// Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let cards = [] // array - ordered list of items

// Create a variable, sum, and set it to the sum of the two cards
let sum = 0

// Create a variable, hasBlackJack, and set it to false if not exactly 21
let hasBlackJack = false

// Create a variable, isAlive, and set it to true if under 21
let isAlive = false

// Declare a variable, message, and assign its value to an empty string
let message = ""

// Store the message-el paragraph in a variable
let messageEl = document.getElementById("message-el")

// Store the sum-el paragraph in a variable
// Query Selector example:
// let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")

// Store the cards-el paragraph in a variable
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Hit me function

function newCard() {
    if (isAlive === true && hasBlackJack == false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



