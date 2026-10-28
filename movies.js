let table = [];
let products = [];

async function getProducts() {

  let res = await fetch('https://api.tvmaze.com/shows');

  products = await res.json();

  let container = document.getElementById("products");

  for (let i = 0; i < 16; i++) {

    let show = products[i];

    container.innerHTML += `
      <div class="movie-card">
        <div class="movie-img">
          <img src="${show.image.medium}">
        </div>
        <div class="movie-body">
          <h3 class="movie-name">🎬 ${show.name}</h3>
          <span class="movie-year">year: ${show.premiered.slice(0, 4)}</span>
          <button class="book-btn" onclick="addToTable(${i})">Book Now</button>
        </div>
      </div>
    `;
  }

}

function addToTable(index) {
  let name = products[index].name;

  for (let i = 0; i < table.length; i++) {
    if (table[i].name == name) {
      table[i].qty++;
      updateTable();
      return;
    }
  }

  table.push({ name: name, price: 100, qty: 1 });
  updateTable();
}

function increase(i) {
  table[i].qty++;
  updateTable();
}

function decrease(i) {
  table[i].qty--;
  if (table[i].qty == 0) {
    table.splice(i, 1);
  }
  updateTable();
}

function removeItem(i) {
  table.splice(i, 1);
  updateTable();
}

function updateTable() {
  let tablelist = document.getElementById("basket-body");
  let totalPrice = document.getElementById("total");
  let total = 0;

  tablelist.innerHTML = "";

  for (let i = 0; i < table.length; i++) {
    total += table[i].price * table[i].qty;

    tablelist.innerHTML += `
      <tr>
        <td class="basket-name">${table[i].name}</td>
        <td>${table[i].price} EGP</td>
        <td>
          <button class="qty-btn" onclick="decrease(${i})">-</button>
          <span class="qty-num">${table[i].qty}</span>
          <button class="qty-btn" onclick="increase(${i})">+</button>
        </td>
        <td>
          <button class="remove-btn" onclick="removeItem(${i})">Remove</button>
        </td>
      </tr>
    `;
  }

  totalPrice.innerText = total;
}




getProducts();