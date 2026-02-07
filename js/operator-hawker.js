document.addEventListener("DOMContentLoaded", () => {
    //Elements
    const hawkerSelect = document.getElementById("hawkerCentreSelect");
    const metricSelect = document.getElementById("metricSelect");
  
    const hawkerNameEl = document.querySelector(".hawker-details h3");
    const hawkerDescEl = document.querySelector(".hawker-desc");
    const hawkerImgEl = document.querySelector(".hawker-img img");
  
    const chartSummary = document.getElementById("chartSummary");
    const summaryA = document.getElementById("summaryA");
    const summaryB = document.getElementById("summaryB");
  
    const canvas = document.getElementById("pieChart");
    const ctx = canvas ? canvas.getContext("2d") : null;
  
    //Data (edit anytime)
    const hawkers = {
      laupasat: {
        name: "Lau Pa Sat",
        desc: "Lau Pa Sat is a historic food market in the CBD with many popular stalls.",
        img: "images/bg-img2.jpg",
        latlng: [1.2800, 103.8500],
        metrics: {
          profitLost: { aLabel: "Profit", a: 55, bLabel: "Lost", b: 45 },
          reviews: { aLabel: "Positive", a: 70, bLabel: "Negative", b: 30 },
          hygiene: { aLabel: "A", a: 80, bLabel: "Non-A", b: 20 }
        }
      },
  
      maxwell: {
        name: "Maxwell Food Centre",
        desc: "Maxwell Food Centre is popular near Chinatown and crowded during lunch hours.",
        img: "images/bg-img2.jpg",
        latlng: [1.2802, 103.8443],
        metrics: {
          profitLost: { aLabel: "Profit", a: 65, bLabel: "Lost", b: 35 },
          reviews: { aLabel: "Positive", a: 60, bLabel: "Negative", b: 40 },
          hygiene: { aLabel: "A", a: 75, bLabel: "Non-A", b: 25 }
        }
      },
  
      tanjongpagar: {
        name: "Tanjong Pagar Plaza",
        desc: "A neighbourhood hawker centre with local favourites and daily regulars.",
        img: "images/bg-img2.jpg",
        latlng: [1.2766, 103.8435],
        metrics: {
          profitLost: { aLabel: "Profit", a: 58, bLabel: "Lost", b: 42 },
          reviews: { aLabel: "Positive", a: 68, bLabel: "Negative", b: 32 },
          hygiene: { aLabel: "A", a: 70, bLabel: "Non-A", b: 30 }
        }
      }
    };
  
    //Chart helpers
    function drawPie(a, b) {
      if (!ctx || !canvas) return;
  
      const total = a + b;
      const ratio = total ? a / total : 0;
  
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r = Math.min(cx, cy) - 10;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // base circle (B portion)
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#0b0b0f";
      ctx.fill();
  
      // A slice (orange)
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * ratio));
      ctx.closePath();
      ctx.fillStyle = "#ff7a00";
      ctx.fill();
    }
  
    function updateSummary(m) {
      // update right side text + numbers
      if (!chartSummary) return;
  
      // if you want to keep your spans, update them
      if (summaryA) summaryA.textContent = m.a;
      if (summaryB) summaryB.textContent = m.b;
  
      // also update labels by rewriting the summary block
      chartSummary.innerHTML = `
        <p><strong>${m.aLabel}</strong> - <span id="summaryA">${m.a}</span></p>
        <p><strong>${m.bLabel}</strong> - <span id="summaryB">${m.b}</span></p>
      `;
    }
  
    //State
    let currentHawkerKey = null;
  
    function renderMetric() {
      if (!currentHawkerKey) return;
      const hawker = hawkers[currentHawkerKey];
      if (!hawker) return;
  
      const metricKey = metricSelect ? metricSelect.value : "profitLost";
      const metric = hawker.metrics[metricKey];
  
      if (!metric) return;
  
      drawPie(metric.a, metric.b);
      updateSummary(metric);
    }
  
    function setHawker(key) {
      const hawker = hawkers[key];
      if (!hawker) return;
  
      currentHawkerKey = key;
  
      // update card
      if (hawkerNameEl) hawkerNameEl.textContent = hawker.name;
      if (hawkerDescEl) hawkerDescEl.textContent = hawker.desc;
      if (hawkerImgEl) {
        hawkerImgEl.src = hawker.img;
        hawkerImgEl.alt = hawker.name;
      }
  
      // update map
      if (map) {
        map.setView(hawker.latlng, 15);
        if (marker) map.removeLayer(marker);
        marker = L.marker(hawker.latlng).addTo(map).bindPopup(hawker.name);
      }
  
      // draw selected metric
      renderMetric();
    }
  
    //Events
    if (hawkerSelect) {
      hawkerSelect.addEventListener("change", (e) => {
        const key = e.target.value;
        setHawker(key);
      });
    }
  
    if (metricSelect) {
      metricSelect.addEventListener("change", () => {
        renderMetric();
      });
    }
    let map = null;
    let marker = null;
    setHawker("laupasat")
    {
        if (map) {
        map.setView(hawker.latlng, 15);
        if (marker) map.removeLayer(marker);
        marker = L.marker(hawker.latlng).addTo(map).bindPopup(hawker.name);
      }
    }
  });
  