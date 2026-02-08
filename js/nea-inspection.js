document.addEventListener("DOMContentLoaded", () => {
  fetch("data/nea-inspections.json")
    .then(res => res.json())
    .then(data => renderInspectionTable(data))
    .catch(err => console.error("Failed to load inspection data", err));
});

function renderInspectionTable(records) {
  const tbody = document.getElementById("inspectionTableBody");
  tbody.innerHTML = "";

  records.forEach(record => {
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
      alert("Inspection outcome updated (UI demo only)");
    });

    tbody.appendChild(row);
  });
}
