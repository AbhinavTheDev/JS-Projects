// Get elements
const darkModeToggle = document.getElementById("dark-mode-toggle");
const moon = document.querySelector(".moon-svg");
const sun = document.querySelector(".sun-svg");
const container = document.querySelector(".container");

// Check for saved preference
const darkMode = localStorage.getItem("darkMode");

// Content Integration
const data = [
  { name: "BMI Calculator", link: "./bmi_calc/index.html", img: "./assets/bmi_calc.png" },
  { name: "Calculator", link: "./calc/index.html", img: "./assets/calc.png" },
  { name: "Color Changer", link: "./color_switcher/index.html", img: "./assets/color_switcher.png" },
  { name: "Digital Clock", link: "./clock/index.html", img: "./assets/clock.png" },
  { name: "Keyboard Checker", link: "./key_checker/index.html", img: "./assets/key_checker.png" },
  { name: "Number Game", link: "./number_game/index.html", img: "./assets/number_game.png" },
];

for (let i = 0; i < data.length; i++) {
  container.innerHTML += 
  `
        <div class="ProContainer">
        <div class="imgCover">
        <img src=${data[i].img} alt="Project Cover">
        </div>
        <div class="info">
            <h2>
              ${data[i].name}
            </h2>
            <a href=${data[i].link}>Try Now</a>
        </div>
        </div>
  `
}

// Initialize dark mode based on saved preference
if (darkMode === "enabled") {
  document.documentElement.classList.add("dark");
  darkModeToggle.checked = true;
  moon.classList.add("hidden");
  sun.classList.remove("hidden");
}

// Handle toggle changes
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    // Enable dark mode
    document.documentElement.classList.add("dark");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    localStorage.setItem("darkMode", "enabled");
  } else {
    // Disable dark mode
    document.documentElement.classList.remove("dark");
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
    localStorage.setItem("darkMode", null);
  }
});
