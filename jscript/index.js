
document.addEventListener("DOMContentLoaded", function() {
    const modeSelector = document.getElementById("modeSelector")

    modeSelector.addEventListener("change", function() {
        const selectedMode = modeSelector.value

        if (selectedMode === "dark") {
            darkMode()
        } else if (selectedMode === "light") {
            lightMode()
        }
    });
});

function darkMode() {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
}

function lightMode() {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
}
