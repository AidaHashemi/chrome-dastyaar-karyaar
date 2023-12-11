//select DOM elements
const form = document.getElementById("form");
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list");

// when submit the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputBox.value.trim().length === 0) {
    alert("you must write something");
  }

  //when the input is valid
  else if (inputBox.value.trim() !== "") {
    listcontainer.innerHTML += `<li class="todo__item d-flex justify-between align-center">

             <span class="todo__ellips ">
               <i class="fas fa-ellipsis-v"></i>
               <i class="fas fa-ellipsis-v"></i>
             </span>

             <span class="todo__task d-flex gap-md align-center">
                <i class="fa-regular fa-square-check todo__check"></i>
                <i class="far fa-square todo__square"></i>
                <span class="todo__inputValue">${inputBox.value.trim()}</span>
             </span>

             <span class="todo__icons d-flex gap-lg">
                <i class="fas fa-pen"></i>
                <i class="far fa-trash-alt todo__trash"></i>
             </span>
     </li>`;
  }
  inputBox.value = "";
  inputBox.focus();

  saveData();
});

listcontainer.addEventListener("click", function (e) {
  const eTarget = e.target.classList;
  const eParent = e.target.parentElement;
  const display = style.display;
  const textDecoration = style.textDecoration;
  const color = style.color;

  //________________________delet a task
  if (eTarget.contains("todo__trash")) {
    eParent.parentElement.remove();

    saveData();
  }
  // ______________________check a task
  else if (eTarget.contains("todo__square")) {
    e.target.display = "none";
    eParent.querySelector(".todo__check").display = "flex";
    eParent.querySelector(".todo__inputValue").color = "gray";
    eParent.querySelector(".todo__inputValue").textDecoration =
      "line-through gray";

    saveData();
  }
  //_______________________uncheck a task
  else if (eTarget.contains("todo__check")) {
    eParent.querySelector(".todo__inputValue").textDecoration = "none";
    eParent.querySelector(".todo__inputValue").color = "#111";
    eParent.querySelector(".todo__square").display = "inline-block";
    e.target.display = "none";

    saveData();
  }
});
//_________________________save in localStorage
function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
