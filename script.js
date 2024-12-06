// Get elements
const darkModeToggle = document.getElementById("dark-mode-toggle");
const moon = document.querySelector(".moon-svg");
const sun = document.querySelector(".sun-svg");

// Check for saved preference
const darkMode = localStorage.getItem("darkMode");

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