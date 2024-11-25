const kor =document.getElementById("kor");
const kutyaev =document.getElementById("kutyaev");
const gomb =document.getElementById("gomb");

gomb.addEventListener('click', function(){
    const eves=parseInt(kor.value);
    kutyaev.textContent=eves*7;
})