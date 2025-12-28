function showSDE() {
    document.getElementById("sde-view").classList.remove("hidden");
    document.getElementById("ml-view").classList.add("hidden");

    document.querySelectorAll(".toggle-btn")[0].classList.add("active");
    document.querySelectorAll(".toggle-btn")[1].classList.remove("active");
}

function showML() {
    document.getElementById("sde-view").classList.add("hidden");
    document.getElementById("ml-view").classList.remove("hidden");

    document.querySelectorAll(".toggle-btn")[0].classList.remove("active");
    document.querySelectorAll(".toggle-btn")[1].classList.add("active");
}

function toggleTheme() {
    const html = document.documentElement;
    html.setAttribute(
        "data-theme",
        html.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
}
