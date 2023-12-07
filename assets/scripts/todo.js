const form = document.getElementById("form");
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list");

console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    listcontainer.innerHTML += `<li class="list-item">
   <span class="list-name">
   <i class="fa-regular fa-square-check cheked-icon"></i>
     <i class="far fa-square check-icon"></i>${inputBox.value}
   </span>
     <span class="list-icons">
       <i class="fas fa-pen"></i>
       <i class="far fa-trash-alt trash-icon"></i>
     </span>
     </li>`;
  }
  inputBox.value = "";
  saveData();
});

listcontainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("trash-icon")) {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("check-icon")) {
    e.target.parentElement.style.textDecoration = "line-through";
    e.target.style.display = "none";
    e.target.parentElement.querySelector(".cheked-icon").style.display =
      "inline-block";
    saveData();
    // false;
  } else if (e.target.classList.contains("cheked-icon")) {
    e.target.parentElement.style.textDecoration = "none";
    e.target.style.display = "none";
    e.target.parentElement.querySelector(".check-icon").style.display =
      "inline-block";
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
