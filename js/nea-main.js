// nea-main.js
// charts for nea main (home) page

new Chart(document.getElementById("hygieneChart"), {
    type: "bar",
    data: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
            data: [40, 30, 35, 20],
            backgroundColor: "#8c8c8c"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
    }
});

new Chart(document.getElementById("complianceChart"), {
    type: "pie",
    data: {
        labels: ["Compliant", "Non-Compliant"],
        datasets: [{
            data: [75, 25],
            backgroundColor: ["#e0e0e0", "#222"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

new Chart(document.getElementById("monthlyChart"), {
    type: "bar",
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Compliant",
                data: [40, 45, 55, 60],
                backgroundColor: "#555"
            },
            {
                label: "Non-Compliant",
                data: [20, 25, 35, 40],
                backgroundColor: "#ccc"
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
// end of nea-main.js