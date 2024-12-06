const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<p>Please give valid height ${height}</p>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<p>Please give valid weight ${weight}</p>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<p>You are Under Weight 🥺</p> <p> Your BMI is <span>${bmi}</span></p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<p>You have Normal Weight 🥳</p> <p> Your BMI is <span>${bmi}</span></p>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<p>You are Over Weight 😶‍🌫️</p> <p> Your BMI is <span>${bmi}</span></p>`;
    }
  }
});
