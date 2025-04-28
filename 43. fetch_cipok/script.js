const tarolo=document.getElementById("tarolo")
const szuro=document.getElementById("szuro")
const kereso=document.getElementById("kereso")
let json=[];

window.addEventListener('DOMContentLoaded', fetchData)
szuro.addEventListener('change', filterData);
kereso.addEventListener('input', filterData);

function filterData(){
    let filteredList=json;
    if(szuro.value!=="all")
    {
        filteredList=filteredList.filter(x=>x.category==szuro.value);
    }
    if(kereso.value.trim()!==""){
        const kisbetusKereso=kereso.value.toLowerCase();
        filteredList=filteredList.filter(x=>x.title.toLowerCase().includes(kisbetusKereso));
    }
    displayData(filteredList);
}



async function fetchData(){
    const response =await fetch("https://nodejs111.dszcbaross.edu.hu/api/nike");
    json=await response.json();
    displayData(json);
}

function displayData(json){
    tarolo.innerHTML='';
    json.forEach(element => {
        tarolo.innerHTML+=card(element);
    });
}

function card({image, title, category, price}){
    return `
    <div class="col">
        <div>
            <img class="card-img-top" src="${image}" alt="">
            <div class="fs-5 fw-bold mt-2">${title}</div>
            <div class="fs-5">${category}</div>
            <div class="fs-5 fw-bolder">${price}</div>
        </div>
    </div>
    `
}