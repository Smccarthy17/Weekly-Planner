var textAreaSections = document.querySelectorAll("textarea");
var saveBtns = document.querySelectorAll(".saveBtn");
var currentDateSection = document.getElementById("currentDay");
currentDateSection.textContent = moment().format("dddd, MMMM Do");

// console.log(localStorage.getItem("8"))
// var save = document.getElementById("8")
// console.log(save)
// save.value = localStorage.getItem("8")

document.getElementById("8").value = localStorage.getItem("8")
document.getElementById("9").value = localStorage.getItem("9")
document.getElementById("10").value = localStorage.getItem("10")
document.getElementById("11").value = localStorage.getItem("11")
document.getElementById("12").value = localStorage.getItem("12")
document.getElementById("13").value = localStorage.getItem("13")
document.getElementById("14").value = localStorage.getItem("14")
document.getElementById("15").value = localStorage.getItem("15")
document.getElementById("16").value = localStorage.getItem("16")
document.getElementById("17").value = localStorage.getItem("17")

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
    console.log(this.previousElementSibling)
    console.log(this.previousElementSibling.value)
    console.log(this.previousElementSibling.id)

    var time = this.previousElementSibling.id
    var userValue = this.previousElementSibling.value
    localStorage.setItem(time, userValue)
  });
}



