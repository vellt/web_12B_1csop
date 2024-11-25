const a1= document.getElementById("a1");
const q= document.getElementById("q");
const n = document.getElementById("n");

const gomb = document.getElementById("gomb");

gomb.addEventListener("click",function(){
    if(!a1.value || !q.value || !n.value){
        alert('hibás bemeneteli adat(ok)!')
    }else{
        const series=[];

        for (let index = 0; index < parseInt(n.value); index++) {
            series.push(parseInt(a1.value)*Math.pow(parseInt(q.value),index));
        }

        alert(`🔢 ${series.join(', ')}`);
    }
});