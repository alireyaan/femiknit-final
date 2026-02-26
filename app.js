const VIEWS = ["home", "styles", "wishlist", "connect"];

const stylesData = [
  {
    id: "ghicha-tassar",
    name: "Ghicha Tassar",
    tagline: "Earthy raw silk with a matte sheen.",
    approxPrice: "₹7,500 – ₹12,500",
    feel: ["Textured", "Light Winter", "Handloom"],
    bestFor: "Intimate gatherings, poojas, and cultural evenings.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.14.44_AM-cccf46b8-74ce-48a9-9ab9-557e193d556a.png",
  },
  {
    id: "khaddi-georgette",
    name: "Khaddi Georgette",
    tagline: "Floaty, festive drapes with zari jaal.",
    approxPrice: "₹9,500 – ₹18,000",
    feel: ["Fluid", "Festive", "Zari Highlights"],
    bestFor: "Sangeet nights and reception cocktails.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.16.30_AM-fb4c84b2-42ed-4305-b931-389393061ace.png",
  },
  {
    id: "kanthastitch",
    name: "Kanthastitch",
    tagline: "Storytelling embroidery, stitch by stitch.",
    approxPrice: "₹8,000 – ₹16,000",
    feel: ["Artisanal", "All-day Comfort", "Hand Embroidery"],
    bestFor: "Day functions, art events, and heirloom gifting.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.15.15_AM-7a91b7ec-e70c-48b1-b3c0-2d731673436f.png",
  },
  {
    id: "chinon",
    name: "Chinon",
    tagline: "Featherlight drapes with a soft fall.",
    approxPrice: "₹5,500 – ₹9,500",
    feel: ["Soft", "Travel Friendly", "Easy Drapes"],
    bestFor: "Brunches, destination weddings, and pre-wedding shoots.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.15.50_AM-6acbfaa0-29e6-4653-8f6e-05dee3145d01.png",
  },
  {
    id: "hakoba",
    name: "Hakoba",
    tagline: "Delicate cutwork for airy, romantic looks.",
    approxPrice: "₹4,500 – ₹8,500",
    feel: ["Breathable", "Summer Perfect", "Textured"],
    bestFor: "Daytime celebrations, mehendi, and resort wear.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.16.04_AM-cc1b54fa-72a9-436f-9ba4-874414ad2716.png",
  },
  {
    id: "dhakai-maslin",
    name: "Dhakai Maslin",
    tagline: "Sheer, gossamer weaves with heritage motifs.",
    approxPrice: "₹6,500 – ₹13,500",
    feel: ["Sheer", "Lightweight", "Heritage"],
    bestFor: "Graceful day events and traditional gatherings.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.16.04_AM-cc1b54fa-72a9-436f-9ba4-874414ad2716.png",
  },
  {
    id: "kanni-pashmina-silk",
    name: "Kanni Pashmina Silk",
    tagline: "Regal Kashmiri motifs in silk-wool luxury.",
    approxPrice: "₹18,000 – ₹38,000",
    feel: ["Plush", "Winter Heirloom", "Statement"],
    bestFor: "Winter weddings and sit-down soirées.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.16.52_AM-211bc16c-fddf-46b0-8aa3-cfe37ad28228.png",
  },
  {
    id: "kanjivaram",
    name: "Kanjivaram",
    tagline: "Temple borders, zari richness, bridal grandeur.",
    approxPrice: "₹22,000 – ₹65,000",
    feel: ["Structured", "Grand", "Bridal"],
    bestFor: "Weddings, muhurtham, and milestone celebrations.",
    image:
      "./assets/c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_b59cdcede6e6b8ceec5674861775711f_images_WhatsApp_Image_2026-02-24_at_1.13.41_AM-6ed11efa-23de-4424-9c90-3e674359fc8e.png",
  },
];

const wishlistKey = "femiknit_wishlist_v1";

function getWishlist() {
  try {
    const raw = localStorage.getItem(wishlistKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(wishlistKey, JSON.stringify(list));
  } catch {
    // ignore
  }
}

function isInWishlist(id) {
  return getWishlist().includes(id);
}

function toggleWishlist(id) {
  const current = getWishlist();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  saveWishlist(next);
  renderWishlist();
  refreshWishlistButtons();
}

function createHeartButton(id) {
  const btn = document.createElement("button");
  btn.className = "fk-wishlist-btn";
  if (isInWishlist(id)) {
    btn.classList.add("is-active");
  }
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-4.8-3.06-7.3-5.56C2.2 12.45 2 9.66 3.64 7.84 5 6.3 7.4 6.2 8.96 7.54L12 10.1l3.04-2.56c1.56-1.34 3.96-1.24 5.32.3 1.64 1.82 1.44 4.61-1.06 7.1C16.8 17.44 12 20.5 12 20.5z"/></svg>';
  btn.addEventListener("click", () => toggleWishlist(id));
  return btn;
}

function refreshWishlistButtons() {
  const buttons = document.querySelectorAll("[data-style-id]");
  buttons.forEach((btn) => {
    const id = btn.getAttribute("data-style-id");
    if (isInWishlist(id)) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }
  });
}

