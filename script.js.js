/* ModaMart demo store (no backend) */

const PRODUCTS = [
  {
    id: "w-001",
    title: "Women's Satin Slip Dress",
    category: "women",
    price: 49.99,
    rating: 4.7,
    desc: "Elegant satin finish with a minimal silhouette—perfect for evenings.",
    sizes: ["XS", "S", "M", "L"],
    badge: "Women",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "w-002",
    title: "Women's Oversized Blazer",
    category: "women",
    price: 69.0,
    rating: 4.6,
    desc: "Tailored yet relaxed—pair with denim or formal trousers.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Women",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "w-003",
    title: "High-Waist Wide-Leg Jeans",
    category: "women",
    price: 54.5,
    rating: 4.5,
    desc: "Comfort stretch denim with a flattering high-rise fit.",
    sizes: ["26", "28", "30", "32"],
    badge: "Women",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "w-004",
    title: "Ribbed Knit Top (Cream)",
    category: "women",
    price: 24.99,
    rating: 4.4,
    desc: "Soft rib knit with a clean neckline—easy everyday styling.",
    sizes: ["XS", "S", "M", "L"],
    badge: "Women",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "m-001",
    title: "Men's Oxford Shirt (Sky Blue)",
    category: "men",
    price: 39.99,
    rating: 4.6,
    desc: "Crisp oxford weave with a smart casual cut.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Men",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "m-002",
    title: "Men's Slim Chino Pants",
    category: "men",
    price: 45.0,
    rating: 4.5,
    desc: "Slim fit chinos with stretch—office to weekend.",
    sizes: ["30", "32", "34", "36"],
    badge: "Men",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "m-003",
    title: "Men's Hoodie (Charcoal)",
    category: "men",
    price: 34.99,
    rating: 4.7,
    desc: "Heavyweight fleece hoodie with clean, modern proportions.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Men",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "m-004",
    title: "Men's Bomber Jacket",
    category: "men",
    price: 79.99,
    rating: 4.4,
    desc: "Lightweight bomber with a matte finish and subtle shine.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Men",
    image: "https://images.unsplash.com/photo-1551028719-67c71627dff0?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "a-001",
    title: "Classic Leather Belt",
    category: "accessories",
    price: 19.99,
    rating: 4.3,
    desc: "Genuine leather belt with a brushed metal buckle.",
    sizes: ["S", "M", "L"],
    badge: "Accessory",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "a-002",
    title: "Minimalist Sunglasses",
    category: "accessories",
    price: 16.99,
    rating: 4.2,
    desc: "UV400 lenses with a clean frame—goes with everything.",
    sizes: ["One Size"],
    badge: "Accessory",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "a-003",
    title: "Canvas Tote Bag",
    category: "accessories",
    price: 14.5,
    rating: 4.5,
    desc: "Roomy, durable tote for daily carry and errands.",
    sizes: ["One Size"],
    badge: "Accessory",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "w-005",
    title: "Women's White Sneakers",
    category: "women",
    price: 59.99,
    rating: 4.6,
    desc: "Everyday low-top sneakers with cushioned insole.",
    sizes: ["36", "37", "38", "39", "40"],
    badge: "Women",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80",
  },
];

/** @type {Map<string, number>} */
const cart = new Map(); // productId -> qty

