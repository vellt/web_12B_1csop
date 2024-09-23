let gomb=document.getElementById("gomb");

gomb.addEventListener("click",function(){
    let vez=document.getElementById("vez").value.trim();
    let ker=document.getElementById("ker").value.trim();
    if(ker==="" || vez===""){
        alert("A *-al jelölt mezők kitöltése kötelező");
    }else{
        alert(`Szia, ${vez} ${ker}.\nHogy vagy?`);
    }
});