const nameInput = document.querySelector("input");
const saveBtn = document.getElementById("savebtn");
const deleteBtn = document.getElementById("deletebtn");
const titleName = document.querySelector("h5");

document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    titleName.innerText = savedName;
  }
  let counter = parseInt(sessionStorage.getItem("time"));

  if (counter) {
    counterShown.textContent = counter;
  }
});

saveBtn.onclick = function () {
  const name = nameInput.value;
  localStorage.setItem("name", name);
  titleName.innerText = name;
};

deleteBtn.onclick = function () {
  localStorage.removeItem("name");
  titleName.innerText = "";
};
/*//////////////////////////// COUNTER  ///////////////////////// */

const counterShown = document.getElementById("counter");
const startBtn = document.getElementById("startbtn");
const resetBtn = document.getElementById("resetbtn");
let interval = null;
let counter = parseInt(sessionStorage.getItem("time")) || 0; //importante settare un valore default a 0 altrimenti se non trova un valore al caricamento pagina, ritorna NaN.

startBtn.onclick = function () {
  //if per evitare che l'intervallo venga avviato più volte in parallelo, controlla che non ci sia già un intervallo attivo.
  if (!interval) {
    interval = setInterval(() => {
      counter++;
      counterShown.textContent = counter;
      sessionStorage.setItem("time", counter);
    }, 1000);
  }
};
resetBtn.onclick = function () {
  //per fermare il contatore
  clearInterval(interval);
  //resetta interval
  interval = null;
  //reimposto il contatore a 0
  counter = 0;
  //aggiorno il valore visualizzato
  counterShown.textContent = counter;
  //aggiorno il valore in session storage
  sessionStorage.setItem("time", 0);
};
