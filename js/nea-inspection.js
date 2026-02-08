//nea-inspection.js
//handles inspection status updates 

document.addEventListener("DOMContentLoaded", () => {
  const statusSelects = document.querySelectorAll(".status-select");

  statusSelects.forEach(select => {
    select.addEventListener("change", () => {
      alert(`Inspection outcome updated to: ${select.value}`);
    });
  });
});
