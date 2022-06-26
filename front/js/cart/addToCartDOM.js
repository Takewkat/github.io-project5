import getElement from "../utils/getElement.js";

//INSERT cart products to the DOM
const cartItemDOM = getElement('#cart__items');

export default function addToCartDOM (item) {

  const article = document.createElement('article');
  article.classList.add('cart__item');

  article.setAttribute('data-id', item.id);
  article.setAttribute('data-color', item.color);

  article.innerHTML = `
    <div class="cart__item__img">
      <img src="${item.productImage}" alt="${item.productTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${item.productName}</h2>
        <p>${item.color}</p>
        <p>${item.productPrice} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté :</p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  `;
  cartItemDOM.appendChild(article);
};