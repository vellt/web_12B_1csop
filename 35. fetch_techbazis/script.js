window.addEventListener('DOMContentLoaded', fetchData);

const valaszto=document.getElementById("valaszto");

let json=[];

valaszto.addEventListener('change',()=>{
    const kivalasztott=valaszto.value;
    if(kivalasztott==="Összes"){
        displayData(json)
    }
    else{
        displayData(json.filter(x=>x.category===kivalasztott))
    }
})
async function fetchData(){
    const response=await fetch('https://nodejs111.dszcbaross.edu.hu/api/news')
    json=await response.json();
    displayData(json);
}

function displayData(json){
    const tarolo=document.getElementById("tarolo");
    tarolo.innerHTML="";
    json.forEach(tech => {
        const kartya=
        `
        <div class="col">
            <div class="border border-2 rounded border-primary-subtle p-3 mt-4 h-100">
                <div class="fw-bold fs-3">${tech.title}</div>
                <div class="fs-4 mb-2">${tech.details}</div>
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row">
                        <div class="border border-2 border-primary rounded text-primary fw-bold p-1 me-2">
                            ${tech.date}
                        </div>
                        <div class="border border-2 border-primary rounded text-primary fw-bold p-1">
                            ${tech.category}
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <button onclick="Reszletek('${tech.link}')" class="btn btn-primary">Részletek</button>
                    </div>
                </div>
            </div>
        </div>
        `

        tarolo.innerHTML+=kartya;

    });
}
function Reszletek(link){
    window.open(link,"_blank")
}