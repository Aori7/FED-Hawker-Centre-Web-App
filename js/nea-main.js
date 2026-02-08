//nea-main.js
//charts for nea main (home) page

document.addEventListener("DOMContentLoaded", () => {

  //hygiene grade breakdown
  new Chart(document.getElementById("hygieneChart"), {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [{
        data: [40, 30, 35, 20],
        backgroundColor: "#888"
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });

  //compliance rate pie
  new Chart(document.getElementById("complianceChart"), {
    type: "pie",
    data: {
      labels: ["Compliant", "Non-Compliant"],
      datasets: [{
        data: [75, 25],
        backgroundColor: ["#e0e0e0", "#222"]
      }]
    }
  });

  //monthly inspections
  new Chart(document.getElementById("monthlyChart"), {
    type: "bar",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Compliant",
          data: [40, 45, 55, 60],
          backgroundColor: "#666"
        },
        {
          label: "Non-Compliant",
          data: [20, 25, 35, 40],
          backgroundColor: "#bbb"
        }
      ]
    },
    options: {
      scales: { y: { beginAtZero: true } }
    }
  });

});
