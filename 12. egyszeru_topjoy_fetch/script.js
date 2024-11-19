const messageBox= document.getElementById("message-box");
const gomb = document.getElementById("gomb");

// kezdetben üres a tömb, később töltünk bele adatot,
// ezért itt nem const, hanem let!
let uzik=[];

// anoním aszinkron függvény, amely önmagát meghívja
// a fetch és a text promise ezért elé await kell
// promise az amikor valami nagyon időigényes folyamat
// hogy aszintron is lehessen futtatni
(async ()=>{
    const adat= await fetch('uzik.csv'); // hálózati hívással lekérjük a fájlt, de ebben mindenféle adat van, ebből ki kell olvasnom a text értét, amely egy string
    uzik=(await adat.text()).split('\n'); // az await adat.text() stringet ad vissza, ahol minden elem végén \n van. feltördeltük \n mentén, ekkor minden egyes sor egy egy eleme lett a tömbnek
})();

gomb.addEventListener('click',function(){
    const randomSzam=Math.floor(Math.random()*uzik.length);
    const randomUzi=uzik[randomSzam];
    messageBox.textContent=randomUzi;
});