const csuszkaErtek = document.getElementById('csuszkaErtek');
const csuszka =  document.getElementById('csuszka');
const gomb = document.getElementById('gomb');

const gondoltSzam=Math.floor(Math.random()*10)+1;

csuszka.addEventListener('input', function(){
    csuszkaErtek.textContent=csuszka.value;
});

gomb.addEventListener('click', function(){
    const tipp= parseInt(csuszkaErtek.textContent);
    if(tipp===gondoltSzam){
        alert("Ez az amire én gondoltam");
    }else if(tipp<gondoltSzam){
        alert("Nagyobbra gondoltam");
    }else{
        alert("kisebbre gondoltam");
    }
});