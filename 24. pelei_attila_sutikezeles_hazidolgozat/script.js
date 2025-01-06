const idezetekMagyar=[
    '"Az egyetlen mód arra, hogy nagyszerű munkát végezz, ha szereted, amit csinálsz."',
    '"A siker nem a boldogság kulcsa. A boldogság a siker kulcsa."',
    '"Élj úgy, mintha holnap meghalnál. Tanulj úgy, mintha örökké élnél."',
    '"Minél többet tanulok, annál inkább rájövök, hogy mennyi mindent nem tudok."',
    '"Mindig lehetetlennek tűnik, amíg meg nem valósítod."'
];
const idezetekAngol=[
    '"The only way to do great work is to love what you do."', 
    '"Success is not the key to happiness. Happiness is the key to success."',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    '"The more I learn, the more I realize how much I don’t know."',
    '"It always seems impossible until it\'s done."'
];
const idezetekSzerzo=[
    '— Steve Jobs',
    '— Albert Schweitzer',
    '— Mahatma Gandhi',
    '— Albert Einstein',
    '— Nelson Mandela'
];


function setCookie(name, value, days) {
    const date = new Date(); 
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(key) {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}


let tema = "feher"
let nyelv = "magyar"
let randomIndex = 0
randomIndex=Math.floor(Math.random()*idezetekAngol.length);

const idezet = document.getElementById("idezet")
const gomb = document.getElementById("gomb")
const szerzo = document.getElementById("szerzo")
const temaGomb = document.getElementById("temaGomb")
const nyelvGomb = document.getElementById("nyelvGomb")
const test = document.getElementById("test")

temaGomb.addEventListener("click",()=>{
    if (tema === "feher") {
        temaGomb.style.fill = "white"
        nyelvGomb.style.fill = "white"
        test.className = "vh-100 d-flex flex-column bg-dark"
        gomb.className = "btn border-light border-2 text-light"
        idezet.className = "h1 fw-bold text-light"
        szerzo.className = "d-flex fw-bold fs-5 text-light"
        tema = "fekete"
        setCookie("tema",tema,3);
    }
    else {
        temaGomb.style.fill = "black"
        nyelvGomb.style.fill = "black"
        test.className = "vh-100 d-flex flex-column"
        gomb.className = "btn border-dark border-2 "
        idezet.className = "h1 fw-bold"
        szerzo.className = "d-flex fw-bold fs-5"
        tema = "feher"
        setCookie("tema",tema,3);
    }
})

nyelvGomb.addEventListener("click",()=>{
    if (nyelv === "magyar") {
        gomb.textContent = "another"
        nyelv = "angol"
        idezet.textContent = idezetekAngol[randomIndex]
        setCookie("nyelv",nyelv,3);
    }
    else {
        gomb.textContent = "másikat"
        nyelv = "magyar"
        idezet.textContent = idezetekMagyar[randomIndex]
        setCookie("nyelv",nyelv,3);
    }
})

gomb.addEventListener("click",()=>{
    if (nyelv === "magyar") {
        randomIndex=Math.floor(Math.random()*idezetekAngol.length);
        idezet.textContent = idezetekMagyar[randomIndex]
        szerzo.textContent = idezetekSzerzo[randomIndex]
    }
    else {
        randomIndex=Math.floor(Math.random()*idezetekAngol.length);
        idezet.textContent = idezetekAngol[randomIndex]
        szerzo.textContent = idezetekSzerzo[randomIndex]
    }
})


window.addEventListener("DOMContentLoaded",()=>{
    const cookie = getCookie("tema")
    if(cookie){
        switch(cookie){
            case "fekete":
                temaGomb.style.fill = "white";
                nyelvGomb.style.fill = "white";
                test.className = "vh-100 d-flex flex-column bg-dark";
                gomb.className = "btn border-white border-2 text-light";
                idezet.className = "h1 fw-bold text-light";
                szerzo.className = "d-flex fw-bold fs-5 text-light";
                tema = "fekete";
                break;
            case "feher":
                temaGomb.style.fill = "black"
                nyelvGomb.style.fill = "black"
                test.className = "vh-100 d-flex flex-column"
                gomb.className = "btn border-dark border-2 "
                idezet.className = "h1 fw-bold"
                szerzo.className = "d-flex fw-bold fs-5"
                tema = "feher"
                break;
                

        }

    }

    const cookie2 = getCookie("nyelv")
    if (cookie2) {
        switch(cookie2){
            case "magyar":
                idezet.textContent = idezetekMagyar[randomIndex]
                szerzo.textContent = idezetekSzerzo[randomIndex]
                nyelv = "magyar"
                break;
            case "angol":
                idezet.textContent = idezetekAngol[randomIndex]
                szerzo.textContent = idezetekSzerzo[randomIndex]
                nyelv = "angol"
                break;
                
        }
    }
})



// minden funkció  jól működik

// angolra való váltáskor a másikat szöveg lehetne another mint a mintán van

