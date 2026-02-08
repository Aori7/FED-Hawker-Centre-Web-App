document.addEventListener("DOMContentLoaded", () => {
  const inspectionData = [
    {
      inspectorId: "0022987382",
      officer: "Officer Tan",
      establishment: "Maxwell Food Centre",
      date: "17/01/2026",
      result: "Pass"
    },
    {
      inspectorId: "0182938592",
      officer: "Officer Lim",
      establishment: "Chinatown Complex",
      date: "16/01/2026",
      result: "Fail"
    },
    {
      inspectorId: "0287268398",
      officer: "Officer Ong",
      establishment: "Tiong Bahru Market",
      date: "15/01/2026",
      result: "Pass"
    }
  ];

  renderInspectionTable(inspectionData);
});

function renderInspectionTable(data) {
  const tbody = document.getElementById("inspectionTableBody");
  tbody.innerHTML = "";

  data.forEach(record => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${record.inspectorId}</td>
      <td>${record.officer}</td>
      <td>${record.establishment}</td>
      <td>${record.date}</td>
      <td>
        <select class="status-select">
          <option value="Pass" ${record.result === "Pass" ? "selected" : ""}>Pass</option>
          <option value="Fail" ${record.result === "Fail" ? "selected" : ""}>Fail</option>
        </select>
      </td>
    `;

    row.querySelector(".status-select").addEventListener("change", () => {
      alert("Inspection outcome updated (UI demo only).");
    });

    tbody.appendChild(row);
  });
}
