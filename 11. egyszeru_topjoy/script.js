const messageBox= document.getElementById("message-box");
const gomb = document.getElementById("gomb");

const uzik=[
    'A BELSŐ SZÁMÍT',
    'A CSILLAGOK FIGYELNEK',
    'A DOLGOK JÓL HALADNAK',
    'VIDÁMSÁG! :)',
    'VIDD VÉGIG AZ ÖTLETEIDET!',
    'VIGYÉL EGY JÓ HÍRT!',
];

gomb.addEventListener('click',function(){
    const randomSzam=Math.floor(Math.random()*uzik.length);
    const randomUzi=uzik[randomSzam];
    messageBox.textContent=randomUzi;
});

