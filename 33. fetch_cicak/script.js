window.addEventListener('DOMContentLoaded',fetchData)

const valaszto=document.getElementById('valaszto');

let json=[];

valaszto.addEventListener('change',()=>{
    const kivalasztott=valaszto.value;
    if(kivalasztott==="összes"){
        displayData(json)
    } else {
        displayData(json.filter(x=>x.gender===kivalasztott))
    }

    /*
    switch (kivalasztott) {
        case 'összes':
            displayData(json);
            break;
        case 'kandúr':
            displayData(json.filter(x=>x.gender==='kandúr'));
            break;
        case 'nőstény':
            displayData(json.filter(x=>x.gender==='nőstény'));
            break;
    }*/
})

async function fetchData() {
    const response=await fetch('https://nodejs109.dszcbaross.edu.hu/cats');
    json=await response.json();
    displayData(json);
}

function displayData(json){
    const tarolo=document.getElementById('tarolo');
    tarolo.innerHTML="";

    json.forEach(cica => {
        const kartya=`
        <div class="col">
            <div class="border rounded h-100">
                <img src="${cica.image_path}" alt="" class="card-img-top rounded-top">
                <div class="fs-5 fw-bold p-3">${cica.name}</div>
                <div class="px-3">Kor: ${cica.age} év</div>
                <div class="px-3">Nem: ${cica.gender}</div>
                <div class="px-3">Szőrhossz: ${cica.fur_length}</div>
                <button onclick="Thanks()" class="btn btn-danger m-3">Örökbefogadom</button>
            </div>
        </div>
        `
        tarolo.innerHTML+=kartya;
        //tarolo.insertAdjacentHTML('beforeend',kartya);
    });
}


function Thanks(){
    alert("Köszönjük")
}
