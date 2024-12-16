const fentiAlap = document.getElementById("fentiAlap");
const title = document.createElement("title");
title.textContent="bevasarlolista";
fentiAlap.append(title);

const alap = document.getElementById("alap");

const divFo = document.createElement("div");
divFo.className="d-flex flex-column vh-100 justify-content-center align-items-center bg-danger";
divFo.id="divFo"
alap.append(divFo);

const cim = document.createElement("div");
cim.className="display-5 fw-bolder text-white";
cim.textContent="📌 Bevásárlólista";
divFo.append(cim);

const cuccosDiv = document.createElement("div");
cuccosDiv.id="cuccosDiv"
cuccosDiv.className="p-4 bg-white rounded mt-5 mb-5 w-75"
divFo.append(cuccosDiv);

const cuccos = document.createElement("input");
cuccos.className="form-control fs-4";
cuccos.placeholder="mit kéne venni?"
cuccos.id="cuccos";
cuccosDiv.append(cuccos);

const tartalomDiv = document.createElement("div");
tartalomDiv.id="tartalomDiv"
tartalomDiv.className="w-75 bg-danger flex-column overflow-auto d-flex"
divFo.append(tartalomDiv);

cuccos.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        console.log(cuccos.innerHTML);
        const tartalom = document.createElement("div");
        tartalom.id="tartalom"
        tartalom.className="justify-content-between p-3 bg-white rounded m-4 d-flex";
        tartalomDiv.append(tartalom);

        const tartalomNev = document.createElement("div");
        tartalomNev.className="fs-3"
        tartalomNev.textContent=`${cuccos.value}`;
        tartalom.append(tartalomNev);

        const tartalomTorol = document.createElement("button");
        tartalomTorol.className="btn btn-danger p-2"
        tartalomTorol.id="tartalomTorol"
        tartalomTorol.textContent="törlés";
        tartalom.append(tartalomTorol);

        tartalomTorol.addEventListener("click",function(){
            tartalomDiv.removeChild(tartalom);
        });

        cuccos.value="";
    }
});