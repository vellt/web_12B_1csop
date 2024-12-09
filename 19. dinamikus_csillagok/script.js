const csillagok=document.getElementById("csillagok")
const novel=document.getElementById("novel")
const csokkent=document.getElementById("csokkent")

novel.addEventListener('click',()=>{
    const div= document.createElement("div");
    div.className="text-warning fs-4";
    div.textContent="★";
    csillagok.append(div);
});

csokkent.addEventListener('click', ()=>{
    if(csillagok.children){
        csillagok.removeChild(csillagok.lastChild);
    }
})