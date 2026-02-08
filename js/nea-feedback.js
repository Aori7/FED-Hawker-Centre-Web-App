document.addEventListener("DOMContentLoaded", () => {
  fetch("data/nea-feedback.json")
    .then(res => res.json())
    .then(data => {
      renderFeedback(data);
      setupFilter(data);
    })
    .catch(err => console.error("Failed to load feedback data", err));
});

function renderFeedback(feedbackList) {
  const container = document.getElementById("feedbackGrid");
  container.innerHTML = "";

  feedbackList.forEach(item => {
    const card = document.createElement("div");
    card.className = "feedback-card";

    card.innerHTML = `
      <h4>${item.name}</h4>
      <p class="stars">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</p>
      <p>${item.comment}</p>
      <small>${item.date}</small>
      <button class="reply-btn">Reply</button>
    `;

    card.querySelector(".reply-btn").addEventListener("click", () => {
      alert("Reply feature is UI-only for FED demo");
    });

    container.appendChild(card);
  });
}

function setupFilter(allFeedback) {
  const filter = document.getElementById("feedbackFilter");

  filter.addEventListener("change", () => {
    const value = filter.value;

    if (value === "all") {
      renderFeedback(allFeedback);
    } else {
      const filtered = allFeedback.filter(f => f.type === value);
      renderFeedback(filtered);
    }
  });
}
