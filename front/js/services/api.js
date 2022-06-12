const baseUrl = 'http://localhost:3000/api';

const toJSON = res => {
  if (res.ok) {
    return res.json();
  }
}

const urlProducts = `${baseUrl}/products/`;
export const getProductList = () => fetch(urlProducts)
  .then(toJSON)
  .catch(console.log);

export const getOneProduct = (id) => fetch(urlProducts + id)
  .then(toJSON)
  .catch(console.log);







