const pirosErtek= document.getElementById("pirosErtek");
const pirosCsuszka=document.getElementById("pirosCsuszka");

const zoldErtek= document.getElementById("zoldErtek");
const zoldCsuszka=document.getElementById("zoldCsuszka");

const kekErtek= document.getElementById("kekErtek");
const kekCsuszka=document.getElementById("kekCsuszka");

const kepernyo=document.getElementById("kepernyo");

pirosCsuszka.addEventListener('input',function(){
    pirosErtek.textContent=pirosCsuszka.value;
    szinezdAt();
});

zoldCsuszka.addEventListener('input',function(){
    zoldErtek.textContent=zoldCsuszka.value;
    szinezdAt();
});

kekCsuszka.addEventListener('input',function(){
    kekErtek.textContent=kekCsuszka.value;
    szinezdAt();
});

function szinezdAt(){
    const r=pirosCsuszka.value;
    const g=zoldCsuszka.value;
    const b=kekCsuszka.value;
    kepernyo.style.backgroundColor=`rgb(${r},${g},${b})`;
}