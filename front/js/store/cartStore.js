import { getStorageItem, setStorageItem } from './localStorage.js';

//init, take data from local storage -> to In-Memory Storage
let cart = getStorageItem('cart');

//GET data from In-Memory Storage
function getItems() {
  return cart;
}
//////////////////////////////////////////////////////
//CHECK id & color
function _findItem(id, color) {
  return cart.find(item => item.id === id && item.color === color);
}

//ADD:
//addItem to In-Memory Storage -> then to local storage
function addItem(newItem) {
  const item = _findItem(newItem.id, newItem.color);
  if (item) {
    item.quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }
  setStorageItem('cart', cart)
}

//REMOVE:
//DELETE item from In-Memory Storage -> then from local storage
function removeItems(id, color) {
  cart = cart.filter(cartItem => cartItem.id !== id || cartItem.color !== color);

  setStorageItem('cart', cart);
}

//CHANGE quantity of items in cart:
function changeQuantity(id, color, newQuantity) {
  const item = _findItem(id, color);
  if (item) {
    item.quantity = newQuantity;
  } 
  setStorageItem('cart', cart);
}
//////////////////////////////////////////////////////
//CLEAR:
function clearCart() {
  cart = [];
  setStorageItem('cart', cart);
}

export {
  getItems,
  addItem,
  removeItems,
  changeQuantity,
  clearCart
}