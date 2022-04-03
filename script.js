let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const displayScore =function (score) {
    document.querySelector('.score').textContent = score;
} 
const displayhighcore=function(highscore) {
    document.querySelector('.highscore').textContent = highscore;
} 
const displaynumber = function(nbr){
    document.querySelector('.nbr').textContent = nbr;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
     if(!guess){
         displayMessage('No Number !!');
     } 
      else if(guess >20){
         displayMessage("OutOfBound");
         score--;
         displayScore(score);
     } else if(guess<0){
         displayMessage("OutofBound"); 
         score--; 
         displayScore(score);
     } else if(guess>secretNumber && guess<21){
         displayMessage("Too High"); 
         score--;
         displayScore(score);
     } else if(guess<secretNumber && guess <21){
         displayMessage("Too Low"); 
         score--;  
         displayScore(score);
     } else if(guess==secretNumber){
         displayMessage("Bravo !! You got it");
         score--;
         displayScore(score);
         displayhighcore(score);
         displaynumber(guess);
         document.querySelector('.number').style.backgroundColor = '#60b347';
         document.body.style.backgroundImage = "url('./asset/pic2.jpg')";
     } else {
         displaynumber();
     } 
    
} );  

document.querySelector('.reset').addEventListener('click',function(){ 
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.nbr').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});