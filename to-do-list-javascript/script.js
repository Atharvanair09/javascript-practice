const totalT = document.getElementById("totalCount");
const completedT = document.getElementById("completedCount");
const pendingT = document.getElementById("pendingCount");
const btnAdd = document.getElementById("addBtn");
const input = document.getElementById("newTask");
const inputTitle = document.getElementById("newTaskTitle");
const list = document.getElementById("todoList");
const titleBox = document.getElementById("title");
const content = document.getElementById("content");
const form = document.getElementById("todoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addData();
});

var completedValue = 0;

let submission = JSON.parse(localStorage.getItem("submission")) || [];
updateStats();

function addData() {
  const description = input.value;
  const title = inputTitle.value;

  submission.push({
    id: Date.now(),
    title,
    description,
    completed: false,
    pending: true,
  });

  localStorage.setItem("submission", JSON.stringify(submission));
  input.value = "";
  inputTitle.value = "";
  updateStats();
}

function updateStats() {
  const submissionLength = submission.length;

  totalT.innerHTML = submissionLength;

  if (submissionLength !== 0) {
    createList();
    list.removeAttribute("hidden");
  }
}

function updateCounters(val) {
  completedValue = completedValue + parseInt(val);
  completedT.innerHTML = completedValue;
  let pending = submission.length - completedValue;
  pendingT.innerHTML = pending;
}

function createList() {
  let html = "";
  submission.forEach((item) => {
    html += ` 
        <li>
          <input type="checkbox" id="${item.id}" class="todo-checkbox">
          <div class="content">
            <span id="title">${item.title}</span>
            <span class="desc">${item.description}</span>
          </div>
        </li>`;
  });
  list.innerHTML = html;

  const savedStateStr = localStorage.getItem("checkboxCheckedId");
  let savedStateArr = savedStateStr ? JSON.parse(savedStateStr) : [];

  savedStateArr.forEach(savedObj => {
    const checkbox = document.getElementById(savedObj.id);
    if (checkbox) {
      checkbox.checked = savedObj.state;
      if (savedObj.state === true) {
        updateCounters("1");
      }
    }
  });

  const text = list.querySelectorAll(".todo-checkbox");
  text.forEach((element) => {
    element.addEventListener("change", function () {
      let checkboxCheckedId = JSON.parse(localStorage.getItem("checkboxCheckedId")) || [];

      checkboxCheckedId = checkboxCheckedId.filter(obj => obj.id !== element.id);
      checkboxCheckedId.push({
        id: element.id,
        state: element.checked,
      });
      localStorage.setItem("checkboxCheckedId", JSON.stringify(checkboxCheckedId));

      updateCounters(element.checked ? "1" : "-1");
    });
  });
}
