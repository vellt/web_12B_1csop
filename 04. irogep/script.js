let bevitel=document.getElementById("bevitel");
let szamlalo=document.getElementById("szamlalo");

bevitel.addEventListener("input",function(){
    let hossz=bevitel.value.length;
    szamlalo.innerText=hossz;
});