//nea-common.js
//shared logic for nea pages (navigation + logout)

//run after dom loaded
document.addEventListener("DOMContentLoaded", function () {

    //map nav item text or data-page to html files
    const pageMap = {
        home: "nea-main.html",
        dashboard: "nea-dashboard.html",
        inspections: "nea-inspection.html",
        feedback: "nea-feedback.html",
        "hawker centre": "nea-main.html"
    };

    //attach click handlers to nav items
    document.querySelectorAll(".nea-nav a, .nea-nav li, .nea-nav button").forEach(item => {
        item.addEventListener("click", function () {
            const key = this.dataset.page || this.textContent.trim().toLowerCase();
            if (pageMap[key]) {
                window.location.href = pageMap[key];
            }
        });
    });

    //highlight active page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nea-nav a, .nea-nav li, .nea-nav button").forEach(item => {
        const key = item.dataset.page || item.textContent.trim().toLowerCase();
        if (pageMap[key] === currentPage) {
            item.classList.add("active");
        }
    });

    //logout button
    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
//end of nea-common.js