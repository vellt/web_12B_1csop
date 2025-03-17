window.addEventListener('DOMContentLoaded', fetchData)

const tallozo=document.getElementById('tallozo')
let json="";

tallozo.addEventListener('change',()=>{
    const kivalasztott=tallozo.value;
    if(kivalasztott==="all"){
        displayData(json);
    } else{
        displayData(json.filter(x=>x.gender===kivalasztott))
    }
})

async function fetchData(){
    const response=await fetch('https://akabab.github.io/starwars-api/api/all.json');
    json=await response.json();
    displayData(json);
}

function displayData(json){
    const container=document.getElementById('container');
    container.innerHTML="";

    json.forEach(character => {
        container.innerHTML+=card(character);
    });
}


function card({image, name}){
    return `
    <div class="col ">
        <div class=" p-2 border border-secondary border-2 rounded">
            <img src="${image}" alt="" class="card-img-top" >
            <div class="rat mt-2 fs-4 bg-warning text-center text-black fw-bold">${name}</div>
        </div>
    </div>
    `;
}