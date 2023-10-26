document.addEventListener("DOMContentLoaded", function() {

// Get the button and dropdown content
const button = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

// Add a click event listener to the button
button.addEventListener("click", function() {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

});