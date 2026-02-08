document.addEventListener("DOMContentLoaded", () => {
  const statusSelects = document.querySelectorAll(".status-select");

  statusSelects.forEach(select => {
    select.addEventListener("change", () => {
      alert(`Feedback status updated to: ${select.value}`);
    });
  });
});
