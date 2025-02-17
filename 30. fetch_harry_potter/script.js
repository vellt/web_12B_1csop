window.addEventListener('DOMContentLoaded',fetchData);

async function fetchData(){
    try {
        const response= await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');
        const json= await response.json();
        displayCaracters(json);   
    } catch (error) {
        console.log(error);
    }
}

function displayCaracters(json){
    const tarolo=document.getElementById("tarolo");
    tarolo.innerHTML="";
    json.forEach(caracter => {
        const httpsImage=caracter.image.replace(/^http:\/\//, "https://");

        const kartya=`
        <div class="col">
            <div class="h-100 border border-secondary-subtle rounded p-3 text-center">
                <img src="${httpsImage}" alt="" class="card-img-top rounded-3">
                <div class="h4 fw-bold my-3">${caracter.name}</div>
                <div>Ház: ${caracter.house}</div>
                <div>Születési év: ${caracter.yearOfBirth}</div>
                <div>Színész: ${caracter.actor}</div>
            </div>
        </div>
        `;

        tarolo.insertAdjacentHTML('beforeend',kartya);
    });
}