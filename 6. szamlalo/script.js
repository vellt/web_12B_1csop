const csokkent=document.getElementById("decrement")
const novel=document.getElementById("increment")
const szam=document.getElementById("number")


csokkent.addEventListener("click",function(){
    szam.textContent= parseInt(szam.textContent)-1;
})

novel.addEventListener('click', function(){
    szam.textContent= parseInt(szam.textContent)+1;
})