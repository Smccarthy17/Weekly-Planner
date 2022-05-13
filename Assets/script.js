var textAreaSections = document.querySelectorAll("textarea");
var saveBtns = document.querySelectorAll(".saveBtn");
console.log(saveBtns);
var currentDateSection = document.getElementById("currentDay");
currentDateSection.textContent = moment().format("dddd, MMMM Do");

for (var i = 0; i < textAreaSections.length; i++) {
  if (textAreaSections[i].id < moment().hour()) {
    textAreaSections[i].classList.add("past");
  } else if (textAreaSections[i].id == moment().hour()) {
    textAreaSections[i].classList.add("present");
  } else {
    textAreaSections[i].classList.add("future");
  }
}
for (var i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", function () {
    console.log(this);
  });
}
