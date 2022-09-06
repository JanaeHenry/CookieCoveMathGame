//////////////////////////////////   New Code    //////////////////////////////////////////////////

//Play button is clicked to start game
//Addition problem is displayed
//player answers. if answer is correct, go to next problem
//if answer is incorrect, change heart to grey and go to next problem
//if 3 answers are incorrect, display "try again" message 
//or if 7 answers answered correctly, display "you win" message with "restart" button/option
//add 1 minute timer if other functionality goes well


//will need eventlistener for play button. when clicked, run startGame function
//startGame is the display of the math problem
//math problems are placed in an array or object ie., 
//the info entered in the input field is compared to the answer

// const mathEquation = ( a, b) => {

// }

//setupQuestion should be called after every time player submit answers. Do until healt is 0 or correct is 7!!!!!!!!!!

let displayMath = document.getElementById('equation');
let gameInput = document.getElementById('game-input');
const submitBtn = document.getElementById('submit-btn');
const startButton = document.getElementById('start-btn');
let mathEquation;

class Player { 
  constructor(health = 3, correct = 0) {
    this.health = health,
    this.correct = correct
    
  }
  

    
}

const Player1 = new Player('Player 1');

const setupQuestion = () => {
  let a = Math.floor(Math.random()* 11);
  let b = Math.floor(Math.random()* 11);
  mathEquation = a + b;
 
  displayMath.innerText = `${a} + ${b} =`;

}

const submitAnswer = () => {
          
  // gameInput.value = '';
  let playerInput = parseInt(gameInput.value);
  
  if((playerInput !== mathEquation) && (Player1.health === 1)){
    Player1.health -= 1;
    redHeart1.style.visibility = 'hidden';
    greyHeart1.style.visibility = 'visible';
    endGame()
    console.log('health = 1')
  } else if ((playerInput !== mathEquation) && (Player1.health === 2)){
    Player1.health -= 1;
    redHeart2.style.visibility = 'hidden';
    greyHeart2.style.visibility = 'visible';
    alert('wrong answer')
    runGame();
    console.log('health = 2')
  } else if ((playerInput !== mathEquation) && (Player1.health === 3)){
    Player1.health -= 1;
    redHeart3.style.visibility = 'hidden';
    greyHeart3.style.visibility = 'visible';
    alert('wrong answer')
    runGame();
    console.log('health = 3')
  } else if ((playerInput === mathEquation) && (Player1.correct < 7)){
    Player1.correct++;
    runGame();
    console.log('health = 4')
  } else if ((playerInput === mathEquation) && (Player1.correct === 7)){
    winGame();
    console.log('health = 5')

  } else if (Player1.health === 0) {
    endGame();
  }
 setupQuestion();
 gameInput.value = '';

  }

console.log(Player1.health)


submitBtn.addEventListener('click', () => {
  submitAnswer();
  
 })

  













const redHearts = document.getElementsByClassName('redhearts');

const greyHearts = document.getElementsByClassName('greyhearts');

const redHeart1 = document.getElementById('redheart1');
const redHeart2 = document.getElementById('redheart2');
const redHeart3 = document.getElementById('redheart3');
const greyHeart1 = document.getElementById('greyheart1');
const greyHeart2 = document.getElementById('greyheart2');
const greyHeart3 = document.getElementById('greyheart3');


window.onload = () => {
  document.getElementById('game-board').style.visibility = 'visible';
  startButton.style.visibility = 'visible';
  displayMath.style.visibility = 'hidden';
  gameInput.style.visibility = 'hidden';
  submitBtn.style.visibility = 'hidden';

}


function startGame() {
  // preventDefault();
  setupQuestion();
  displayMath.style.visibility = 'visible';
  gameInput.style.visibility = 'visible';
  submitBtn.style.visibility = 'visible';
  startButton.style.visibility = 'hidden';

}

function runGame() {
  // preventDefault();

}

function endGame() {
  // preventDefault();
  let lose = document.getElementById('lose');
  lose.style.display = 'block';
  restart.style.display = 'block';
  alert('Try again');

}
 
function winGame() {
  // preventDefault();
  let win = document.getElementById('win');
  win.style.display = 'block';
  restart.style.display = 'block';
  alert('Hooray');
}

startButton.addEventListener('click', startGame);




































//////////////////////////////////    Old Code    //////////////////////////////////////////////////

//Title pop-in animation function
// const title = document.getElementById('title-image');

// const titleAnimation = () => {
//     title.style.transitionDuration = '0.3s';
//     title.style.transform = `translate(-50%, -50%) scale(1.5)`;

//     setTimeout(() => {
//     title.style.transitionDuration = '0.3s';
//     title.style.transform = `translate(-50%, -50%) scale(1.5)`;
//     }, 200);
// }

//Start game when play button is clicked
// const play = document.getElementById('play-btn');

// const instructions = document.querySelectorAll('.instruction-screen')

//Window onload
// window.onload = () => {
//     // titleAnimation();
//     document.getElementById('instructions').querySelectorAll('instruction-screen').style.visibility = 'hidden';
//     document.querySelector('play-screen').style.visibility = 'hidden';
//     document.getElementsByClassName('game-complete').style.visibility = 'hidden';
// }

// play.addEventListener('click', () => {
//     play.style.visibility = 'hidden';
//     title.style.visibility = 'hidden';
//     instructions.style.visibility = 'visible';
//   })

  //Addition game
//   let submit = document.getElementsByTagName('submit');
//   let number1 = Math.floor(Math.random(/[0-9]/));
//   let number2 = Math.floor(Math.random(/[0-9]/));
//   let total = number1 + number2;
//   let response = parseInt(submit);

//   const nextQuestion = () => {

//   }

//   game.addEventListener('click', nextQuestion())
  