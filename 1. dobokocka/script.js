const screen = document.getElementById("screen");
const dice = document.getElementById("dice");

screen.addEventListener("click", function (){
    const randomNumber=Math.floor(Math.random()*6) +1;
    dice.textContent=randomNumber;
});
