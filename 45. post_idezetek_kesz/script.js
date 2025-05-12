const kuldes=document.getElementById("kuldes")
const idezet=document.getElementById("idezet")
const nev=document.getElementById("nev")
const tarolo=document.getElementById("tarolo")

window.addEventListener('DOMContentLoaded',fetchData);

async function fetchData(){
    const response=await fetch("https://nodejs112.dszcbaross.edu.hu/idezetek");
    const json=await response.json();
    displayData(json);
}

function displayData(json){
    tarolo.innerHTML='';
    json.reverse().forEach(adat => {
        tarolo.innerHTML+=kartya(adat)
    });
}

function kartya({nev, idezet}){
    return `
    <div class="col">
        <div class="h-100 bg-success-subtle rounded p-4">
            <img src="./idezet.svg" alt="">
            <div class="text-break text-success-emphasis fs-3 fw-bold my-3">${nev}</div>
            <div class="text-break text-success-emphasis fs-3">${idezet}</div>
        </div>
    </div>
    `
}

kuldes.addEventListener('click', async ()=>{
    const idezetAdat=idezet.value;
    const nevAdat=nev.value;
    const response = await fetch("https://nodejs112.dszcbaross.edu.hu/idezetek", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nev: nevAdat,
            idezet: idezetAdat
        })
    })
    if(response.ok){
        alert("Sikeresen rögzítettük")
        nev.value="";
        idezet.value="";
        fetchData();
    }
})