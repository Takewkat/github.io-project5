const baseUrl = 'http://localhost:3000/api';
const urlProducts = `${baseUrl}/products/`;

const getProductList = () => fetch(urlProducts)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .catch(console.log);

function loadProducts(data) {
  const indexItems = document.querySelector('#items');

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
        <h3 class="productName">"${productName}"</h3>
        <p class="productDescription">"${productDescription}"</p>
      </article>
    </a>`

    indexItems.insertAdjacentHTML('beforeend', indexTemplate);
  });
}

getProductList().then(loadProducts);