import { getOneProduct } from "./services/api.js";

let params = new URLSearchParams(document.location.search);
const id = params.get('id');

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
  itemTitle.textContent = `${productName}`;
  itemPrice.textContent = `${productPrice}`;
  itemDescription.textContent = `${productDescription}`;

  for (let color of productColors) {
    itemColors.innerHTML += `<option value="${color}">${color}</option>`;
  }
}

getOneProduct(id).then(loadOneProduct);


//////////////////////////////////////////////////////////////////////////////////
