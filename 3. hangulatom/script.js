const kep= document.getElementById("kep");
const csuszka = document.getElementById("csuszka");

csuszka.addEventListener("input", function (){
    const ertek=csuszka.value;
    kep.src=`${ertek}.png`;
});