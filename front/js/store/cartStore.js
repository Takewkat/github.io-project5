import { getStorageItem, setStorageItem } from './localStorage.js';

//init, take data from local storage -> to In-Memory Storage
let cart = getStorageItem('cart');

//CHECK id & color
function findItem(id, color) {
  return cart.find(item => item.id === id && item.color === color);
}
//addItem to In-Memory Storage -> then to local storage
export function addItem(newItem) {
  const item = findItem(newItem.id, newItem.color);
  if (item) {
    item.quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }
  setStorageItem('cart', cart)
}

/////////////////////////////////////////////////////
//DELETE item from In-Memory Storage -> then from local storage

export function removeItems(id, color) {
  cart = cart.filter(cartItem => cartItem.id !== id && cartItem.color !== color);

  setStorageItem('cart', cart);
}
