const dolgok = document.getElementById("dolgok")
const szoveg = document.getElementById("szoveg")


szoveg.addEventListener("keypress",function(event){
    if (event.key === 'Enter') {
        const div= document.createElement("div"); /* bővíted classakkal, hogy a két benne lévő elem egymás mellett legyen Between-el */
        div.className = "d-flex shadow flex-row justify-content-between bg-white rounded me-5 ms-5 mt-4"
        const title=document.createElement("div"); /* bővíted classakkal, hogy úgy nézzen ki, mint a minta*/
        title.className = "d-flex text-black p-4 fs-5"
        title.textContent = szoveg.value
        const deleteButton = document.createElement("button"); /* bővíted kattintási esemény hozzárendeléssel, meg class formázással */
        deleteButton.textContent = "törlés"
        deleteButton.className = "btn btn-danger align-self-center h-50 me-3"
        deleteButton.addEventListener('click',function() {
        div.remove()
        })
        div.append(title, deleteButton);
        dolgok.prepend(div)
        szoveg.value = ""
    }
    
    
})

const zold=document.getElementById("zold");
const kek=document.getElementById("kek");
const sarga=document.getElementById("sarga");
const piros=document.getElementById("piros");

const hatter=document.getElementById("hatter");
let tema="piros";

zold.addEventListener('click', ()=>{
    hatter.className="d-flex vh-100 flex-column bg-success justify-content-center";
    tema="zold";
});

kek.addEventListener('click',()=>{
    hatter.className="d-flex vh-100 flex-column bg-primary justify-content-center";
    tema="kek";
})

sarga.addEventListener('click',()=>{
    hatter.className="d-flex vh-100 flex-column bg-warning justify-content-center";
    tema="sarga";
});

piros.addEventListener('click',()=>{
    hatter.className="d-flex vh-100 flex-column bg-danger justify-content-center";
    tema="piros";
})

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


const gomb= document.getElementById("gomb");
gomb.addEventListener('click',()=>{
    setCookie("tema",tema,3);
});


window.addEventListener('DOMContentLoaded', ()=>{
    const cookie=getCookie("tema");
    if(cookie){
        switch(cookie){
            case "kek":
                hatter.className="d-flex vh-100 flex-column bg-primary justify-content-center";
                tema="kek";
                break;
            case "piros":
                hatter.className="d-flex vh-100 flex-column bg-danger justify-content-center";
                tema="piros";
                break;
            case "sarga":
                hatter.className="d-flex vh-100 flex-column bg-warning justify-content-center";
                tema="sarga";
                break;
            case "zold":
                hatter.className="d-flex vh-100 flex-column bg-success justify-content-center";
                tema="zold";
                break;
        }
    }
});
