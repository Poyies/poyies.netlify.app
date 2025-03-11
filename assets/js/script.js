document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle"); // Select existing button
    const body = document.body;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme")) {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light ☀️";
    }

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light ☀️";
    } else if (localStorage.getItem("theme") === "light") {
        body.classList.remove("dark-mode");
        darkModeToggle.textContent = "Dark 🌙";
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeToggle.textContent = "Light ☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeToggle.textContent = "Dark🌙";
        }
    });    
});
document.addEventListener("DOMContentLoaded", function () {
    const profileContainer = document.querySelector(".profile-container");
    const factOverlay = document.querySelector(".fact-overlay");
    const factText = document.querySelector(".fact-overlay span");

    const funFacts = [        
        "My favorite anime is Dragon Ball Super 🐉.",        
        "I used to be an artist before 🎨.",
        "I'm a coffee lover! ☕",
        "I'm a lefty... yeah, I play a right-handed guitar upside down. 🤘🎸",
        "I love traveling with my wife and my son, Cody 🥰.",        
        "I play the drums too! Just a little bit 🥁🤏."
    ];

    let hideTimeout; 

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

    profileContainer.addEventListener("click", showFunFact);
});


