const nyak= document.getElementById("nyak");
const csuszka= document.getElementById("csuszka");
const eletkor=document.getElementById("eletkor");

csuszka.addEventListener('input', ()=>{
    eletkor.textContent=csuszka.value;
    nyak.textContent="";
    for (let i = 0; i < parseInt(eletkor.textContent); i++) {
        const img=document.createElement("img");
        img.src='nyak.png';
        img.className="szelesseg";
        nyak.append(img);
    }
});