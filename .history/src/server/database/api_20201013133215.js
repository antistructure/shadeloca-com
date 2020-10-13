import fetch from 'node-fetch'
// import createProduct from '../functions/createProduct'
// import deleteProduct from '../functions/deleteProductById'
// import getProducts from '../functions/getAllProducts'
// import getProduct from '../functions/getProductById'
// import updateProduct from '../functions/updateProductById'

const createProduct = (data) => 
  fetch('/.netlify/functions/createProduct', {
    body: JSON.stringify(data),
    method: 'POST'
  })
  .then(res => res.json())

const getProducts = () =>
  // fetch('/.netlify/functions/getAllProducts')
  fetch('/.netlify/functions/getAllProducts')
    .then((res) => res.json())

const updateProduct = (id, data) =>
  fetch(`/.netlify/functions/updateProductById/${id}`, {
    body: JSON.stringify(data),
    method: 'POST'
  })
  .then(res => res.json())

const deleteProduct = (id) =>
  fetch(`/.netlify/functions/deleteProductById/${id}`, {
    method: 'POST',
  })
  .then(res => res.json())

export default {
  createProduct: createProduct,
  getProducts: getProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
}
