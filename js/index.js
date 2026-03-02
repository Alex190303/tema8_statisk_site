const listURL = "https://kea-alt-del.dk/t7/api/categories";
const listContainer = document.querySelector(".category_gallery");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showCategories(products)));
}

function showCategories(categories) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  categories.forEach((category) => {
    listContainer.innerHTML += `
     <article class="product">
                    <a class="homepage_links" href="productlist.html?category=${category.category}">${category.category}</a>
                </article>
                    `;
  });
}

getProducts();
