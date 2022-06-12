const baseUrl = 'http://localhost:3000/api';
const urlOneProduct = `${baseUrl}/products/`;

let params = new URLSearchParams(document.location.search);
const id = params.get('id');

const getOneProduct = (id) => fetch(urlOneProduct + id)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .catch(console.log);

function loadOneProduct(item) {
  //console.log(item);
      
  const productImage = item.imageUrl;
  const productTxt = item.altTxt;
  const productName = item.name;
  const productPrice = item.price;
  const productDescription = item.description;
  const productColors = item.colors;
  
  const itemImage = document.querySelector('.item__img');
  const itemTitle = document.querySelector('#title');
  const itemPrice = document.querySelector('#price');
  const itemDescription = document.querySelector('#description');
  const itemColors = document.querySelector('#colors');

  itemImage.innerHTML = `<img src="${productImage}" alt="${productTxt}">`;
  itemTitle.textContent = `${productName}`;é
  itemPrice.textContent = `${productPrice}`;
  itemDescription.textContent = `${productDescription}`;

  for (let color of productColors) {
    itemColors.innerHTML += `<option value="${color}">${color}</option>`;
  }

}

getOneProduct(id).then(loadOneProduct);



