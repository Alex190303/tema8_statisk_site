const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const listURL = "https://kea-alt-del.dk/t7/api/products?limit=9&category=" + category;
const listContainer = document.querySelector(".product_gallery_2");

const btn_filter = document.querySelector("#filterSeasonBtn");
console.log(btn_filter);

function filterBySeason() {
  console.log("filter tekst");

  let newData = allProducts.filter((product) => product.season);
  showProducts(newData);
}

const btn_sort = document.querySelector(".sort_by_price");
console.log(btn_sort);

function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
  console.log("tekst");
}

let allProducts = [];

function getProducts() {
  fetch(listURL).then((res) =>
    res.json().then((products) => {
      allProducts = products;
      showProducts(allProducts);
    }),
  );
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    const tilbudspris = product.price - (product.price * product.discount) / 100;

    listContainer.innerHTML += `
       <article class="product_preview">
                    <a href="product.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product img"></a>
                    <h3>${product.productdisplayname}</h3>
                    <p>Brandname: ${product.brandname}</p>
                    <p class="price">Sub-category: ${product.subcategory}</p>
                     <p class="discountpricer">Price: $${tilbudspris}</p>
                    <a class="product_preview" href="product.html?id=${product.id}"><button class="product_preview_btn">View product</button></a>
                </article>
    `;
  });
}

btn_sort.addEventListener("click", sortByPriceAsc);
getProducts();

btn_filter.addEventListener("click", filterBySeason);
