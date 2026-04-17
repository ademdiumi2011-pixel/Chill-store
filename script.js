const items = [
  {
    name: "سماعات",
    price: "3000 DA",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "هاتف",
    price: "50000 DA",
    image: "https://via.placeholder.com/200"
  }
];

const container = document.getElementById("products");

items.forEach(item => {
  container.innerHTML += `
    <div class="card">
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    </div>
  `;
});
