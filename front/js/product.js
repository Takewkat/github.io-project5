import getElement from "./utils/getElement.js";
import { getOneProduct } from "./services/api.js";
import { addItem } from "./store/cartStore.js";

//search with URLSearchParams
let params = new URLSearchParams(document.location.search);
const id = params.get('id');

//pick quantity & colors from the DOM
const quantityItem = getElement("#quantity");
const colorItem = getElement("#colors");

//initilize currentItem
let currentItem;

//INSERT oneProduct to the DOM
function loadOneProduct(item) {
  //console.log(item);
  
  const productImage = item.imageUrl;
  const productTxt = item.altTxt;
  const productName = item.name;
  const productPrice = item.price;
  const productDescription = item.description;
  const productColors = item.colors;
  //create currentItem {}
  currentItem = { id, productImage, productName, productTxt };
  
  const itemImage = getElement('.item__img');
  const itemTitle = getElement('#title');
  const itemPrice = getElement('#price');
  const itemDescription = getElement('#description');
  const itemColors = getElement('#colors');

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
//SEND cartItem {} to local storage through In-Memory Storage
const cartBtn = getElement('#addToCart');
cartBtn.addEventListener('click', function () {
  
  //convert quantity to number
  const quantity = parseInt(quantityItem.value);
  const color = colorItem.value;

  //if quantity 0 or color is not selected, alert
  if (quantity === 0 || color === "") {
    alert("Please select quantity and color");
    return;
  }

  if (currentItem) {
    const cartItem = { 
      ...currentItem,
      quantity,
      color,
    };
    addItem(cartItem);
  } else {
    console.log('No item selected');
  }
});

