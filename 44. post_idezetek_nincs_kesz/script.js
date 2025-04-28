const kuldes=document.getElementById("kuldes")
const idezet=document.getElementById("idezet")
const nev=document.getElementById("nev")

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
    }
})