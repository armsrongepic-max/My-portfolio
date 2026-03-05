// Welcome Message
alert("Welcome to Strong-Tech's Portfolio Website!");

// Change Header Color When Clicked
const header = document.querySelector("header h1");

header.addEventListener("click", function () {
    header.style.color = "red";
});

// Contact Form Validation Message
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stops page refresh

    alert("Thank you for contacting me! I will reply soon.");

    form.reset(); // Clears form after submit
});
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
