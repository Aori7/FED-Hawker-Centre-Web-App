// nea-main.js
// charts for nea main (home) page
// nea-main.js

const commonOptions = {
    responsive: true,
    maintainAspectRatio: false, // 🔒 VERY IMPORTANT
    animation: false,
    plugins: {
        legend: {
            position: "top"
        }
    }
};

// Hygiene Grade Breakdown (Bar)
new Chart(document.getElementById("hygieneChart"), {
    type: "bar",
    data: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
            data: [40, 30, 35, 20],
            backgroundColor: "#8e8e8e",
            borderRadius: 6
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Compliance Rate (Pie)
new Chart(document.getElementById("complianceChart"), {
    type: "pie",
    data: {
        labels: ["Compliant", "Non-Compliant"],
        datasets: [{
            data: [75, 25],
            backgroundColor: ["#e0e0e0", "#222222"]
        }]
    },
    options: commonOptions
});

// Monthly Inspections (Bar)
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
                backgroundColor: "#c9c9c9"
            }
        ]
    },
    options: {
        ...commonOptions,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
// end of nea-main.js