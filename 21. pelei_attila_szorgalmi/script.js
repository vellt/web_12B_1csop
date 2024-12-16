const dolgok = document.getElementById("dolgok")
const szoveg = document.getElementById("szoveg")


szoveg.addEventListener("keypress",function(event){
    if (event.key === 'Enter') {
        const div= document.createElement("div"); /* bővíted classakkal, hogy a két benne lévő elem egymás mellett legyen Between-el */
        div.className = "d-flex flex-row justify-content-between bg-white rounded me-5 ms-5 mt-4"
        const title=document.createElement("div"); /* bővíted classakkal, hogy úgy nézzen ki, mint a minta*/
        title.className = "d-flex text-black p-4 fs-5"
        title.textContent = szoveg.value
        const deleteButton = document.createElement("button"); /* bővíted kattintási esemény hozzárendeléssel, meg class formázással */
        deleteButton.textContent = "törlés"
        deleteButton.className = "btn btn-danger align-self-center h-50 me-3"
        deleteButton.addEventListener('click',function() {
        div.remove()
        })
        div.append(title, deleteButton);
        dolgok.prepend(div)
        szoveg.value = ""
    }
    
    
})