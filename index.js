let player = {
    name: "Tanush",
    chips: 200
}

let cards = []
let dcards = []
let sum = 0
let dsum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let dcardsEl = document.getElementById("dcards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

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
    isAlive = true
    hasBlackJack=false
    let DfirstCard = getRandomCard()
    let DsecondCard = getRandomCard()
    dcards = [DfirstCard, DsecondCard]
    dsum = DfirstCard + DsecondCard
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(isAlive)
    console.log(hasBlackJack)
    renderGame()
}

function renderGame() {
    dcardsEl.textContent = "Dealer's Cards: "
    
    dcardsEl.textContent += dcards[0] + " "

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
         message = "Do you want to draw a new card?"
    }
    //else if (sum === 21) {
     //   message = "You've got Blackjack!"
       // hasBlackJack = true
    //} else {
      //  message = "You're out of the game!"
       // isAlive = false
    //}
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        if(sum>21){
            message = "You're out of the game!"
            isAlive = false 
            playerEl.textContent = player.name + ": $" + (player.chips -= 20)
        }
        renderGame()        
    }
    messageEl.textContent = message 
}

function stand(){
    dcardsEl.textContent += dcards[1] + " "
    console.log(dsum)
    if (dsum < sum){
        message = "You Won!!"
        hasBlackJack = true
        isAlive = false
        playerEl.textContent = player.name + ": $" + (player.chips += 20)
    } 
    else if (dsum === sum){
        message = "Push!"
        hasBlackJack = true
        isAlive = false
    }
    else if(dsum > sum){
        message = "You Lost!!"
        hasBlackJack = true
        isAlive = false
        playerEl.textContent = player.name + ": $" + (player.chips -= 20)

    }
    messageEl.textContent = message
    console.log(isAlive)
    console.log(hasBlackJack)
}   

