import addToCartDOM from "./addToCartDOM.js";
import * as store  from "../store/cartStore.js";
import * as storeOrder  from "../store/orderStore.js";
import { displayTotalQuantity, displayTotalPrice } from "./quantityPrice.js";
import { orderProducts } from "../services/api.js";
import { validate } from "./form.js";
import getElement from "../utils/getElement.js";

const cart = store.getItems();

//LOAD products with addToCartDOM & getItems
export function loadCart(cart) {
  cart.forEach(item => {
    addToCartDOM(item);
  });
}
/////////////////////////////////////////////////////
//CHANGE quantity of items & DELETE items from the DOM
export function cartFunctionality() {
  document.querySelectorAll('.deleteItem').forEach(el => {
    el.addEventListener('click', function (e) {
      const element = e.target;
      const itemDOM = element.closest('article');

      const id = itemDOM.dataset.id;
      const color = itemDOM.dataset.color;

      if (element.classList.contains("deleteItem")) {
        store.removeItems(id, color);
        //REMOVE item from the DOM
        itemDOM.remove();
        //UPDATE total quantity & price
        displayTotalQuantity();
        displayTotalPrice();
      } 
    });
  });

  document.querySelectorAll('.itemQuantity').forEach(el => {
    el.addEventListener('change', e => {
      const element = e.target;
      const itemDOM = element.closest('article');

      const id = itemDOM.dataset.id;
      const color = itemDOM.dataset.color;
      
      if (element.classList.contains("itemQuantity")) {
        //convert quantity from string to number
        const newQuantity = parseInt(element.value);
        if (newQuantity > 0 && newQuantity <= 100) {
          store.changeQuantity(id, color, newQuantity);
        } else if (newQuantity === 0) {
          store.removeItems(id, color);
          //REMOVE item from the DOM
          itemDOM.remove();
        } else {
          alert("Veuillez sélectionner une quantité entre 1 et 100, si vous souhaitez commander plus de 100, veuillez nous contacter. Merci!");
          return
        }
        //UPDATE total quantity & price
        displayTotalQuantity();
        displayTotalPrice();
      } 
    })
  })
}

/////////////////////////////////////////////////////
//FORM
let form = document.forms[0];
const buttonForm = getElement('#order');

form.addEventListener('submit', e => {
  e.preventDefault();
})

buttonForm.addEventListener('click', e => {
  if (cart.length === 0) {
    alert("S'il vous plait, ajouter des produits dans votre panier avant de commander");
    return
  }
  if (!validate(form)) {
    return
  }
  //send data to server
  const data = {
    contact: {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      address: form.address.value,
      city: form.city.value,
      email: form.email.value,
    },
    //add data from local storage
    products: cart.map(item => item.id)
  }
  //POST form data to the API
  orderProducts(data) 
  .then(result => {
      storeOrder.saveOrderId(result.orderId);
      form.reset();
      //clear cart
      store.clearCart();
      //clear cart from the DOM
      getElement('#cart__items').innerHTML = "";
      //update total quantity & price
      displayTotalQuantity();
      displayTotalPrice();
      //redirect ro confirmation.html
      window.location.href = "confirmation.html";      
  })
  .catch(err => {
      //display error message
      getElement('.cart__order').insertAdjacentHTML('afterend',`
        <div class="cart__order">
          <h2>Votre panier est vide. Nous n'avons pas pu traiter votre commande. Veuillez réessayer</h2>
        </div>
      `);
    console.log(err);
  });
});

//init function
const init = () => { 
  loadCart(cart);
  //DISPLAY total quantity & price
  displayTotalQuantity();
  displayTotalPrice(); 
  cartFunctionality();
};

init();


