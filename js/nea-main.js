// nea-main.js
// charts for nea main (home) page

const commonOptions = {
    responsive: true,
    maintainAspectRatio: false, // 🔒 critical for fixed card sizing
    animation: false,
    plugins: {
        legend: {
            display: true,
            position: "top",
            labels: {
                boxWidth: 14,
                padding: 12
            }
        }
    },
    layout: {
        padding: 10
    }
};

/* =========================
   Hygiene Grade Breakdown
   ========================= */
new Chart(document.getElementById("hygieneChart"), {
    type: "bar",
    data: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
            label: "Number of Stalls",   // ✅ fixes 'undefined'
            data: [40, 30, 35, 20],
            backgroundColor: "#8e8e8e",
            borderRadius: 6
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            legend: { display: false } // cleaner like Figma
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 10 }
            }
        }
    }
});

/* =========================
   Compliance Rate
   ========================= */
new Chart(document.getElementById("complianceChart"), {
    type: "pie",
    data: {
        labels: ["Compliant", "Non-Compliant"],
        datasets: [{
            data: [75, 25],
            backgroundColor: ["#e0e0e0", "#222222"],
            borderWidth: 0
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            legend: {
                position: "top"
            }
        }
    }
});

/* =========================
   Monthly Inspections
   ========================= */
new Chart(document.getElementById("monthlyChart"), {
    type: "bar",
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Compliant",
                data: [40, 45, 55, 60],
                backgroundColor: "#555",
                borderRadius: 6
            },
            {
                label: "Non-Compliant",
                data: [20, 25, 35, 40],
                backgroundColor: "#c9c9c9",
                borderRadius: 6
            }
        ]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 10 }
            }
        }
    }
});
// end of nea-main.js