// nea-main.js
// charts for nea main (home) page

// --------------------
// Hygiene Grade (Bar)
// --------------------
new Chart(document.getElementById("hygieneChart"), {
    type: "bar",
    data: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
            label: "Number of Stalls",
            data: [40, 30, 35, 20],
            backgroundColor: "#888888",
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: "#eee" }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});


// --------------------
// Compliance Rate (Pie)
// --------------------
new Chart(document.getElementById("complianceChart"), {
    type: "pie",
    data: {
        labels: ["Compliant", "Non-Compliant"],
        datasets: [{
            data: [75, 25],
            backgroundColor: ["#e0e0e0", "#222222"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 18
                }
            }
        }
    }
});


// --------------------
// Monthly Inspections
// --------------------
new Chart(document.getElementById("monthlyChart"), {
    type: "bar",
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Compliant",
                data: [40, 45, 55, 60],
                backgroundColor: "#555555",
                borderRadius: 6
            },
            {
                label: "Non-Compliant",
                data: [20, 25, 35, 40],
                backgroundColor: "#bfbfbf",
                borderRadius: 6
            }
        ]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false
}

});
// end of nea-main.js
