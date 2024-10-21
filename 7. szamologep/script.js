const csokkent1=document.getElementById("decrement1")
const novel1=document.getElementById("increment1")
const szam1=document.getElementById("number1")

const csokkent2=document.getElementById("decrement2")
const novel2=document.getElementById("increment2")
const szam2=document.getElementById("number2")


csokkent1.addEventListener("click",function(){
    szam1.textContent= parseInt(szam1.textContent)-1;
})

novel1.addEventListener('click', function(){
    szam1.textContent= parseInt(szam1.textContent)+1;
})

csokkent2.addEventListener("click",function(){
    szam2.textContent= parseInt(szam2.textContent)-1;
})

novel2.addEventListener('click', function(){
    szam2.textContent= parseInt(szam2.textContent)+1;
})

osszeadas = document.getElementById("osszeadas")
kivonas = document.getElementById("kivonas")
szorzas = document.getElementById("szorzas")
osztas = document.getElementById("osztas")

eredmeny=document.getElementById("eredmeny")

osszeadas.addEventListener('click',function(){
    let osszeg=parseInt(szam1.textContent)+parseInt(szam2.textContent);
    eredmeny.textContent=osszeg;
});

kivonas.addEventListener('click',function(){
    let kulonbseg=parseInt(szam1.textContent)-parseInt(szam2.textContent);
    eredmeny.textContent=kulonbseg;
});

szorzas.addEventListener('click', function(){
    let szorzat=parseInt(szam1.textContent)*parseInt(szam2.textContent);
    eredmeny.textContent=szorzat;
});

osztas.addEventListener('click', function(){
    if(parseInt(szam2.textContent)===0){
        alert("0-val nem lehet osztani")
    }
    else{
        let hanyados=parseInt(szam1.textContent)/parseInt(szam2.textContent);
        eredmeny.textContent=hanyados.toFixed(2);
    }
});