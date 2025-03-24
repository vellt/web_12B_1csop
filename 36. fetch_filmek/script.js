window.addEventListener("DOMContentLoaded", fetchData);
const szuro = document.getElementById("szuro")
const tarolo = document.getElementById("tarolo")
let json=[];

szuro.addEventListener("change", ()=>{
    const kivalasztottErtek=szuro.value
    if (kivalasztottErtek=== "Összes"){
        displayData(json)
    }else{
        displayData(json.filter(x=>x.genre===kivalasztottErtek))
    }
})

async function fetchData() {
    const response = await fetch("https://nodejs111.dszcbaross.edu.hu/api/movie")
    json = await  response.json();
    displayData(json) 
}

function displayData(json){
    tarolo.innerHTML=""
    json.forEach(film => {
        const kartya=`
        <div class="col">
            <div class="border border-3 border-${film.age_rating===18?'danger':'warning'} mt-3 h-100">
                <img class="card-img-top" src="${film.image}" alt="">
                <div class="fs-3 text-white fw-bold ms-3">${film.title}</div>
                <div class="d-flex flex-row p-3 align-items-center">
                    <img src="${film.age_rating}.webp" alt="" class="me-2">
                    <div class="text-white fs-4">${film.genre}</div>
                </div>
            </div>
        </div>
        `

        tarolo.innerHTML += kartya
    });
}