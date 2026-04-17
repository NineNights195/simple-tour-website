/* ============================================================
   TripTour – Tour Data & Interactive Logic
   ============================================================ */
   
const TOURS = [
{
  id: 1,
  title: "Bangkok - City of Angel",
  location: "Bangkok, Thailand",
  category: "Central",
  duration: "7 Days",
  groupSize: "Max 12",
  rating: 4.9,
  reviews: 312,
  price: 699,
  image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
  description: "Lose yourself in the vibrant heartbeat of Thailand. From gilded temples shimmering in the sun to the intoxicating aromas of bustling street food markets, Bangkok is a captivating symphony for the senses.",
  fullDescription: "Embark on an unforgettable journey through the 'City of Angels,' where ancient traditions gracefully collide with a modern, electric pulse. Drift along the Chao Phraya River on a traditional longtail boat, marvel at the breathtaking majesty of the Grand Palace, and find serenity within the sacred walls of Wat Pho. As twilight descends, watch the sprawling skyline ignite with color from an exclusive rooftop oasis, before diving into the endless culinary wonders of vibrant night markets. This carefully curated tour captures the very soul of Bangkok, offering an exquisite blend of spiritual tranquility and exhilarating urban energy.",
  highlights: [
    "Guided tour of the majestic Grand Palace and Wat Phra Kaew",
    "Private longtail boat cruise along the Chao Phraya River",
    "Traditional Thai massage experience at Wat Pho",
    "Street food tasting tour in vibrant Chinatown (Yaowarat)",
    "Sunset cocktails at a premium rooftop bar",
    "All airport transfers included from BKK or DMK"
  ]
},
{
  id: 2,
  title: "Chiang Mai - Inthanon city",
  location: "Chiang Mai, Thailand",
  category: "Northern",
  duration: "5 Days",
  groupSize: "Max 10",
  rating: 4.8,
  reviews: 245,
  price: 649,
  image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=600&q=80",
  description: "Awaken your spirit in the misty embrace of Doi Inthanon. Journey through ancient cloud forests, stand beside thundering waterfalls, and gaze across endless emerald valleys from the roof of Thailand.",
  fullDescription: "Escape to the tranquil heights of Chiang Mai and discover the enchanting beauty of Doi Inthanon, Thailand's highest peak. This immersive expedition invites you to wander through ethereal cloud forests dripping with vibrant moss and wild orchids. Feel the cool mountain mist on your face at the majestic Wachirathan Waterfall, and find peace at the stunning Royal Twin Pagodas that soar above the sweeping valleys. Along the way, you'll connect with the rich heritage of the local hill tribes, warming your soul with freshly brewed, locally grown highland coffee. Let the serene majesty of this mountain sanctuary rejuvenate your heart and mind.",
  highlights: [
    "Stand at the highest point in Thailand at Doi Inthanon Summit",
    "Wander the mystical, moss-draped Ang Ka Nature Trail",
    "Marvel at the panoramic views from the Royal Twin Pagodas",
    "Experience the thundering beauty of Wachirathan Waterfall",
    "Visit a local hill tribe village and taste fresh highland coffee"
  ]
},
{
  id: 3,
  title: "Phuket - The City of Blue sea",
  location: "Phuket, Thailand",
  category: "Western",
  duration: "6 Days",
  groupSize: "Max 10",
  rating: 4.9,
  reviews: 380,
  price: 779,
  image: "https://elephantjunglesanctuary.com/wp-content/uploads/2025/12/things-to-do-in-phuket.webp",
  description: "Immerse yourself in the crystalline embrace of the Andaman Sea. Let the powdery white sands of Phuket become your sanctuary as you discover hidden lagoons, vibrant coral reefs, and spectacular coastal sunsets.",
  fullDescription: "Surrender to the ultimate tropical paradise in Phuket, the radiant Pearl of the Andaman. This luxurious island escape invites you to unwind on pristine, sun-drenched shores kissed by mesmerizing azure waters. Sail on a private catamaran to hidden island archipelagos, snorkel through a kaleidoscope of marine life, and leave your footprints on secluded beaches. Beyond the water, wander through the romantic streets of Old Phuket Town, where vibrant Sino-Portuguese architecture frames bustling night markets and charming cafes. As twilight falls, savor world-class seafood while watching the sky ignite in brilliant hues over the tranquil ocean.",
  highlights: [
    "Private catamaran cruise to hidden island archipelagos",
    "Snorkeling in the crystal-clear waters of the Andaman Sea",
    "Guided cultural walk through historic Old Phuket Town",
    "Sunset seafood dinner overlooking the breathtaking coastline",
    "Free days to relax and rejuvenate on pristine white-sand beaches"
  ]
},
{
  id: 4,
  title: "Narathiwat - The southernmost land of Siam",
  location: "Narathiwat, Thailand",
  category: "Southern",
  duration: "5 Days",
  groupSize: "Max 8",
  rating: 4.8,
  reviews: 156,
  price: 529,
  image: "https://api.tourismthailand.org/upload/live/destination/4-9031.png",
  description: "Journey to the serene edge of the kingdom, where lush rainforests meet tranquil shores. Narathiwat is a hidden tapestry of harmonious cultures, golden beaches, and pristine wilderness waiting to be discovered.",
  fullDescription: "Uncover the profound beauty of Narathiwat, the southernmost jewel of Siam. This off-the-beaten-path expedition takes you into a world where vibrant traditions seamlessly weave together. Wander through the ancient, mist-shrouded Budo-Su-ngai Padi National Park, home to rare wildlife and spectacular cascading waterfalls. Experience the deep tranquility of long, untouched coastlines like Narathat Beach, and immerse yourself in the rich cultural symphony of local villages where exquisite batik art is born. Let the warm, authentic hospitality of the deep south envelop you as you savor unique culinary delights that tell the captivating story of this enchanting borderland.",
  highlights: [
    "Explore the pristine wilderness of Budo-Su-ngai Padi National Park",
    "Relax on the golden, pine-fringed sands of Narathat Beach",
    "Marvel at the wooden architecture of the 300-year-old Wadi Al-Hussein Mosque",
    "Participate in an authentic local Batik hand-painting workshop",
    "Savor the rich, aromatic flavors of deep southern Thai-Malay cuisine"
  ]
}
  ];
  
