const todaysDate = document.querySelector(".todays-date");
const container = document.querySelector(".container");
const hourBlocks = document.querySelectorAll(".hour");
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

let currentHour = null;
function loadTask() {
  updateDate();

  console.log("loadTask() is called");
  for (let i = 0; i < hourBlocks.length; i++) {
    const block = hourBlocks[i];
    const blockHour = parseInt(block.className.split(" ")[1].split("-")[1]);

    const text = localStorage.getItem(block.id);

    block.firstElementChild.nextElementSibling.innerText = text;
    if (blockHour < currentHour) {
      block.classList.add("past");
    } else if (blockHour >= currentHour) {
      block.classList.add("future");
    } else if (blockHour === currentHour) {
      block.classList.add("present");
    }
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
  // let timeString = formattedDateTime.split("at")[1].trim();
  // let timeParts = timeString.split(":");
  // let hour = timeParts[0].trim();
  // console.log(hour);
  currentHour = currentDate.getHours();

  todaysDate.innerText = formattedDateTime;
}

setInterval(updateDate, 1000);
// loadTask();
