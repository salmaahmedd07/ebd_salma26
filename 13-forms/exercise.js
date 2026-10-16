
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("li");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="price">${item.price} EGP</p>
    `;

    list.appendChild(card);
  });
}

const items = [];

export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!document.querySelector("#price").value || !(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}
