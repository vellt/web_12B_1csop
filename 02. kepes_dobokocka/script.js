let screen = document.getElementById("screen");
let dice=document.getElementById("dice");

screen.addEventListener("click",function(){
    const random = Math.floor(Math.random()*6)+1; //[1,6]
    dice.src=`dice${random}.png`;
});
