const todaysDate = document.querySelector(".todays-date");
const container = document.querySelector(".container");
const hourBLocks = document.querySelectorAll(".hour");
const inputText = document.querySelector(".text-input");
const saveBtns = document.querySelectorAll(".save-btn");

for (let i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", function (e) {
    const text = e.target.parentElement.firstElementChild.value;
    const id = e.target.parentElement.id;

    localStorage.setItem(id, text);
    loadTask();
  });
}

function loadTask() {
  for (let i = 0; i < hourBLocks.length; i++) {
    const block = hourBLocks[i];

    const text = localStorage.getItem(block.id);

    block.firstElementChild.nextElementSibling.innerText = text;
  }
}
loadTask();

function updateDate() {
  let currentDate = new Date();

  let formattedDateTime = currentDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  todaysDate.innerText = formattedDateTime;
}
updateDate();

setInterval(updateDate);
