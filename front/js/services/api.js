const baseUrl = 'http://localhost:3000/api';

const toJSON = res => {
  //if(response.status >= 200 && response.status <= 299)
  if (res.ok) {
    return res.json();
  }
}

//index.html
const urlProducts = `${baseUrl}/products/`;
export const getProductList = () => fetch(urlProducts)
  .then(toJSON)
  .catch(console.log);

//product.html
const urlOneProduct = `${baseUrl}/products/`;
export const getOneProduct = (id) => fetch(urlOneProduct + id)
  .then(toJSON)
  .catch(console.log);


