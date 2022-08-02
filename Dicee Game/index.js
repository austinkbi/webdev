var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSrc1 = "images/dice" + randomNumber1 + ".png";
var imageSrc2 = "images/dice" + randomNumber2 + ".png";
var count = 0;
var intervalVar = setInterval(function(){
  document.querySelectorAll("img")[0].setAttribute("src",imageSrc1);
  document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);
}, 500)
setTimeout(function(){
    clearInterval(intervalVar);
    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
}, 3000);
