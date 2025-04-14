const tarolo=document.getElementById("tarolo");
const kereso=document.getElementById("kereso");
const szuro=document.getElementById("szuro");

window.addEventListener('DOMContentLoaded',fetchData);
let json=[];

szuro.addEventListener('change', filterData);
kereso.addEventListener('input', filterData);

function filterData(){
    let filteredList=json;
    if(szuro.value==="used"){
        filteredList=filteredList.filter(x=>x.miles)
    }
    if(szuro.value==="new"){
        filteredList=filteredList.filter(x=>x.miles===0)
    }
    if(kereso.value.trim()){
        filteredList=filteredList
        .filter(x=>x.name.toLowerCase().includes(kereso.value.toLowerCase().trim()))
    }
    displayData(filteredList);
}

async function fetchData(){
    const response=await fetch("https://nodejs112.dszcbaross.edu.hu/cars");
    json=await response.json();
    displayData(json);
}

function displayData(json){
    tarolo.innerHTML="";
    json.forEach(car => {
        tarolo.innerHTML+=card(car);
    });
}

function card({image, name, details, miles, fuel, transmission, price}){
    return `
    <div class="col">
        <div class="border rounded-4 h-100">
            <img src="https://nodejs112.dszcbaross.edu.hu/${image}" alt="" class="card-img-top rounded-top-4">
            <div class="m-4">
                <div class="fw-bold fs-4 mb-2">${name}</div>
                <div class="fs-5">${details}</div>
                <hr>
                <div class="d-flex justify-content-between">
                    <div class="text-center">
                        <img src="./miles.svg" alt="">
                        <div>${miles} Miles</div>
                    </div>
                    <div class="text-center">
                        <img src="./fuel.svg" alt="">
                        <div>${fuel}</div>
                    </div>
                    <div class="text-center">
                        <img src="./transmission.svg" alt="">
                        <div>${transmission}</div>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="fw-bold fs-4">$${price}</div>
                    <button class="btn btn-light">View details</button>
                </div>
            </div>
        </div>
    </div>
    `
}