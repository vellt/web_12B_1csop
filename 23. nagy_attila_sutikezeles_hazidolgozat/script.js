const idezet = document.getElementById("idezet");
const szerzo = document.getElementById("szerzo");
const temaGomb = document.getElementById("temaGomb");
const nyelvGomb = document.getElementById("nyelvGomb");
const masikatGomb = document.getElementById("masikatGomb")
const body = document.getElementById("body")
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

let randomSzam = 0;
let nyelv = "magyar";
let tema = "vilagos";

function sotet(){
    temaGomb.setAttribute("fill","white");
    nyelvGomb.setAttribute("fill","white");
    body.className="vh-100 d-flex flex-column justify-content-center align-items-center text-light bg-dark";
    masikatGomb.className="btn border-3 text-light border-light fw-bold";
    tema="sotet";
}

function  vilagos(){
    temaGomb.setAttribute("fill","black");
        nyelvGomb.setAttribute("fill","black");
        body.className="vh-100 d-flex flex-column justify-content-center align-items-center text-dark bg-light";
        masikatGomb.className="btn border-3 text-dark border-dark fw-bold";
        tema="vilagos";
}

temaGomb.addEventListener("click",()=>{
    if(temaGomb.getAttribute("fill")==="black"){
        sotet();
        setCookie("tema",tema,7);
    }
    else{
        vilagos();
        setCookie("tema",tema,7);
    }
});

function angolNyelv(){
    nyelv="angol"
    masikatGomb.textContent="Another"
    idezet.textContent=idezetekAngol[randomSzam];
}

function magyarNyelv(){
    nyelv="magyar"
    masikatGomb.textContent="Másikat"
    idezet.textContent=idezetekMagyar[randomSzam];
}

nyelvGomb.addEventListener("click",()=>{
    if(nyelv==="magyar"){
       angolNyelv();
       setCookie("nyelv",nyelv,7);
    }
    else{
        magyarNyelv();
        setCookie("nyelv",nyelv,7);
    }
});

function masikat (){
    randomSzam=Math.floor(Math.random()*idezetekAngol.length);
    if(nyelv==="magyar"){
        idezet.textContent=idezetekMagyar[randomSzam];
    }
    else{
        idezet.textContent=idezetekAngol[randomSzam];
    }
    szerzo.textContent=idezetekSzerzo[randomSzam];
};

masikatGomb.addEventListener("click",()=>{
    masikat();
});

masikat();

function getCookie(key) {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}

function setCookie(name, value, days) {
    const date = new Date(); 
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

window.addEventListener('DOMContentLoaded', ()=>{
    const temaCookie=getCookie("tema");
    if(temaCookie){
        switch(temaCookie){
            case "sotet":
                sotet();
                break;
            case "vilagos":
                vilagos();
                break;
        }
    }
    const nyelvCookie=getCookie("nyelv");
    if(nyelvCookie){
        switch(nyelvCookie){
            case "magyar":
                magyarNyelv();
                break;
            case "angol":
                angolNyelv();
                break;
        }
    }
});