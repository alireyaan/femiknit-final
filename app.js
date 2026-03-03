const VIEWS = ["home", "styles", "wishlist", "cart", "connect"];

const stylesData = [
  {
    id: "ghicha-tassar",
    name: "Ghicha Tassar",
    tagline: "Earthy raw silk with a matte sheen.",
    approxPrice: "₹2,000 – ₹4,000",
    feel: ["Textured", "Light Winter", "Handloom"],
    bestFor: "Intimate gatherings, poojas, and cultural evenings.",
    image: "./assets/ghicha-tassar.png",
  },
  {
    id: "khaddi-georgette",
    name: "Khaddi Georgette",
    tagline: "Floaty, festive drapes with zari jaal.",
    approxPrice: "₹3,000 – ₹5,000",
    feel: ["Fluid", "Festive", "Zari Highlights"],
    bestFor: "Sangeet nights and reception cocktails.",
    image: "./assets/khaddi-georgette.png",
  },
  {
    id: "kanthastitch",
    name: "Kanthastitch",
    tagline: "Storytelling embroidery, stitch by stitch.",
    approxPrice: "₹3,500 – ₹6,000",
    feel: ["Artisanal", "All-day Comfort", "Hand Embroidery"],
    bestFor: "Day functions, art events, and heirloom gifting.",
    image: "./assets/kanthastitch.png",
  },
  {
    id: "chinon",
    name: "Chinon",
    tagline: "Featherlight drapes with a soft fall.",
    approxPrice: "₹2,500 – ₹4,500",
    feel: ["Soft", "Travel Friendly", "Easy Drapes"],
    bestFor: "Brunches, destination weddings, and pre-wedding shoots.",
    image: "./assets/chinon.png",
  },
  {
    id: "hakoba",
    name: "Hakoba",
    tagline: "Delicate cutwork for airy, romantic looks.",
    approxPrice: "₹2,000 – ₹3,500",
    feel: ["Breathable", "Summer Perfect", "Textured"],
    bestFor: "Daytime celebrations, mehendi, and resort wear.",
    image: "./assets/hakoba.png",
  },
  {
    id: "dhakai-maslin",
    name: "Dhakai Maslin",
    tagline: "Sheer, gossamer weaves with heritage motifs.",
    approxPrice: "₹2,500 – ₹5,000",
    feel: ["Sheer", "Lightweight", "Heritage"],
    bestFor: "Graceful day events and traditional gatherings.",
    image: "./assets/dhakai-maslin.png",
  },
  {
    id: "kanni-pashmina-silk",
    name: "Kanni Pashmina Silk",
    tagline: "Regal Kashmiri motifs in silk-wool luxury.",
    approxPrice: "₹4,000 – ₹6,000",
    feel: ["Plush", "Winter Heirloom", "Statement"],
    bestFor: "Winter weddings and sit-down soirées.",
    image: "./assets/kanni-pashmina-silk.png",
  },
  {
    id: "kanjivaram",
    name: "Kanjivaram",
    tagline: "Temple borders, zari richness, bridal grandeur.",
    approxPrice: "₹3,500 – ₹6,000",
    feel: ["Structured", "Grand", "Bridal"],
    bestFor: "Weddings, muhurtham, and milestone celebrations.",
    image: "./assets/kanjivaram.png",
  },
];

const wishlistKey = "femiknit_wishlist_v1";
const cartKey = "femiknit_cart_v1";

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

function getCart() {
  try {
    const raw = localStorage.getItem(cartKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(list) {
  try {
    localStorage.setItem(cartKey, JSON.stringify(list));
  } catch {
    // ignore
  }
}

function isInCart(id) {
  return getCart().includes(id);
}

function toggleCart(id) {
  const current = getCart();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  saveCart(next);
  renderCart();
  refreshCartButtons();
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

function refreshCartButtons() {
  const buttons = document.querySelectorAll("[data-cart-style-id]");
  buttons.forEach((btn) => {
    const id = btn.getAttribute("data-cart-style-id");
    if (isInCart(id)) {
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
          <div class="fk-style-actions-buttons">
            <button class="fk-wishlist-btn" data-style-id="${style.id}">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20.5s-4.8-3.06-7.3-5.56C2.2 12.45 2 9.66 3.64 7.84 5 6.3 7.4 6.2 8.96 7.54L12 10.1l3.04-2.56c1.56-1.34 3.96-1.24 5.32.3 1.64 1.82 1.44 4.61-1.06 7.1C16.8 17.44 12 20.5 12 20.5z"/>
              </svg>
            </button>
            <button class="fk-btn fk-btn-ghost fk-cart-btn" data-cart-style-id="${style.id}">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-style-id");
    btn.addEventListener("click", () => toggleWishlist(id));
  });

  grid.querySelectorAll("[data-cart-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-cart-style-id");
    btn.addEventListener("click", () => {
      toggleCart(id);
      switchView("cart");
    });
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
          <div class="fk-style-actions-buttons">
            <button class="fk-wishlist-btn is-active" data-style-id="${style.id}">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20.5s-4.8-3.06-7.3-5.56C2.2 12.45 2 9.66 3.64 7.84 5 6.3 7.4 6.2 8.96 7.54L12 10.1l3.04-2.56c1.56-1.34 3.96-1.24 5.32.3 1.64 1.82 1.44 4.61-1.06 7.1C16.8 17.44 12 20.5 12 20.5z"/>
              </svg>
            </button>
            <button class="fk-btn fk-btn-ghost fk-cart-btn" data-cart-style-id="${style.id}">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-style-id");
    btn.addEventListener("click", () => toggleWishlist(id));
  });

  grid.querySelectorAll("[data-cart-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-cart-style-id");
    btn.addEventListener("click", () => toggleCart(id));
  });
}

function renderCart() {
  const grid = document.getElementById("cartGrid");
  const empty = document.getElementById("cartEmpty");
  if (!grid || !empty) return;

  const cartIds = getCart();
  grid.innerHTML = "";

  if (!cartIds.length) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  cartIds.forEach((id) => {
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
          <div class="fk-style-actions-buttons">
            <button class="fk-btn fk-btn-ghost fk-cart-btn is-active" data-cart-style-id="${style.id}">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-cart-style-id]").forEach((btn) => {
    const id = btn.getAttribute("data-cart-style-id");
    btn.addEventListener("click", () => toggleCart(id));
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

  const base = "https://wa.me/919470522129";
  whatsappButton.addEventListener("click", () => {
    const wishlistIds = getWishlist();
    const cartIds = getCart();
    const wishlistLines = wishlistIds
      .map((id) => {
        const style = stylesData.find((s) => s.id === id);
        return style ? `• ${style.name}` : null;
      })
      .filter(Boolean)
      .join("%0A");

    const cartLines = cartIds
      .map((id) => {
        const style = stylesData.find((s) => s.id === id);
        return style ? `• ${style.name}` : null;
      })
      .filter(Boolean)
      .join("%0A");

    const messageLines = [
      "Hi Femiknit, I discovered your sarees and would love to know more.",
      "",
      wishlistLines ? "Sarees I’m interested in (wishlist):" : "",
      wishlistLines,
      cartLines ? "" : "",
      cartLines ? "Sarees I have added to cart:" : "",
      cartLines,
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
  renderCart();
  setupNav();
  setupWhatsApp();
  setupYear();
});

