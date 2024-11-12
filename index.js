const nameInput = document.querySelector("input");
const saveBtn = document.getElementById("savebtn");
const deleteBtn = document.getElementById("deletebtn");
const titleName = document.querySelector("h5");

document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    titleName.innerText = savedName;
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
