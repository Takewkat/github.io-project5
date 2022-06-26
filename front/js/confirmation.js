import { clearOrderId, getOrderId } from "./store/orderStore.js";
import getElement from "./utils/getElement.js";

const orderDOM = getElement('#orderId');
const orderId = getOrderId();
if (orderId) {
  orderDOM.textContent = `${orderId}`;
} else {
  orderDOM.textContent = `Vous pouvez trouver le numéro de commande dans votre e-mail, merci`;
}

clearOrderId();
