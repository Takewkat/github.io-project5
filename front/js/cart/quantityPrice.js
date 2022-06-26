import getElement from "../utils/getElement.js";
import { getItems } from "../store/cartStore.js";
import totalQuantityHeader from "../header.js";

//PICK total quantity & price from the DOM in cart.html
const totalQuantityDOM = getElement('#totalQuantity');
const totalPriceDOM = getElement('#totalPrice');

//INSERT totalQuantity to the DOM in cart.html
function displayTotalQuantity() {
  const cart = getItems();
  const quantity = cart.reduce((total, cartItem) => {
    return (total += cartItem.quantity);
  }, 0);
  totalQuantityDOM.textContent = quantity; 
  totalQuantityHeader();
}
//INSERT totalPrice to the DOM in cart.html
function displayTotalPrice() {
  const cart = getItems();
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.productPrice * cartItem.quantity);
  }, 0);
  totalPriceDOM.textContent = total;
}

export {
  displayTotalQuantity,
  displayTotalPrice
}
