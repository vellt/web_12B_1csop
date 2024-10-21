const elore = document.getElementById('elore'); // mindegy, hogy ''
const vissza = document.getElementById("vissza"); // mindegy, hogy ""
const kep = document.getElementById(`kep`); // mindegy, hogy ``

let index=1;

elore.addEventListener('click',function(){
    if(index<5){
        index++;
        kep.src=`0${index}.jpg`;
    }
});

vissza.addEventListener('click',function(){
    if(index>1){
        index--;
        kep.src=`0${index}.jpg`;
    }
});
