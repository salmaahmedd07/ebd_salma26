
export function addProduct(name, price) {
  const list = document.querySelector("#list");

  const card = document.createElement("li");
  card.className = "card";

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.className = "price";
  priceText.textContent = `${price} EGP`;

  card.appendChild(heading);
  card.appendChild(priceText);

  list.appendChild(card);
}

export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    card => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    card => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.remove();
  });
}

export function wireButtons() {
  const addButton = document.querySelector("#add");
  const resetButton = document.querySelector("#reset");

  addButton.addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  resetButton.addEventListener("click", () => {
    clearProducts();
  });
}
