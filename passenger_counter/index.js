const countEl = document.getElementById("count-el");
const btnInc = document.querySelectorAll("button")[0];
const btnDec = document.querySelectorAll("button")[1];
const btnSave = document.getElementById("btnSave");
const saveEl = document.querySelector("p");

let Saving = [];

btnInc.onclick = function () {
  let current = parseInt(countEl.innerText);
  countEl.innerText = ++current;
};

btnDec.onclick = function () {
  let current = parseInt(countEl.innerText);
  if (current > 0) {
    countEl.innerText = --current;
  } else {
    alert("No passenger exists");
  }
};

function save (){
    let current = countEl.innerText
    if (parseInt(current)){
        Saving.push(current)
        saveEl.textContent+= current + " - " 
        countEl.innerText = 0;
    }

}
function reset (){
   countEl.innerText = 0;
   Saving = []
   saveEl.textContent = "Previous entries: "

}
