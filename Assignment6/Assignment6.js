// ================== NAV HIGHLIGHT ==================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
      link.style.color = "red";
    }
  });
});

// ================== PACKAGES PAGE ==================
const packages = [
  { id: 1, name: "Beach Paradise", destination: "Maldives", durationDays: 5, basePrice: 7500, season: "peak" },
  { id: 2, name: "European Explorer", destination: "France, Italy, Germany", durationDays: 10, basePrice: 19000, season: "off" },
  { id: 3, name: "Desert Adventure", destination: "Dubai", durationDays: 6, basePrice: 8000, season: "normal" }
];

function calculateFinalPrice(pkg) {
  let multiplier = 1;
  switch (pkg.season) {
    case "peak": multiplier = 1.3; break; 
    case "off": multiplier = 0.8; break; 
    default: multiplier = 1;
  }
  return pkg.basePrice * multiplier;
}

function renderPackages() {
  const tbody = document.querySelector("#packageTable tbody");
  if (!tbody) return;
  packages.forEach(pkg => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pkg.name}</td>
      <td>${pkg.destination}</td>
      <td>${pkg.durationDays} Days</td>
      <td>₹${pkg.basePrice}</td>
      <td>₹${calculateFinalPrice(pkg)}</td>
    `;
    tbody.appendChild(row);
  });
}

// ================== BOOKING PAGE ==================
function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const totalSpan = document.getElementById("total");
  const submitBtn = form.querySelector("button");

  function calculateTotal() {
    const name = document.getElementById("name").value.trim();
    const checkIn = new Date(document.getElementById("checkIn").value);
    const checkOut = new Date(document.getElementById("checkOut").value);
    const guests = parseInt(document.getElementById("guests").value) || 1;
    const basePrice = parseInt(document.getElementById("package").value);
    const promo = document.getElementById("promoCode").value.toUpperCase();

    if (!name || isNaN(checkIn) || isNaN(checkOut) || checkOut <= checkIn) {
      totalSpan.textContent = "0";
      submitBtn.disabled = true;
      return;
    }

    let nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    let total = basePrice * nights;

    if (guests > 2) total *= 1.2; // +20%

    switch (promo) {
      case "EARLYBIRD": total *= 0.9; break;
      case "FESTIVE": total *= 0.85; break;
    }

    totalSpan.textContent = total.toFixed(2);
    submitBtn.disabled = false;
  }

  form.addEventListener("input", calculateTotal);
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Booking Submitted! Total: ₹" + totalSpan.textContent);
  });
}

// ================== GALLERY PAGE ==================
function setupGalleryModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.dataset.large;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
}

// ================== INIT ==================
document.addEventListener("DOMContentLoaded", () => {
  renderPackages();
  setupBookingForm();
  setupGalleryModal();
});
