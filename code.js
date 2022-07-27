var gold = false;

function fun() {
  console.log('Dit is plezant');
  
   
  let el = document.getElementById("titel");
 
  if (gold) {
    el.style.color = 'blue' ;
    el.style["font-size"] = "200%";
    gold = false;
  }
  else {
    el.style.color = '#ffd700' ;
    el.style["font-size"] = "700%";
    gold = true;
  }
} 

document.addEventListener("DOMContentLoaded", () => {
   let knop = document.getElementById("knop");
   knop.addEventListener("click", fun);
});