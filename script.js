/* ============================================================
   TripTour – Tour Data & Interactive Logic
   ============================================================ */

const TOURS = [
  {
    id: 1,
    title: "Paris — City of Light",
    location: "Paris, France",
    category: "Culture",
    duration: "7 Days",
    groupSize: "Max 12",
    rating: 4.9,
    reviews: 312,
    price: 1299,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    description: "Stroll along the Seine, marvel at the Eiffel Tower at night, and indulge in world-class French cuisine. This guided week in Paris blends iconic landmarks with hidden local gems.",
    fullDescription: "Experience the romance and elegance of Paris on this carefully crafted 7-day journey. From the moment you arrive at Charles de Gaulle, our expert guides will escort you through centuries of art, architecture, and gastronomy. Visit the Louvre, climb Montmartre, cruise the Seine at sunset, and discover the charming cafés of Le Marais. Evenings are yours to explore the vibrant Parisian nightlife, with optional dinners at Michelin-starred restaurants.",
    highlights: [
      "Skip-the-line access to the Louvre and Musée d'Orsay",
      "Private evening visit to the Eiffel Tower",
      "Seine River sunset cruise",
      "Cooking class with a local chef in Montmartre",
      "Day trip to Versailles Palace & Gardens",
      "All transfers included from CDG airport"
    ]
  },
  {
    id: 2,
    title: "Tokyo — Neon & Tradition",
    location: "Tokyo, Japan",
    category: "Adventure",
    duration: "10 Days",
    groupSize: "Max 10",
    rating: 4.8,
    reviews: 198,
    price: 2499,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    description: "From serene temples in Kyoto to the buzzing streets of Shibuya, explore Japan's dazzling contrast of ancient culture and futuristic technology.",
    fullDescription: "This 10-day immersion takes you deep into the soul of Japan. Begin in Tokyo — explore Shibuya Crossing, Akihabara's tech scene, and the tranquil Meiji Shrine. Journey by Shinkansen to Kyoto to walk the bamboo groves of Arashiyama and meditate in Zen gardens. Join a traditional tea ceremony, try on a kimono, and feast on authentic ramen, sushi, and wagyu beef. A day trip to Mount Fuji rounds out an unforgettable cultural adventure.",
    highlights: [
      "Shinkansen bullet train experience",
      "Traditional tea ceremony in Kyoto",
      "Tsukiji Outer Market food tour",
      "Arashiyama bamboo grove morning walk",
      "Day trip to Mount Fuji (5th station)",
      "Kimono dressing experience"
    ]
  },
  {
    id: 3,
    title: "Bali — Island of Gods",
    location: "Bali, Indonesia",
    category: "Beach",
    duration: "8 Days",
    groupSize: "Max 14",
    rating: 4.7,
    reviews: 245,
    price: 999,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    description: "Unwind in tropical paradise — rice terraces, ancient temples, surf-perfect beaches, and vibrant nightlife make Bali a once-in-a-lifetime destination.",
    fullDescription: "Eight sun-drenched days on the Island of Gods await. Begin in Ubud, the cultural heart of Bali — visit the Sacred Monkey Forest, watch a traditional Kecak fire dance, and cycle through lush rice paddies at dawn. Move south to the cliffs of Uluwatu for world-class surf and dramatic sunsets. Finish at the white-sand beaches of Seminyak with beach-club days and spa evenings. Throughout, you'll taste Balinese cuisine at local warungs and shop the vibrant art markets.",
    highlights: [
      "Sunrise trekking on Mount Batur volcano",
      "White-water rafting on the Ayung River",
      "Traditional Kecak fire dance at Uluwatu Temple",
      "Rice terrace cycling tour in Tegallalang",
      "Balinese cooking class",
      "2 nights luxury villa stay in Seminyak"
    ]
  },
  {
    id: 4,
    title: "New York — The Big Apple",
    location: "New York City, USA",
    category: "City",
    duration: "5 Days",
    groupSize: "Max 16",
    rating: 4.6,
    reviews: 421,
    price: 1499,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
    description: "Hit the iconic skyline, world-famous museums, Broadway shows, and the best street food on the planet — New York City never sleeps and neither will you.",
    fullDescription: "Five exhilarating days in the city that defines modern culture. See the Statue of Liberty up close, walk across the Brooklyn Bridge, and gaze at Manhattan from the Top of the Rock. Explore the Metropolitan Museum of Art and take in a Broadway show in the Theatre District. Our curated food tour covers everything from Katz's Deli pastrami to Harlem's legendary soul food. Expert local guides lead each excursion, ensuring you experience NYC like a true New Yorker.",
    highlights: [
      "Statue of Liberty & Ellis Island ferry",
      "Top of the Rock 360° observation deck",
      "Broadway show tickets (Book of Mormon or Hamilton)",
      "Guided Brooklyn food and street art tour",
      "Central Park bike ride with local guide",
      "Metropolitan Museum of Art guided visit"
    ]
  },
  {
    id: 5,
    title: "Kenya Safari — Wild Wonders",
    location: "Maasai Mara, Kenya",
    category: "Wildlife",
    duration: "6 Days",
    groupSize: "Max 8",
    rating: 5.0,
    reviews: 134,
    price: 3299,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    description: "Witness the spectacular Great Migration and get up close with lions, elephants, and leopards in one of Africa's most breathtaking wildlife reserves.",
    fullDescription: "A six-day luxury safari in the iconic Maasai Mara delivers a once-in-a-lifetime encounter with Africa's Big Five. Fly in by light aircraft from Nairobi, then settle into your boutique tented camp at the edge of the savanna. Twice-daily game drives in open 4x4 vehicles with expert Maasai naturalist guides put you within metres of lions, cheetahs, elephants, and rhinos. Witness the Great Wildebeest Migration (seasonal), enjoy sundowner cocktails on the plains, and visit a traditional Maasai village to learn about their ancient way of life.",
    highlights: [
      "Big Five game drives morning and evening",
      "Hot-air balloon safari over the Mara at sunrise",
      "Great Wildebeest Migration viewing (seasonal)",
      "Maasai village cultural visit",
      "Bush breakfast with panoramic savanna views",
      "All-inclusive luxury tented camp accommodation"
    ]
  },
  {
    id: 6,
    title: "Rome — Eternal City",
    location: "Rome, Italy",
    category: "Culture",
    duration: "7 Days",
    groupSize: "Max 12",
    rating: 4.8,
    reviews: 289,
    price: 1399,
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80",
    description: "Walk in the footsteps of emperors — the Colosseum, Vatican, Trevi Fountain, and extraordinary pasta await in the most historically rich city on Earth.",
    fullDescription: "Seven days in the Eternal City is barely enough to scratch its glorious surface. Our expert archaeologist guides bring ancient Rome to life as you walk through the Colosseum's arena floor, explore the Roman Forum, and climb the Palatine Hill at golden hour. Spend a full day in Vatican City — the Sistine Chapel, St. Peter's Basilica, and the Vatican Museums. Evenings bring leisurely passeggiata through Trastevere, gelato at Campo de' Fiori, and unforgettable cacio e pepe in century-old trattorias.",
    highlights: [
      "Colosseum arena floor access (usually restricted)",
      "Vatican Museums & Sistine Chapel early morning entry",
      "Roman Forum and Palatine Hill guided walk",
      "Evening food tour through Trastevere",
      "Day trip to Pompeii and Vesuvius",
      "Pasta-making class with a local nonna"
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
