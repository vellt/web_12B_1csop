const state={
    ids:[],
    ages:[],
    names:[],
    currentIndex:0,
    getGiraffe(){
        return{
            id:this.ids[this.currentIndex],
            age:this.ages[this.currentIndex],
            name:this.names[this.currentIndex]
        }
    },
    buyGiraffe(age, name){
        this.ids.push(crypto.randomUUID());
        this.ages.push(age);
        this.names.push(name)
    },
    nextGiraffe(){
        if(this.currentIndex+1< this.ids.length){
            this.currentIndex++;
        }
    },
    previousGiraffe(){
        if(this.currentIndex-1>=0){
            this.currentIndex--;
        }
    },
    incrementAge(){
        let age= this.ages[this.currentIndex];
        age++;
        this.ages[this.currentIndex]=age;
    },
    changeName(name){
        this.names[this.currentIndex]=name;
    },
}

const nyakak=document.getElementById('nyakak');
const nev=document.getElementById('nev');
const elozo=document.getElementById('elozo');
const kovetkezo=document.getElementById('kovetkezo');
const hozzaad=document.getElementById('hozzaad')
const pluszEgyEv=document.getElementById('pluszEgyEv');

pluszEgyEv.addEventListener('click', ()=>{
    state.incrementAge();
    updateScreen();
});

hozzaad.addEventListener('click',()=>{
    const nevAdat=document.getElementById('nevBev').value;
    const korAdat=document.getElementById('korBev').value;
    state.buyGiraffe(parseInt(korAdat),nevAdat.trim());
    // kiürítem 
    document.getElementById('nevBev').value='';
    document.getElementById('korBev').value=1;
    updateScreen();
})

elozo.addEventListener('click', ()=>{
    state.previousGiraffe();
    updateScreen();
})

kovetkezo.addEventListener('click', ()=>{
    state.nextGiraffe();
    updateScreen();
})

function updateScreen(){
    const giraffe=state.getGiraffe();
    nev.innerText=giraffe.name;
    nyakak.innerHTML="";
    for (let i = 0; i < giraffe.age; i++) {
        nyakak.innerHTML+=nyakKartya();
    }
}

function nyakKartya(){
    return '<img src="./nyak.png" alt="" width="100" class="img-fluid">'
}