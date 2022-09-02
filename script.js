//Welcome screen with title image, background image and play button
//Once play button is clicked, Instructions page loads



//Title pop-in animation function
const title = document.getElementById('title-image');

// const titleAnimation = () => {
//     title.style.transitionDuration = '0.3s';
//     title.style.transform = `translate(-50%, -50%) scale(1.5)`;

//     setTimeout(() => {
//     title.style.transitionDuration = '0.3s';
//     title.style.transform = `translate(-50%, -50%) scale(1.5)`;
//     }, 200);
// }

//Start game when play button is clicked
const play = document.getElementById('play-btn');

const instructions = document.querySelectorAll('.instruction-screen')

//Window onload
window.onload = () => {
    // titleAnimation();
    document.getElementById('instructions').querySelectorAll('instruction-screen').style.visibility = 'hidden';
    document.querySelector('play-screen').style.visibility = 'hidden';
    document.getElementsByClassName('game-complete').style.visibility = 'hidden';
}

play.addEventListener('click', () => {
    play.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    instructions.style.visibility = 'visible';
  })

  