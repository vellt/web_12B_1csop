document.getElementById('gomb').addEventListener('click', async ()=>{
    try {
        const response= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const json= await response.json();   

        displayCategories(json);
    } catch (error) {
        console.log(error);
    }
});


function displayCategories(json ){

    const tarolo= document.getElementById('tarolo');
    tarolo.innerHTML='';

    json.categories.forEach(category => {
        const kartya=`
        <div class="col">
            <div class="border rounded h-100 p-3">
                <img src="${category.strCategoryThumb}" alt="" class="card-img-top">
                <div class="fs-3 fw-bold text-center">Kategória: ${category.strCategory}</div>
            </div>
        </div>
        `
        tarolo.insertAdjacentHTML('beforeend',kartya);

    });
}