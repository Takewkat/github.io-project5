import getElement from "./utils/getElement.js";
import { getItems } from "./store/cartStore.js";

//SHOW total quantity in header at all pages
const totalQuantityCart = getElement('nav > ul > a:nth-child(2) > li');
totalQuantityCart.insertAdjacentHTML('afterend', `<span style='padding:10px;text-decoration: underline;color:black'></span>`);
const quantitySpan = getElement('span');

export default function totalQuantityHeader() {

  const cart = getItems();
  
  const quantity = cart.reduce((total, cartItem) => {
    return (total += cartItem.quantity);
  }, 0);

  quantitySpan.textContent = quantity; 
}