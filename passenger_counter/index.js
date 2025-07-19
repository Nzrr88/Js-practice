const countEl = document.getElementById("count-el");
const btnInc = document.querySelectorAll("button")[0];
const btnDec = document.querySelectorAll("button")[1];

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
