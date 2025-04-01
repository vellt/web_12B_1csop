window.addEventListener('DOMContentLoaded',fetchData);

async function fetchData(){
    const response= await fetch('./data.json');
    const json= await response.json();
    // ha megvan az adat-->töltse be
    displayData(json);
    // másodpercenként ismétlőjön
    setInterval(() => {
        displayData(json);
    }, 1000);
}

function displayData(json){
    const tarolo=document.getElementById('tarolo');
    tarolo.innerHTML='';
    json.forEach(element => {
        const now=new Date();
        const date=new Date(element.date);
        const diff=date-now; // ezred másodperces különbség
        if(diff>0){
            const diffDate=new Date(diff); 
            const nap=Math.floor(diff/(1000*60*60*24));
            const ora=diffDate.getUTCHours();
            const perc=diffDate.getUTCMinutes();
            const mp=diffDate.getUTCSeconds();
            tarolo.innerHTML+=kartya(element.title, nap, ora, perc,mp);
        }
    });
}

function kartya(cim, nap, ora, perc, mp){
    let szin='sarga';
    if(nap<=30){
        szin='piros'
    }
    if(nap>=60){
        szin='zold'
    }
    return `
    <div class="col">
        <div class="h-100 rounded shadow p-4 blur ${szin}">
            <div class="text-center fw-bold fs-3">${cim}</div>
            <div class="row row-cols-4 my-3">
                <div class="col text-center">
                    <div class="fs-1 fw-bold">${nap}</div>
                    <div class="fs-5 ">nap</div>
                </div>
                <div class="col text-center">
                    <div class="fs-1">${ora}</div>
                    <div class="fs-5">óra</div>
                </div>
                <div class="col text-center">
                    <div class="fs-1">${perc}</div>
                    <div class="fs-5">perc</div>
                </div>
                <div class="col text-center">
                    <div class="fs-1">${mp}</div>
                    <div class="fs-5">mp</div>
                </div>
            </div>
        </div>
    </div>
    `
}