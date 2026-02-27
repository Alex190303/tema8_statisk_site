const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product_gallery_2");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    const tilbudspris = product.price - (product.price * product.discount) / 100;

    listContainer.innerHTML += `
       <article class="product_preview">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product img">
                    <h3>${product.productdisplayname}</h3>
                    <p>Brandname: ${product.brandname}</p>
                    <p class="price">Price: $${product.price}</p>
                     <p class="discountpricer">Price: $${tilbudspris}</p>
                    <button class="product_preview_btn"><a href="product.html">View product</a></button>
                </article>
    `;
  });
}

getProducts();
