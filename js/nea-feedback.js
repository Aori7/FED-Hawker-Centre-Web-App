document.addEventListener("DOMContentLoaded", () => {
  const feedbackData = [
    {
      name: "Customer A",
      rating: 2,
      comment: "Poor hygiene observed.",
      type: "hygiene",
      date: "17/01/2026"
    },
    {
      name: "Customer B",
      rating: 4,
      comment: "Service was friendly.",
      type: "service",
      date: "16/01/2026"
    },
    {
      name: "Customer C",
      rating: 5,
      comment: "Clean environment.",
      type: "hygiene",
      date: "15/01/2026"
    }
  ];

  renderFeedback(feedbackData);

  const filter = document.getElementById("feedbackFilter");
  filter.addEventListener("change", () => {
    const value = filter.value;
    if (value === "all") {
      renderFeedback(feedbackData);
    } else {
      renderFeedback(feedbackData.filter(f => f.type === value));
    }
  });
});

function renderFeedback(list) {
  const grid = document.getElementById("feedbackGrid");
  grid.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "feedback-card";

    card.innerHTML = `
      <strong>${item.name}</strong>
      <p>${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</p>
      <p>${item.comment}</p>
      <small>${item.date}</small>
      <button class="reply-btn">Reply</button>
    `;

    card.querySelector(".reply-btn").addEventListener("click", () => {
      alert("Reply feature is UI-only for demonstration.");
    });

    grid.appendChild(card);
  });
}
