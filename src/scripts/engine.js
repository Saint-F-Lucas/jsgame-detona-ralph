// Here we will see two veriables concepts 1° view for things that will apppear on the screen and 2° values for things that will run on the "back end".

// const defines a variable, here is a "object" apparently is similar to dictionaries in python
const state = {
  view: {
    squares: document.querySelectorAll('.square'),
    enemy: document.querySelector('.enemy'),
    timeLeft: document.querySelector('#time-left'),
    score: document.querySelector('#score')
  },
  values: {
    timerID: 1,
    gameVelocity: 1250,
    hitPosition: 0,
    result: 0
  }
}

// This adds a .enemy for a random item

function randomSquare() {
  state.view.squares.forEach(square => {
    //removes all .enemy in the "squares"
    square.classList.remove('enemy')
  })

  // let defines variables, Math.floor is to round the number, Math.random selects a random number
  let randomNumber = Math.floor(Math.random() * 9)

  // selects the .squere with randomNumber id
  let randomSquare = state.view.squares[randomNumber]
  // add's a class to the items classes
  randomSquare.classList.add('enemy')

  // stores the squere with the enemy
  state.values.hitPosition = randomSquare.id
}

function moveEnemy() {
  // This is making a timer that for every 750 miliseconds calls the function randomSquare
  state.values.timerID = setInterval(randomSquare, state.values.gameVelocity)
}

// Listner is a of concept for functions that "hear" inputs and "weight" for somethig to happend

function addListenerHitBox() {
  //using items selector from the constant made before to use the function forEach that goes though ( in this case ) every item with the class .square,
  state.view.squares.forEach(square => {
    // .addEventListener makes listen for clicks in the squere
    square.addEventListener('mousedown', () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
      }
    })
  })
}

// basic function to run as the page loads and start the pages code.

function init() {
  moveEnemy()
}

init()
