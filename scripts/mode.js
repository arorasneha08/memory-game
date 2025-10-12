const user = JSON.parse(localStorage.getItem("memoryUser"));
const welcomeText = document.getElementById("welcome-text");
const modal = document.getElementById("mode-modal");

if (!user) {
    window.location.href = "../pages/register.html";
}

welcomeText.textContent = `Welcome back, ${user.name}! Ready to play?`;

const modeButtons = document.querySelectorAll(".mode-btn");

modeButtons.forEach(button => {
    button.addEventListener("click", () => {
        let mode = "";

        if (button.classList.contains("single")) {
            mode = "single";
        } else {
            mode = "multi";
        }

        localStorage.setItem("selectedMode", mode);

        modal.classList.add("show");

        setTimeout(() => {
            window.location.href = "../pages/level.html";
        }, 1000);
    });
});
