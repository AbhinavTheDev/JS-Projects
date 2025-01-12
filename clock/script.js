const clock = document.getElementById("clock");
const analogClock = document.getElementById("analog-clock");
const toggleBtns = document.querySelectorAll('.toggle-btn');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Toggle functionality
toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if(btn.dataset.clock === 'digital') {
      clock.classList.add('active');
      analogClock.classList.remove('active');
    } else {
      clock.classList.remove('active');
      analogClock.classList.add('active');
    }
  });
});

// Digital Clock
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString("en-US");
}, 1000);

// Analog Clock
function setAnalogClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  
  const secondsDegrees = ((seconds / 60) * 360);
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
  const hoursDegrees = ((hours % 12) / 12 * 360) + ((minutes/60)*30);
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setAnalogClock, 1000);
setAnalogClock(); // Initial call