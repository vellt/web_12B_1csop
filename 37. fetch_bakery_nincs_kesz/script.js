window.addEventListener("DOMContentLoaded", fetchData);
const tarolo = document.getElementById("tarolo")
const szuro = document.getElementById("szuro")
 let json =[]

async function fetchData(){
    const response = await fetch ("https://nodejs111.dszcbaross.edu.hu/api/bakery")
    json = await response.json();

    displayData(json);
}