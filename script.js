// Get elements
const darkModeToggle = document.querySelector(".cb");
const container = document.querySelector(".container");

// Check for saved preference
const darkMode = localStorage.getItem("darkMode");
const placeholder = "./assets/placeholder.jpg";
let info =
  "To Be Added Very Soon! To Be Added Very Soon! To Be Added Very Soon!";
// Content Integration
/**
 * Data of Projects
 * @string name - Name of the project
 * @string link - Link to the project
 * @string img - Image of the project
 * @string details - Details of the project
 * @Array tags - Tags of the project 
*/
const data = [
  {
    name: "BMI Calculator",
    link: "./bmi_calc/index.html",
    img: "./assets/bmi_calc.png",
  },
  { name: "Calculator", link: "./calc/index.html", img: "./assets/calc.png" },
  {
    name: "Color Changer",
    link: "./color_switcher/index.html",
    img: "./assets/color_switcher.png",
  },
  {
    name: "Digital Clock",
    link: "./clock/index.html",
    img: "./assets/clock.png",
  },
  {
    name: "Keyboard Checker",
    link: "./key_checker/index.html",
    img: "./assets/key_checker.png",
  },
  {
    name: "Number Game",
    link: "./number_game/index.html",
    img: "./assets/number_game.png",
  },
  { name: "terminal", link: "./terminal/index.html" },
  { name: "SVGs", link: "./svg_col/index.html" },
];


for (let i = 0; i < data.length; i++) {
  let image = data[i].img ? data[i].img : placeholder;
  let description = data[i].details ? data[i].details : info;
  container.innerHTML += `
       <div class="cardSection">
        <div class="cardContainer">
        <figure class="imgContainer">
        
          <img src=${image} alt="Project Cover"> 
        </figure>
        <div class="info">
             <h2>${data[i].name}</h2>
             <p>${info}</p>
          <div class="tags">
          <div class="action">
          <a href=${data[i].link}>Try Now<span class="sr-only"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          </a>
          </div>
          <div class="badges">
          <ul>
          <li>
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
            </svg>
          </li>
          <li>
            
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
            </svg>
          
          </li>
          </ul>
          </div>
          </div>
        </div>
        </div>
        </div>
  `;
}

// Initialize dark mode based on saved preference
if (darkMode === "enabled") {
  document.documentElement.classList.add("dark");
  darkModeToggle.checked = true;
}

// Handle toggle changes
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    // Enable dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    // Disable dark mode
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", null);
  }
});
