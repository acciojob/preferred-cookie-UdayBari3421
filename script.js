document.addEventListener("DOMContentLoaded", function () {
  // Check for saved preferences on page load
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Get saved preferences from localStorage
  const savedFontSize = localStorage.getItem("fontSize");
  const savedFontColor = localStorage.getItem("fontColor");

  // Set input values based on saved preferences
  if (savedFontSize) {
    fontSizeInput.value = savedFontSize;
    document.body.style.fontSize = savedFontSize + "px";
  }

  if (savedFontColor) {
    fontColorInput.value = savedFontColor;
    document.body.style.color = savedFontColor;
  }

  // Add submit event listener to the form
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user preferences
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Apply styles to the body
    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;

    // Store preferences in localStorage
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("fontColor", fontColor);
  });
});
