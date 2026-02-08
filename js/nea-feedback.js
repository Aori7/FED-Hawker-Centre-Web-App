document.addEventListener("DOMContentLoaded", () => {

  /* STATUS CHANGE */
  document.querySelectorAll(".status-select").forEach(select => {
    select.addEventListener("change", () => {
      alert(`Feedback status updated to: ${select.value}`);
    });
  });

  /* FILTER */
  document.querySelectorAll(".feedback-filter").forEach(filter => {
    filter.addEventListener("change", () => {
      const value = filter.value.toLowerCase();
      const section = filter.closest(".feedback-section");
      section.querySelectorAll(".feedback-card").forEach(card => {
        card.style.display =
          value === "all" || card.innerText.toLowerCase().includes(value)
          ? "block"
          : "none";
      });
    });
  });

  /* REPLY */
  document.querySelectorAll(".reply-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".feedback-card");
      let reply = card.querySelector(".vendor-reply");

      if(reply){
        reply.remove();
      }else{
        reply = document.createElement("div");
        reply.className = "vendor-reply";
        reply.innerHTML = "<strong>Vendor:</strong> Thank you for your feedback. We will address this issue.";
        card.appendChild(reply);
      }
    });
  });

});
/* nea-feedback.js */