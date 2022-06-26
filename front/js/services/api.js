const baseUrl = 'http://localhost:3000/api/products/';

const toJSON = res => {
  //if(response.status >= 200 && response.status <= 299)
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
}

//index.html GET
const urlProducts = `${baseUrl}`;
const getAllProducts = () => fetch(urlProducts)
  .then(toJSON)
  .catch(console.log);

//product.html GET
const urlOneProduct = `${baseUrl}`;
const getOneProduct = (id) => fetch(urlOneProduct + id)
  .then(toJSON)
  .catch(console.log);

//cart.html POST
//POST form data to the API 
const urlOrder = `${baseUrl}order`;
const orderProducts = (data) => fetch(urlOrder, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  //data from form
  body: JSON.stringify(data)
})
.then(toJSON)

export {
  getAllProducts,
  getOneProduct,
  orderProducts,
}

