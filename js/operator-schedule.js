document.addEventListener("DOMContentLoaded", () => {

    function createCalendar(config) {
      const {
        gridEl,
        titleEl,
        prevBtn,
        nextBtn,
        promptText
      } = config;
  
      let currentDate = new Date();
      let events = {}; // { 'YYYY-M-D': ['event'] }
  
      function render() {
        gridEl.innerHTML = "";
  
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
  
        titleEl.textContent = currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric"
        });
  
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
  
        // empty slots
        for (let i = 0; i < firstDay; i++) {
          gridEl.appendChild(document.createElement("div"));
        }
  
        for (let day = 1; day <= daysInMonth; day++) {
          const dateKey = `${year}-${month + 1}-${day}`;
  
          const cell = document.createElement("div");
          cell.className = "calendar-day";
  
          const dateLabel = document.createElement("div");
          dateLabel.className = "date";
          dateLabel.textContent = day;
          cell.appendChild(dateLabel);
  
          if (events[dateKey]) {
            events[dateKey].forEach(text => {
              const ev = document.createElement("div");
              ev.className = "event";
              ev.textContent = text;
              cell.appendChild(ev);
            });
          }
  
          cell.addEventListener("click", () => {
            const title = prompt(promptText);
            if (!title) return;
  
            if (!events[dateKey]) events[dateKey] = [];
            events[dateKey].push(title);
            render();
          });
  
          gridEl.appendChild(cell);
        }
      }
  
      prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        render();
      });
  
      nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        render();
      });
  
      render();
    }
  
    // Cleaning Calendar

    createCalendar({
      gridEl: document.getElementById("calendarGrid"),
      titleEl: document.getElementById("monthYear"),
      prevBtn: document.getElementById("prevMonth"),
      nextBtn: document.getElementById("nextMonth"),
      promptText: "Add cleaning / inspection event:"
    });

    // Maintenance Calendar
    createCalendar({
      gridEl: document.getElementById("maintenanceCalendarGrid"),
      titleEl: document.getElementById("monthYearMaintenance"),
      prevBtn: document.getElementById("prevMonthMaintenance"),
      nextBtn: document.getElementById("nextMonthMaintenance"),
      promptText: "Add maintenance event:"
    });
  
  });