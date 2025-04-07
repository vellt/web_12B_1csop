window.addEventListener("DOMContentLoaded", fetchData);
const tarolo = document.getElementById("tarolo")
const szuro = document.getElementById("szuro")
let json =[]

szuro.addEventListener('change',()=>{
    const kivalasztottErtek=szuro.value;
    if(kivalasztottErtek==="összes"){
        displayData(json);
    }else{
        displayData(json.filter(x=>x.discount))
    }
})

async function fetchData(){
    const response = await fetch ("https://nodejs111.dszcbaross.edu.hu/api/bakery")
    json = await response.json();

    displayData(json);
}

function displayData(json){
    tarolo.innerHTML='';
    json.forEach(pektermek => {
        if(pektermek.discount){
            // akcios
            tarolo.innerHTML+=akciosKartya(pektermek);
        }else{
            // sima
            tarolo.innerHTML+=simaKartya(pektermek);
        }
    });
}

function simaKartya({name,price, weight, price_per_kg, image }){
    return `
    <div class="col">
        <div>
            <img src="${image}" class="card-img-top border rounded">
            <div class="d-flex align-items-end">
                <div class="fs-3 fw-bold">${price}</div>
                <div class="fs-5 mb-1">Ft</div>
            </div>
            <div class="text-break">${name}</div>
            <div class="d-flex justify-content-between">
                <div class="text-secondary small">${weight}</div>
                <div class="text-secondary small">${price_per_kg}</div>
            </div>
        </div>
    </div>
    `
}

function akciosKartya({name,price, original_price, weight, price_per_kg, image, discount }){
    return `
    <div class="col">
        <div>
            <img src="${image}" class="card-img-top border rounded">
            <div class="d-flex align-items-end mt-2">
                <div class="d-flex align-items-end bg-warning me-3 rounded px-2">
                    <div class="fs-3 fw-bold">${price}</div>
                    <div class="fs-5 mb-1">Ft</div>
                </div>
                <div class="fs-5 text-secondary text-decoration-line-through">${original_price} Ft</div>
            </div>
            <div class="text-break mt-2">
                <span class="bg-warning-subtle p-1">${discount}</span> 
                ${name}
            </div>
            
            <div class="d-flex justify-content-between">
                <div class="text-secondary small">${weight}</div>
                <div class="text-secondary small">${price_per_kg}</div>
            </div>
        </div>
    </div>
    `
}