import { data } from "./data.js";
import { logos } from "./logos.js";
// Get elements
const darkModeToggle = document.querySelector(".cb");
const container = document.querySelector(".container");

// Check for saved preference
const darkMode = localStorage.getItem("darkMode");
const placeholder = "./assets/placeholder.jpg";
let info =
  "To Be Added Very Soon! To Be Added Very Soon! To Be Added Very Soon!";

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
            ${data[i].tags
              .map((tag) => {
                return `<li>${logos[tag.toLowerCase()]}</li>`;
              })
              .join("")}
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
