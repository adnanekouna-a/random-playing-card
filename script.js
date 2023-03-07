// Cards information
const heart = {
    name: "heart",
    size: 130,
    color: "var(--card-red)"
}
const diamond = {
    name: "diamond",
    size: 120,
    color: "var(--card-red)"
}
const club = {
    name : "club",
    size: 110,
    color: "var(--card-black)"
}
const spade = {
    name: "spade",
    size: 100,
    color: "var(--card-red)"
}

// Card variables
const suits = [heart, club, diamond, spade]
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const card = {
    suit : "",
    number : ""
}

// DOM variables
const cardSuitIcon = document.getElementById("card-suit");
const cardNumberTop = document.getElementById("card-number-top");
const cardNumberBottom = document.getElementById("card-number-bottom");

// Selecting a random card
card.suit = suits[Math.floor(Math.random()*suits.length)]
card.number = numbers[Math.floor(Math.random()*numbers.length)]

// DOM manipulation
cardSuitIcon.setAttribute("src", `img/${card.suit.name}.svg`)