const els = {
  productGrid: document.getElementById("productGrid"),
  resultCount: document.getElementById("resultCount"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  sortSelect: document.getElementById("sortSelect"),
  filterBtns: Array.from(document.querySelectorAll("[data-filter]")),
  cartBtn: document.getElementById("cartBtn"),
  cartCount: document.getElementById("cartCount"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartBackdrop: document.getElementById("cartBackdrop"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartItems: document.getElementById("cartItems"),
  cartSub: document.getElementById("cartSub"),
  subtotal: document.getElementById("subtotal"),
  shipping: document.getElementById("shipping"),
  tax: document.getElementById("tax"),
  total: document.getElementById("total"),
  clearCartBtn: document.getElementById("clearCartBtn"),
  checkoutBtn: document.getElementById("checkoutBtn"),
  toastHost: document.getElementById("toastHost"),
  randomPickBtn: document.getElementById("randomPickBtn"),
};

const state = {
  filter: "all",
  search: "",
  sort: "featured",
};

function money(n) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function starString(rating) {
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

function toast(title, msg) {
  const node = document.createElement("div");
  node.className = "toast";
  node.innerHTML = `
    <div class="toast__dot" aria-hidden="true"></div>
    <div>
      <div class="toast__title">${escapeHtml(title)}</div>
      <div class="toast__msg">${escapeHtml(msg)}</div>
    </div>
  `;
  els.toastHost.appendChild(node);
  setTimeout(() => node.remove(), 2600);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

function cartItemCount() {
  let count = 0;
  for (const qty of cart.values()) count += qty;
  return count;
}

function cartSubtotal() {
  let sum = 0;
  for (const [id, qty] of cart.entries()) {
    const p = getProduct(id);
    if (p) sum += p.price * qty;
  }
  return sum;
}

function shippingCost(subtotal) {
  if (subtotal <= 0) return 0;
  if (subtotal >= 100) return 0;
  return 6.99;
}

function taxAmount(subtotal) {
  // demo: 7% tax
  return subtotal * 0.07;
}

function setActiveFilter(filter) {
  state.filter = filter;
  for (const btn of els.filterBtns) {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  }
}

function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const matchesFilter = state.filter === "all" ? true : p.category === state.filter;
    const matchesSearch = !q
      ? true
      : (p.title + " " + p.desc + " " + p.category).toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });
}

function sortProducts(items) {
  const arr = [...items];
  const s = state.sort;
  if (s === "price-asc") arr.sort((a, b) => a.price - b.price);
  if (s === "price-desc") arr.sort((a, b) => b.price - a.price);
  if (s === "rating-desc") arr.sort((a, b) => b.rating - a.rating);
  // "featured" = keep original order
  return arr;
}

function renderProducts() {
  const items = sortProducts(filteredProducts());

  els.resultCount.textContent = `${items.length} product${items.length === 1 ? "" : "s"} found`;

  if (items.length === 0) {
    els.productGrid.innerHTML = `
      <div class="empty">
        <strong>No matches.</strong>
        <div style="margin-top:6px;">Try a different keyword or switch categories.</div>
      </div>
    `;
    return;
  }

  els.productGrid.innerHTML = items
    .map((p) => {
      return `
        <article class="card">
          <div class="card__img" aria-hidden="true">
            <img src="${escapeHtml(p.image || "")}" alt="${escapeHtml(p.title)}" loading="lazy" />
            <div class="card__tag">${escapeHtml(p.badge)}</div>
          </div>
          <div class="card__body">
            <div class="card__title">${escapeHtml(p.title)}</div>
            <div class="card__desc">${escapeHtml(p.desc)}</div>
            <div class="card__row">
              <div class="price">${money(p.price)}</div>
              <div class="rating" title="Rating ${p.rating}">
                <span class="stars" aria-hidden="true">${starString(p.rating)}</span>
                <span>${p.rating.toFixed(1)}</span>
              </div>
            </div>
            <div class="card__sizes" aria-label="Available sizes">
              ${p.sizes.map((s) => `<span class="size">${escapeHtml(s)}</span>`).join("")}
            </div>
            <div class="card__actions">
              <button class="btn btn--primary" type="button" data-add="${p.id}">Add to cart</button>
              <button class="btn btn--ghost" type="button" data-quick="${p.id}">Quick view</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  const entries = Array.from(cart.entries()).filter(([id]) => getProduct(id));

  els.cartCount.textContent = String(cartItemCount());
  els.cartSub.textContent = `${cartItemCount()} item${cartItemCount() === 1 ? "" : "s"}`;

  if (entries.length === 0) {
    els.cartItems.innerHTML = `
      <div class="empty">
        <strong>Your cart is empty.</strong>
        <div style="margin-top:6px;">Add a few items to see them here.</div>
      </div>
    `;
  } else {
    els.cartItems.innerHTML = entries
      .map(([id, qty]) => {
        const p = getProduct(id);
        const line = p.price * qty;
        return `
          <div class="cartItem">
            <div class="cartItem__img">
              <img src="${escapeHtml(p.image || "")}" alt="${escapeHtml(p.title)}" loading="lazy" />
            </div>
            <div style="flex:1;">
              <div class="cartItem__title">${escapeHtml(p.title)}</div>
              <div class="cartItem__meta">${escapeHtml(p.badge)} • ${money(p.price)} each</div>
              <div class="cartItem__meta">Line total: <strong>${money(line)}</strong></div>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px; align-items:flex-end;">
              <div class="cartItem__price">${money(line)}</div>
              <div class="cartItem__controls">
                <div class="qty" aria-label="Quantity">
                  <button class="qty__btn" type="button" data-dec="${id}" aria-label="Decrease quantity">−</button>
                  <div class="qty__num" aria-live="polite">${qty}</div>
                  <button class="qty__btn" type="button" data-inc="${id}" aria-label="Increase quantity">+</button>
                </div>
                <button class="btn btn--danger btn--sm" type="button" data-remove="${id}">Remove</button>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const sub = cartSubtotal();
  const ship = shippingCost(sub);
  const tax = taxAmount(sub);
  const total = sub + ship + tax;

  els.subtotal.textContent = money(sub);
  els.shipping.textContent = money(ship);
  els.tax.textContent = money(tax);
  els.total.textContent = money(total);
}

function addToCart(id, qty = 1) {
  const p = getProduct(id);
  if (!p) return;
  const next = (cart.get(id) || 0) + qty;
  cart.set(id, clamp(next, 1, 99));
  renderCart();
  toast("Added to cart", p.title);
}

function removeFromCart(id) {
  const p = getProduct(id);
  cart.delete(id);
  renderCart();
  if (p) toast("Removed", p.title);
}

function setCartQty(id, qty) {
  if (!getProduct(id)) return;
  if (qty <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, clamp(qty, 1, 99));
  }
  renderCart();
}

function openCart() {
  els.cartBackdrop.hidden = false;
  els.cartDrawer.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => els.closeCartBtn.focus(), 0);
}

function closeCart() {
  els.cartBackdrop.hidden = true;
  els.cartDrawer.hidden = true;
  document.body.style.overflow = "";
  els.cartBtn.focus();
}

function wireEvents() {
  for (const btn of els.filterBtns) {
    btn.addEventListener("click", () => {
      setActiveFilter(btn.dataset.filter || "all");
      renderProducts();
    });
  }

  els.searchInput.addEventListener("input", () => {
    state.search = els.searchInput.value;
    renderProducts();
  });
  els.clearSearchBtn.addEventListener("click", () => {
    els.searchInput.value = "";
    state.search = "";
    renderProducts();
    els.searchInput.focus();
  });

  els.sortSelect.addEventListener("change", () => {
    state.sort = els.sortSelect.value;
    renderProducts();
  });

  els.productGrid.addEventListener("click", (e) => {
    const t = /** @type {HTMLElement} */ (e.target);
    const add = t.closest("[data-add]");
    const quick = t.closest("[data-quick]");
    if (add) {
      addToCart(add.getAttribute("data-add"));
      return;
    }
    if (quick) {
      const id = quick.getAttribute("data-quick");
      const p = getProduct(id);
      if (!p) return;
      toast(p.title, `${money(p.price)} • ${p.badge} • Rating ${p.rating.toFixed(1)}`);
    }
  });

  els.cartBtn.addEventListener("click", openCart);
  els.closeCartBtn.addEventListener("click", closeCart);
  els.cartBackdrop.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.cartDrawer.hidden) closeCart();
  });

  els.cartItems.addEventListener("click", (e) => {
    const t = /** @type {HTMLElement} */ (e.target);
    const inc = t.closest("[data-inc]");
    const dec = t.closest("[data-dec]");
    const rem = t.closest("[data-remove]");
    if (inc) {
      const id = inc.getAttribute("data-inc");
      setCartQty(id, (cart.get(id) || 0) + 1);
    } else if (dec) {
      const id = dec.getAttribute("data-dec");
      setCartQty(id, (cart.get(id) || 0) - 1);
    } else if (rem) {
      removeFromCart(rem.getAttribute("data-remove"));
    }
  });

  els.clearCartBtn.addEventListener("click", () => {
    cart.clear();
    renderCart();
    toast("Cart cleared", "Your cart is now empty.");
  });

  els.checkoutBtn.addEventListener("click", () => {
    const count = cartItemCount();
    if (count === 0) {
      toast("Nothing to checkout", "Add items to your cart first.");
      return;
    }
    toast("Checkout (demo)", "No payment is processed in this demo.");
  });

  els.randomPickBtn.addEventListener("click", () => {
    const items = sortProducts(filteredProducts());
    const pick = items[Math.floor(Math.random() * items.length)];
    if (!pick) return;
    toast("Pick for you", pick.title);
    addToCart(pick.id, 1);
    openCart();
  });
}

function init() {
  setActiveFilter("all");
  state.sort = els.sortSelect.value || "featured";
  renderProducts();
  renderCart();
  wireEvents();
}

init();

