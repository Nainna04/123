
document.addEventListener("DOMContentLoaded", () => {
  // Home button
  const homeButton = document.querySelector(".button.primary");

  if (homeButton) {
    homeButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Welcome to my professional homepage!");
    });
  }

  // Appointment date
  const dateInput = document.getElementById("preferred-date");

  if (dateInput) {
    dateInput.addEventListener("change", () => {
      if (dateInput.value) {
        alert(`Your selected date is ${dateInput.value}`);
      }
    });
  }
});
