import { getAllProducts } from "./services/api.js";
import getElement from "./utils/getElement.js";
import totalQuantityHeader from "./header.js";

//LOAD all products to index.html

function loadProducts(data) {
  const indexItems = getElement('#items');

  data.forEach(item => {
    const productId = item._id;
    const productName = item.name;
    const productImage = item.imageUrl;
    const productDescription = item.description;
    const productTxt = item.altTxt;

    let indexTemplate = 
    `<a href="./product.html?id=${productId}">
      <article>
        <img src="${productImage}" alt="${productTxt}">
        <h3 class="productName">${productName}</h3>
        <p class="productDescription">${productDescription}</p>
      </article>
    </a>`

    indexItems.insertAdjacentHTML('beforeend', indexTemplate);
  });
}

getAllProducts().then(loadProducts);
totalQuantityHeader();