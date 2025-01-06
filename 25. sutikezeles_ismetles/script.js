// globális változók
const szam= document.getElementById("szam");
const plusz= document.getElementById("plusz");
const minusz= document.getElementById("minusz");

// növeljük a számot, és az új értéket elmemtjük 3 napra a felh számítógépén
plusz.addEventListener('click', ()=>{
    szam.textContent= parseInt(szam.textContent)+1;
    setCookie("szam", szam.textContent, 3);
});

// csökkentjük a számot, és az új értéket elmemtjük 3 napra a felh számítógépén
minusz.addEventListener('click', ()=>{
    szam.textContent= parseInt(szam.textContent)-1;
    setCookie("szam", szam.textContent, 3);
});

// kimásoltuk a jegyzetből, ő ha nem találja a keresett Cookie-t akkor null-t ad vissza
function getCookie(key) {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}

// kimásoltuk a jegyzetből
function setCookie(name, value, days) {
    const date = new Date(); 
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

// - ablakbetöltéskor megnézzük, hogy létezik-e a cookie
// - ha létezik akkor a képernyőn a szám textContentje az lesz ami Cookieban volt
// - ha a getCookieval lekérjük a szam-ot, és nullt ad vissza, azaz még nem mentettünk le
//   cookie-t a felhasználó böngészőjében, akkor 6-os számot ad defaultként a szam textContentjének
// - A ?? azt vizsgálja, ha a getCookie null-t adna vissza akkor legyen az érték 6, 
//   amit betöltsön a szam textContentjébe
document.addEventListener('DOMContentLoaded',()=>{
    szam.textContent=getCookie('szam')??6;
    // hosszabban ez így néz ki:
    /*
        const szamCookie=getCookie('szam');
        if(szamCookie!==null){
            szam.textContent=szamCookie;
        } 
        else {
            szam.textContent=6;
        }
    */
})