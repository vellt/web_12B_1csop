with(document){
    getElementById("decrement1").addEventListener("click",()=>szamlalo('number1',-1))
    getElementById("increment1").addEventListener('click', ()=>szamlalo('number1', +1))
    getElementById("decrement2").addEventListener("click", ()=>szamlalo('number2', -1))
    getElementById("increment2").addEventListener('click',()=>szamlalo('number2', +1))
}

function szamlalo(azonosito, ertek){
    const szam=document.getElementById(azonosito);
    szam.textContent=parseInt(szam.textContent)+ertek;
}

Array.from(document.getElementsByClassName('muvelet')).forEach(element => {
    element.addEventListener('click', ()=>szamolgep(element.textContent));
    console.log(element);
});

function szamolgep(content){
    with(document){
        const a = parseInt(getElementById('number1').textContent);
        const b = parseInt(getElementById('number2').textContent);
        const eredmeny = getElementById('eredmeny');
        switch (content) {
            case '+': eredmeny.textContent = a + b; break;
            case '-': eredmeny.textContent = a - b; break;
            case '/':
                if (b === 0) alert("0-val nem lehet osztani")
                else eredmeny.textContent = (a / b).toFixed(2);
                break;
            case '*': eredmeny.textContent = a * b; break;
        }
    }
}