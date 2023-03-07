// Card variables
const suits = ["heart", "club", "diamond", "spade"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const card = {
    suit : "",
    number : ""
}

// Selecting a random card
card.suit = suits[Math.floor(Math.random()*suits.length)]
card.number = numbers[Math.floor(Math.random()*numbers.length)]
