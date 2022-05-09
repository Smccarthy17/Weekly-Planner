var textAreaSections = document.querySelectorAll("textarea");
var currentDateSection = document.getElementById("currentDay");
currentDateSection.textContent = moment().format("dddd, MMMM Do");
console.log(moment().hour());
for (var i = 0; i < textAreaSections.length; i++) {
  console.log(textAreaSections[i].id);
  if (textAreaSections[i].id < moment().hour()) {
    textAreaSections[i].classList.add("past");
  }
}