/* ── Helpers ───────────────────────────────────────────────── */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function buildCard(tour) {
  const card = document.createElement("article");
  card.className = "tour-card";
  card.setAttribute("data-id", tour.id);
  card.innerHTML = `
    <img class="card-img" src="${tour.image}" alt="${tour.title}" loading="lazy">
    <div class="card-body">
      <span class="card-tag">${tour.category}</span>
      <h3>${tour.title}</h3>
      <span class="location">📍 ${tour.location}</span>
      <span class="stars" title="${tour.rating}/5">${starsHTML(tour.rating)} <small style="color:var(--muted);font-size:.78rem">(${tour.reviews})</small></span>
      <p class="description">${tour.description}</p>
      <div class="card-footer">
        <div class="card-meta">
          <span class="meta-item">🕒 ${tour.duration}</span>
          <span class="meta-item">👥 ${tour.groupSize}</span>
        </div>
        <div class="card-price">
          <div class="from">From</div>
          <div class="amount">$${tour.price.toLocaleString()}</div>
          <div class="per">per person</div>
        </div>
      </div>
    </div>`;
  card.addEventListener("click", () => openModal(tour));
  return card;
}

/* ── Render tours into a container ────────────────────────── */
function renderTours(containerId, filter = "All", limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  let list = filter === "All" ? TOURS : TOURS.filter(t => t.category === filter);
  if (limit) list = list.slice(0, limit);
  if (list.length === 0) {
    container.innerHTML = `<p style="color:var(--muted);text-align:center;padding:2rem">No tours found in this category.</p>`;
    return;
  }
  list.forEach(tour => container.appendChild(buildCard(tour)));
}

/* ── Modal ─────────────────────────────────────────────────── */
function openModal(tour) {
  const overlay = document.getElementById("tourModal");
  if (!overlay) return;

  overlay.querySelector("#modal-img").src = tour.image;
  overlay.querySelector("#modal-img").alt = tour.title;
  overlay.querySelector("#modal-title").textContent = tour.title;
  overlay.querySelector("#modal-location").innerHTML = `📍 ${tour.location}`;
  overlay.querySelector("#modal-tags").innerHTML = `
    <span class="card-tag">${tour.category}</span>
    <span class="stars">${starsHTML(tour.rating)} <small style="color:var(--muted);font-size:.78rem">(${tour.reviews} reviews)</small></span>`;
  overlay.querySelector("#modal-body").textContent = tour.fullDescription;
  overlay.querySelector("#modal-info").innerHTML = `
    <div class="info-box"><div class="label">Duration</div><div class="value">${tour.duration}</div></div>
    <div class="info-box"><div class="label">Group Size</div><div class="value">${tour.groupSize}</div></div>
    <div class="info-box"><div class="label">Destination</div><div class="value">${tour.location.split(",")[1]?.trim() || tour.location}</div></div>`;
  overlay.querySelector("#modal-highlights").innerHTML =
    tour.highlights.map(h => `<li>${h}</li>`).join("");
  overlay.querySelector("#modal-price").innerHTML = `
    <div class="from">From</div>
    <div class="amount">$${tour.price.toLocaleString()}</div>
    <div class="per">per person</div>`;

  const bookBtn = overlay.querySelector("#modal-book-btn");
  if (bookBtn) bookBtn.onclick = () => location.href = `booking.html?id=${tour.id}`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("tourModal");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Category filter chips ─────────────────────────────────── */
function initChips(containerId, tourListId) {
  const bar = document.getElementById(containerId);
  if (!bar) return;
  bar.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    bar.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderTours(tourListId, chip.dataset.cat);
  });
}

/* ── Search ─────────────────────────────────────────────────── */
function initSearch(inputId, containerId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    const filtered = TOURS.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.location.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
    if (filtered.length === 0) {
      container.innerHTML = `<p style="color:var(--muted);text-align:center;padding:2rem">No tours match "<strong>${q}</strong>".</p>`;
      return;
    }
    filtered.forEach(t => container.appendChild(buildCard(t)));
  });
}

/* ── Global modal close listeners ─────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("tourModal");
  if (overlay) {
    overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  }
});
