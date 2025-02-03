const vilagos=document.getElementById('vilagos');
const sotet= document.getElementById('sotet');

const velemenyKuldese=document.getElementById('velemeny-kuldese');

velemenyKuldese.addEventListener('click',()=>{
    const nev=document.getElementById('nev').value;
    const velemenyTartalom=document.getElementById('velemeny-tartalom').value;
    
    if(!nev){
        alert("Kötelező a név megadása");
    } else if (!velemenyTartalom){
        alert("Kötelező a vélemény megadása");
    } else {
        const tartalom =
        `
        <div class="col-12 col-sm-6 col-lg-4 p-5">
            <div class="text-center">
            <img src="./Képek/customer.png" alt="" class="img-fluid" width="100">
            </div>
            <h2 class="fw-normal text-center my-3">${nev}</h2>
            <p class="text-center text-break">${velemenyTartalom}</p>
        </div>
        `

        const velemenyek=document.getElementById('velemenyek');
        velemenyek.insertAdjacentHTML('afterbegin', tartalom);

    }
})

function setCookie(name, value, days) {
    const date = new Date(); 
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

vilagos.addEventListener('click', ()=>{
    setCookie("theme","light", 2);
    document.getElementById("site").setAttribute('data-bs-theme',"light");
})

sotet.addEventListener('click',()=>{
    setCookie("theme","dark", 2);
    document.getElementById("site").setAttribute('data-bs-theme',"dark");
})