const kepernyo=document.getElementById('kepernyo');
const kekKonyv=document.getElementById('kekKonyv');

let isHidden=false;

kepernyo.addEventListener('click', function(){
    if(isHidden===true){
        show();
        isHidden=false;
    }else{
        hidden();
        isHidden=true;
    }
});

function hidden(){
    kekKonyv.style.display='none';
    // mi a különbség a visiblity és a display között??
    //kekKonyv.style.visibility='hidden';
}

function show(){
    kekKonyv.style.display='block';
    // mi a különbség a visiblity és a display között??
    //kekKonyv.style.visibility='visible';
}