let json=[];
window.addEventListener('DOMContentLoaded', async ()=>{
    try {
        const response= await fetch('https://picsum.photos/v2/list');
        json= await response.json();
        displayData(json);
        loadLista(json);
    } catch (error) {
        console.log(error);
    }
})

const lista=document.getElementById('lista');

function loadLista(json){
    lista.innerHTML=''
    const authors= json.map(x=>x.author)
    const unique= new Set(authors);
    unique.forEach(x=>{
        const option=`<option value="${x}">${x}</option>`;
        lista.insertAdjacentHTML('beforeend',option);
    })
}

lista.addEventListener('change',()=>{
    const filteredList=json.filter(x=>x.author===lista.value);
    displayData(filteredList)
})

function displayData(json){
    const tarolo=document.getElementById('tarolo');
    tarolo.innerHTML='';
    json.forEach(kep => {
        const kartya=`
        <div class="col">
            <div class="border h-100 rounded p-3">
                <img src="${kep.download_url}" alt="" class="card-img-top">
                <div class="fs-5 fw-bold text-center mt-3">📷 ${kep.author}</div>
            </div>
        </div>
        `;
        tarolo.insertAdjacentHTML('beforeend',kartya);
    });
}