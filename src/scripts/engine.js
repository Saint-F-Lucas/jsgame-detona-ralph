// Here we will see two veriables concepts 1° view for things that will apppear on the screen and 2° values for things that will run on the "back end".

// const defines a variable, here is a "object" apparently is similar to dictionaries in python

const state = {
  view: {
    squares: document.querySelectorAll('.square'),
    enemy: document.querySelector('.enemy'),
    timeLeft: document.querySelector('#time-left'),
    score: document.querySelector('#score'),
    lives: document.querySelector('.lives')
  },
  values: {
<<<<<<< HEAD
    timerID: null,
    gameVelocity: 1250,
=======
    timerID: 1,
>>>>>>> 3a4a58078c04f97f7903d6f7d4e3652ffd0dff7d
    hitPosition: 0,
    result: 0,
    currentTime: 60,
    livesCount: 3,
  },
  actions: {
    countDownTimerID: setInterval(countDown, 1000),
    gameVelocity: setInterval(randomSquare, 1000),

  },
  colorTransition: [[{backgroundColor: "#1aeaa5"},{backgroundColor: "#049162"}, {backgroundColor: "#1aeaa5"}],[{backgroundColor: "#1aeaa5"},{backgroundColor: "#f9311f"}, {backgroundColor: "#1aeaa5"}] ],
}

function countDown () {
  state.values.currentTime--

  if (state.values.currentTime <= 0)  {
    alert("Game Over! Seu resultado foi" + state.values.result)
    state.values.currentTime = 60
    state.values.livesCount = 3

  }
  state.view.lives.textContent = state.values.livesCount
  state.view.timeLeft.textContent = state.values.currentTime
}

function livesLoss () {
  state.values.livesCount--
  if (state.values.livesCount <= 0) {
    alert("Game Over! Você perdeu todas as suas vidas!!!")
    state.values.livesCount = 3
    state.values.currentTime = 60

  }
  state.view.timeLeft.textContent = state.values.currentTime
  state.view.lives.textContent = state.values.livesCount

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
}

// Listner is a of concept for functions that "hear" inputs and "weight" for somethig to happend

function addListenerHitBox() {
  //using items selector from the constant made before to use the function forEach that goes though ( in this case ) every item with the class .square,
  state.view.squares.forEach(square => {
    // .addEventListener makes listen for clicks in the squere

    square.addEventListener('mousedown', () => {
      console.log('it works')
      if (square.id === state.values.hitPosition) {
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
        square.classList.remove('enemy')
        square.animate (state.colorTransition[0], 500)
        randomSquare()

            }
      else {
        square.animate (state.colorTransition[1], 500)

        livesLoss()

      }
    })
  })
}

// basic function to run as the page loads and start the pages code.

function init() {
<<<<<<< HEAD
  moveEnemy()
=======
>>>>>>> 3a4a58078c04f97f7903d6f7d4e3652ffd0dff7d
  addListenerHitBox()
}

init()
