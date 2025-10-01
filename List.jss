let products = [
  { name: "Laptop", category: "electronics", price: 600 },
  { name: "Phone", category: "electronics", price: 300 },
  { name: "T-Shirt", category: "clothing", price: 20 },
  { name: "Jeans", category: "clothing", price: 40 }
];

function displayProducts(list) {
  let container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  let filter = document.getElementById("categoryFilter").value;
  let filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  displayProducts(filtered);
}

function sortProducts() {
  let order = document.getElementById("sortPrice").value;
  let sorted = [...products].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);
