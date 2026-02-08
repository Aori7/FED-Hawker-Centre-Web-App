// nea-dashboard.js
// handles nea dashboard charts only

document.addEventListener("DOMContentLoaded", function () {

  // -------------------------------
  // hygiene grade breakdown (bar)
  // -------------------------------
  const hygieneCanvas = document.getElementById("hygieneChart");

  if (hygieneCanvas) {
    new Chart(hygieneCanvas, {
      type: "bar",
      data: {
        labels: ["A", "B", "C", "D"],
        datasets: [{
          label: "Number of Hawker Centres",
          data: [40, 30, 20, 10], // mock data
          backgroundColor: "#fa8112"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 10 }
          }
        }
      }
    });
  }

  // -------------------------------
  // compliance rate (pie)
  // -------------------------------
  const complianceCanvas = document.getElementById("complianceChart");

  if (complianceCanvas) {
    new Chart(complianceCanvas, {
      type: "pie",
      data: {
        labels: ["Compliant", "Non-Compliant"],
        datasets: [{
          data: [75, 25], // mock percentage
          backgroundColor: ["#4caf50", "#f44336"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    });
  }

  // -------------------------------
  // monthly inspections (bar)
  // -------------------------------
  const monthlyCanvas = document.getElementById("monthlyInspectionChart");

  if (monthlyCanvas) {
    new Chart(monthlyCanvas, {
      type: "bar",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Completed Inspections",
            data: [10, 15, 18, 22],
            backgroundColor: "#fa8112"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

});
