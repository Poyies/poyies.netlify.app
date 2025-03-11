// document.addEventListener("DOMContentLoaded", function () {
//     const darkModeToggle = document.getElementById("dark-mode-toggle"); // Select existing button
//     const body = document.body;

//     if (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme")) {
//         body.classList.add("dark-mode");
//         darkModeToggle.textContent = "Light ☀️";
//     }

//     if (localStorage.getItem("theme") === "dark") {
//         body.classList.add("dark-mode");
//         darkModeToggle.textContent = "Light ☀️";
//     } else if (localStorage.getItem("theme") === "light") {
//         body.classList.remove("dark-mode");
//         darkModeToggle.textContent = "Dark 🌙";
//     }

//     darkModeToggle.addEventListener("click", function () {
//         body.classList.toggle("dark-mode");

//         if (body.classList.contains("dark-mode")) {
//             localStorage.setItem("theme", "dark");
//             darkModeToggle.textContent = "Light ☀️";
//         } else {
//             localStorage.setItem("theme", "light");
//             darkModeToggle.textContent = "Dark🌙";
//         }
//     });    
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const profileContainer = document.querySelector(".profile-container");
//     const factOverlay = document.querySelector(".fact-overlay");
//     const factText = document.querySelector(".fact-overlay span");

//     const funFacts = [        
//         "My favorite anime is Dragon Ball Super 🐉.",        
//         "I used to be an artist before 🎨.",
//         "I'm a coffee lover! ☕",
//         "I'm a lefty... yeah, I play a right-handed guitar upside down. 🤘🎸",
//         "I love traveling with my wife and my son, Cody 🥰.",        
//         "I play the drums too! Just a little bit 🥁🤏."
//     ];

//     let hideTimeout; 

//     function showFunFact() {
//         const randomIndex = Math.floor(Math.random() * funFacts.length);
//         factText.textContent = '"' + funFacts[randomIndex] + '"';

//         factOverlay.style.opacity = "1";
//         factOverlay.style.visibility = "visible";

//         clearTimeout(hideTimeout);

//         hideTimeout = setTimeout(() => {
//             factOverlay.style.opacity = "0";
//             factOverlay.style.visibility = "hidden";
//         }, 3000);
//     }

//     profileContainer.addEventListener("click", showFunFact);
// });



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

    // Function to apply the correct theme
    function applyTheme() {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "Light ☀️";
        } else if (storedTheme === "light") {
            body.classList.remove("dark-mode");
            darkModeToggle.textContent = "Dark 🌙";
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // If no stored preference, follow system settings
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "Light ☀️";
        }
    }

    // Function to toggle dark mode manually
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeToggle.textContent = "Light ☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeToggle.textContent = "Dark 🌙";
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

    // Apply theme on page load
    applyTheme();

    // Listen for Dark Mode toggle button click
    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Listen for system Dark Mode changes (for mobile users)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (!localStorage.getItem("theme")) {
            if (e.matches) {
                body.classList.add("dark-mode");
                darkModeToggle.textContent = "Light ☀️";
            } else {
                body.classList.remove("dark-mode");
                darkModeToggle.textContent = "Dark 🌙";
            }
        }
    });

    // Listen for clicks on the profile picture to show a fun fact
    profileContainer.addEventListener("click", showFunFact);
});
