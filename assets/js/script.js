document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const profileContainer = document.querySelector(".profile-container");
    const factOverlay = document.querySelector(".fact-overlay");
    const factText = document.querySelector(".fact-overlay span");

    // Fun Facts Array
    const funFacts = [        
        "My favorite anime is Dragon Ball Super 🐉.",        
        "I used to be an artist before 🎨.",
        "I'm a coffee lover! ☕",
        "I'm a lefty... yeah, I play a right-handed guitar upside down. 🤘🎸",
        "I love traveling with my wife and my son, Cody 🥰.",        
        "I play the drums too! Just a little bit 🥁🤏."
    ];

    let hideTimeout;

    // Function to apply saved theme
    function applyTheme() {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️";
        } else {
            body.classList.remove("dark-mode");
            darkModeToggle.textContent = "🌙";
        }
    }

    // Function to toggle Dark Mode manually
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeToggle.textContent = "🌙";
        }
    }

    // Function to show a random fun fact
    function showFunFact() {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        factText.textContent = '"' + funFacts[randomIndex] + '"';

        factOverlay.style.opacity = "1";
        factOverlay.style.visibility = "visible";

        clearTimeout(hideTimeout);

        hideTimeout = setTimeout(() => {
            factOverlay.style.opacity = "0";
            factOverlay.style.visibility = "hidden";
        }, 3000);
    }

    // Apply saved theme on page load
    applyTheme();

    // Listen for Dark Mode toggle button click
    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Listen for clicks on the profile picture to show a fun fact
    profileContainer.addEventListener("click", showFunFact);
});
