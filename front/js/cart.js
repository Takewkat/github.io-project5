import getElement from "./utils/getElement.js";
import { getStorageItem, setStorageItem } from "./store/localStorage.js";
import addToCartDOM from "./utils/addToCartDOM.js";

/* TO DO THIS PAGE AGAIN : 
const totalQuantityDOM = getElement('#totalQuantity');
const totalPriceDOM = getElement('#totalPrice');

//GET data from In-Memory Storage

function loadCartProducts (cart) {
  cart.forEach(item => {
    addToCartDOM(item);
  });
}

/////////////////////////////////////////////////////
//INSERT totalQuantity & totalPrice to the DOM
export function displayTotalQuantity() {
  const quantity = cart.reduce((total, cartItem) => {
    return (total += cartItem.quantity);
  }, 0);
  totalQuantityDOM.textContent = quantity;
}
export function displayTotalPrice() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.quantity);
  }, 0);
  totalPriceDOM.textContent = total;
}


/////////////////////////////////////////////////////
//DELETE item from cart
const deleteItem = getElement('deleteItem');

deleteItem.addEventListener('click', function (e) {
  const element = e.target;
  const id = e.target.dataset.id;
  const color = e.target.dataset.color;
  // delete from [] 
  if (element.classList.contains('deleteItem')) {
    removeItems(id, color);
  }

    displayTotalQuantity();
    displayTotalPrice(); 
});
*/
