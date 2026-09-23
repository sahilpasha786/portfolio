javascript
// Portfolio loaded
console.log("Sahil Pasha Portfolio Loaded");

// Add a small scroll effect to the navigation
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(7, 11, 20, 0.95)";
    } else {
        header.style.background = "rgba(7, 11, 20, 0.80)";
    }

});

