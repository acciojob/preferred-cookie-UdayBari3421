document.addEventListener("DOMContentLoaded", function () {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  const savedFontSize = localStorage.getItem("fontSize");
  const savedFontColor = localStorage.getItem("fontColor");

  if (savedFontSize) {
    fontSizeInput.value = savedFontSize;
    document.body.style.fontSize = savedFontSize + "px";
  }

  if (savedFontColor) {
    fontColorInput.value = savedFontColor;
    document.body.style.color = savedFontColor;
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;

    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("fontColor", fontColor);
  });
});
