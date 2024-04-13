const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const color = "#";
  for (const i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        break;
      case "red":
        body.style.backgroundColor = e.target.id;
        break;
      case "random":
        body.style.backgroundColor = getRandomColor();
        break;
      default:
        break;
    }
  });
});
