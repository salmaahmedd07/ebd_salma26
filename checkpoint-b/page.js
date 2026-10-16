
import { items } from "./items.js";

export function renderItems(list) {
  const productList = document.querySelector("#list");

  productList.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");

    li.className = "stock-line";
    li.textContent = `${item.name} (${item.category})`;

    productList.appendChild(li);
  });
}

export function matching() {
  return items.filter(item => item.inStock === true);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#shortlist");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

if (typeof process === "undefined") {
  start();
}
