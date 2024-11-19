const kep = document.getElementById('kep');
const hatter = document.getElementById('hatter');
const szoveg = document.getElementById('szoveg');

let zarva = true;
const uzik = [
    "A BELSŐ SZÁMÍT",
    "A CSILLAGOK FIGYELNEK",
    "A DOLGOK JÓL HALADNAK",
    "VIDÁMSÁG! :)",
    "VIDD VÉGIG AZ ÖTLETEIDET!", 
    "VIGYÉL EGY JÓ HÍRT!"
];

// Cache létrehozása oldalbetöltéskor
const images = []; // Ebbe tároljuk a betöltött képeket

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i <= 10; i++) {
        const img = new Image();
        img.src = `images/bottlecap_${i}.png`; // Kép forrása
        images.push(img); // Cache-eljük a képet
    }
});

hatter.addEventListener('click', async function() {
    if (zarva === true) {
        for (let index = 0; index <= 10; index++) {
           kep.src = images[index].src; // Már előre cache-elt képet használunk
           await new Promise(pr => setInterval(pr, 13)); // Késleltetési idő
        }
        const randomIndex = Math.floor(Math.random() * uzik.length); // [0,5]
        szoveg.textContent = uzik[randomIndex];
        zarva = false;
    } else {
        szoveg.textContent = "";
        for (let index = 10; index >= 0; index--) {
            kep.src = images[index].src; // Már előre cache-elt képet használunk
            await new Promise(pr => setTimeout(pr, 13)); // Késleltetési idő
        }
        zarva = true;
    }   
});
