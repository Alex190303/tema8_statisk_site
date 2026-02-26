const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector(".conatiner_3");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
    <img class="conatiner_3_img" src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="product img">
            <h3>${data.productdisplayname}</h3>
            <p>${data.brandname}</p>
            <p class="price">${data.price}</p>
            <p class="stock">${data.discount}</p>
            <button class="basket_btn">Add to basket</button>
  `;
}

getData();
