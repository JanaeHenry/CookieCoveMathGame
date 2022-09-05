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




class Player { 
  constructor(health = 3) {
    this.health = health;
    
  }
  submitAnswer() {
    submitBtn.addEventListener('click', () => {
      let gameInput = document.getElementById('game-input').value;
      gameInput.value = '';
      let a = Math.floor(Math.random()* 11);
      let b = Math.floor(Math.random()* 11);
      let displayMath = document.getElementById('equation');
      let mathEquation = a + b;
      displayMath.value = `${a} '+' ${b} '='`;

      if((gameInput !== mathEquation) && (this.health === 1)){
        this.health -= 1;
        redHeart1.style.visibility = 'hidden';
        greyHeart1.style.visibility = 'visible';
        endGame()
      } else if ((gameInput !== mathEquation) && (this.health === 2)){
        this.health -= 1;
        redHeart2.style.visibility = 'hidden';
        greyHeart2.style.visibility = 'visible';
        runGame();
      } else if ((gameInput !== mathEquation) && (this.health === 3)){
        this.health -= 1;
        redHeart3.style.visibility = 'hidden';
        greyHeart3.style.visibility = 'visible';
        runGame();
      }
      // (gameInput === mathEquation) && this.health > 0
      }
    })
  }
}







let startButton = document.getElementById('start-btn');





let submitBtn = document.getElementById('submit-btn');

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
  event.preventDefault();
  displayMath.style.visibility = 'visible';
  gameInput.style.visibility = 'visible';
  submitBtn.style.visibility = 'visible';

}

function runGame() {
  event.preventDefault();

}

function endGame() {
  event.preventDefault();
  let lose = document.getElementById('lose');
  lose.style.display = 'block';
  restart.style.display = 'block';

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
  