const form = document.getElementById("form");
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list");
// const li = document.createElement("li");
// li.setAttribute("class", "todo__item");
// listcontainer.appendChild(li);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBox.value.trim().length === 0) {
    alert("you must write something");
  } else if (inputBox.value.trim() !== "") {
    listcontainer.innerHTML += `<li class="todo__item d-flex justify-between align-center">
   <span class="todo__task d-flex gap-md align-center">
   <i class="fa-regular fa-square-check todo__check"></i>
  <i class="far fa-square todo__square"></i><span class="todo__inputValue">${inputBox.value.trim()}</span>
   </span>
     <span class="todo__icons d-flex gap-lg">
       <i class="fas fa-pen"></i>
       <i class="far fa-trash-alt todo__trash"></i>
     </span>
     </li>`;
  }
  inputBox.value = "";
  saveData();
});

listcontainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo__trash")) {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("todo__square")) {
    e.target.style.display = "none";
    e.target.parentElement.querySelector(".todo__check").style.display = "flex";
    e.target.parentElement.querySelector(
      ".todo__inputValue"
    ).style.textDecoration = "line-through gray";
    e.target.parentElement.querySelector(".todo__inputValue").style.color =
      "gray";
    saveData();
  } else if (e.target.classList.contains("todo__check")) {
    e.target.parentElement.querySelector(
      ".todo__inputValue"
    ).style.textDecoration = "none";
    e.target.parentElement.querySelector(".todo__inputValue").style.color =
      "#111";
    e.target.style.display = "none";
    e.target.parentElement.querySelector(".todo__square").style.display =
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
