let rDice= document.getElementById('rDice');
rDice.addEventListener("click",roll);

function roll(){
    let dice1=getdiceROll();
    let dice2=getdiceROll();
    mdice1.innerHTML=dice1;
    mdice2.innerHTML=dice2;

    if(dice1==6 && dice2==6){
        twoSix.innerHTML="<h3 style='color:green'>WAOO!!!! Play Again</h3>"
    }else{twoSix.innerHTML="";}
}
function getdiceROll(){
    return Math.trunc((Math.random())*6);
}