function renderStylesGrid() {
  const grid = document.getElementById("styleGrid");
  if (!grid) return;
  grid.innerHTML = "";

  stylesData.forEach((style) => {
    const card = document.createElement("article");
    card.className = "fk-style-card";
    card.innerHTML = `
      <div class="fk-style-media">
        <img src="${style.image}" alt="${style.name} saree" loading="lazy" />
      </div>
      <div class="fk-style-body">
        <div>
          <div class="fk-style-heading">
            <div>
              <div class="fk-style-name">${style.name}</div>
              <p class="fk-style-tagline">${style.tagline}</p>
            </div>
          </div>
          <div class="fk-style-meta">
            ${style.feel
              .map(
                (pill, index) =>
                  `<span class="fk-pill ${
                    index === 0 ? "fk-pill--primary" : ""
                  }">${pill}</span>`
              )
              .join("")}
          </div>
        </div>
        <div class="fk-style-actions">
          <div>
            <div class="fk-style-price">${style.approxPrice}</div>
            <div class="fk-style-tagline">Best for: ${style.bestFor}</div>
          </div>
          <button class="fk-wishlist-btn" data-style-id="${style.id}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20.5s-4.8-3.06-7.3-5.56C2.2 12.45 2 9.66 3.64 7.84 5 6.3 7.4 6.2 8.96 7.54L12 10.1l3.04-2.56c1.56-1.34 3.96-1.24 5.32.3 1.64 1.82 1.44 4.61-1.06 7.1C16.8 17.44 12 20.5 12 20.5z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-style-id");
    btn.addEventListener("click", () => toggleWishlist(id));
  });

  refreshWishlistButtons();
}

function renderWishlist() {
  const grid = document.getElementById("wishlistGrid");
  const empty = document.getElementById("wishlistEmpty");
  if (!grid || !empty) return;

  const wishlistIds = getWishlist();
  grid.innerHTML = "";

  if (!wishlistIds.length) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  wishlistIds.forEach((id) => {
    const style = stylesData.find((s) => s.id === id);
    if (!style) return;

    const card = document.createElement("article");
    card.className = "fk-style-card";
    card.innerHTML = `
      <div class="fk-style-media">
        <img src="${style.image}" alt="${style.name} saree" loading="lazy" />
      </div>
      <div class="fk-style-body">
        <div>
          <div class="fk-style-heading">
            <div>
              <div class="fk-style-name">${style.name}</div>
              <p class="fk-style-tagline">${style.tagline}</p>
            </div>
          </div>
          <div class="fk-style-meta">
            ${style.feel
              .map(
                (pill, index) =>
                  `<span class="fk-pill ${
                    index === 0 ? "fk-pill--primary" : ""
                  }">${pill}</span>`
              )
              .join("")}
          </div>
        </div>
        <div class="fk-style-actions">
          <div>
            <div class="fk-style-price">${style.approxPrice}</div>
            <div class="fk-style-tagline">Best for: ${style.bestFor}</div>
          </div>
          <button class="fk-wishlist-btn is-active" data-style-id="${style.id}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20.5s-4.8-3.06-7.3-5.56C2.2 12.45 2 9.66 3.64 7.84 5 6.3 7.4 6.2 8.96 7.54L12 10.1l3.04-2.56c1.56-1.34 3.96-1.24 5.32.3 1.64 1.82 1.44 4.61-1.06 7.1C16.8 17.44 12 20.5 12 20.5z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-style-id");
    btn.addEventListener("click", () => toggleWishlist(id));
  });
}

function switchView(target) {
  if (!VIEWS.includes(target)) return;

  VIEWS.forEach((view) => {
    const section = document.getElementById(`view-${view}`);
    if (section) {
      section.classList.toggle("fk-view--active", view === target);
    }
  });

  document.querySelectorAll(".fk-nav-link").forEach((link) => {
    const view = link.getAttribute("data-view");
    link.classList.toggle("is-active", view === target);
  });

  const nav = document.getElementById("nav");
  if (nav && nav.classList.contains("is-open")) {
    nav.classList.remove("is-open");
  }
}

function setupNav() {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".fk-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-view");
      if (target) {
        switchView(target);
      }
    });
  });

  document.querySelectorAll("[data-view-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-view-target");
      if (target) {
        switchView(target);
      }
    });
  });
}

function setupWhatsApp() {
  const whatsappButton = document.getElementById("whatsappButton");
  if (!whatsappButton) return;

  const base = "https://wa.me/919263515610";
  whatsappButton.addEventListener("click", () => {
    const wishlistIds = getWishlist();
    const selected = wishlistIds
      .map((id) => {
        const style = stylesData.find((s) => s.id === id);
        return style ? `• ${style.name}` : null;
      })
      .filter(Boolean)
      .join("%0A");

    const messageLines = [
      "Hi Femiknit, I discovered your sarees and would love to know more.",
      "",
      selected ? "Sarees I’m interested in:" : "",
      selected,
    ].filter(Boolean);

    const text = encodeURIComponent(messageLines.join("\n"));
    window.open(`${base}?text=${text}`, "_blank");
  });
}

function setupYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderStylesGrid();
  renderWishlist();
  setupNav();
  setupWhatsApp();
  setupYear();
});

