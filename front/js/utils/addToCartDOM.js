//INSERT cart products to the DOM
const cartItemDOM = getElement('#cart__items');

export const addToCartDOM = (item) => {

  const article = document.createElement('article');
  article.classList.add('cart-item');
  article.setAttribute('data-id', item.id);
  article.setAttribute('data-color', item.color);
  //<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
  article.innerHTML = `
    <div class="cart__item__img">
      <img src="${item.image}" alt="${item.altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${item.name}</h2>
        <p>${item.color}</p>
        <p>${item.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : ${item.quantity}</p>
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