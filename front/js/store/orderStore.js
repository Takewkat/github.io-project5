import { getStorageItem, setStorageItem } from './localStorage.js';

let orderId = getStorageItem('orderId');

function getOrderId() {
  return orderId;
}

function saveOrderId(orderId) {
  setStorageItem('orderId', orderId);
}
//////////////////////////////////////////////////////
//CLEAR:
function clearOrderId() {
  orderId = null;
  setStorageItem('orderId', orderId);
}

export {
  saveOrderId,
  getOrderId,
  clearOrderId
}