document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     STATUS DROPDOWN HANDLING
     ========================= */
  const statusSelects = document.querySelectorAll(".status-select");

  statusSelects.forEach(select => {
    select.addEventListener("change", () => {
      alert(`Feedback status updated to: ${select.value}`);
    });
  });


  /* =========================
     FILTER DROPDOWNS
     ========================= */
  const filterSelects = document.querySelectorAll(".feedback-filter");

  filterSelects.forEach(filter => {
    filter.addEventListener("change", () => {
      const value = filter.value.toLowerCase();

      const section = filter.closest(".feedback-section");
      if (!section) return;

      const cards = section.querySelectorAll(".feedback-card");

      cards.forEach(card => {
        if (value === "all") {
          card.style.display = "block";
        } else {
          const text = card.innerText.toLowerCase();
          card.style.display = text.includes(value) ? "block" : "none";
        }
      });
    });
  });


  /* =========================
     REPLY BUTTON (UI ONLY)
     ========================= */
  const replyButtons = document.querySelectorAll(".reply-btn");

  replyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".feedback-card");
      if (!card) return;

      let replyBox = card.querySelector(".vendor-reply");

      // toggle existing reply
      if (replyBox) {
        replyBox.remove();
        return;
      }

      // create reply (mock)
      replyBox = document.createElement("div");
      replyBox.className = "vendor-reply";
      replyBox.innerHTML = `
        <strong>Vendor</strong>
        Thank you for your feedback. We apologise for the inconvenience and will address this issue promptly.
      `;

      card.appendChild(replyBox);
    });
  });

});
