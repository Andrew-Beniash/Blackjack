function getRandomCard(){
    let cardNumber = Math.floor(Math.random() * 10) + 3;
    if (cardNumber === 1) {return 11}
    else if (cardNumber >= 11) {return 10}
    else {return cardNumber}  
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = cards.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i=0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " ";
    };
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack!";
      hasBlackJack = true;
    } else if (sum > 21) {
      message = "You're out of the game!";
      isAlive = false;
    }
    messageEl.textContent = message;
    
}

function newCard(){
  if (isAlive === true && hasBlackJack === false){
  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);
  renderGame();
  } 
}

