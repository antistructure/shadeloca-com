import fetch from 'node-fetch'

const createProduct = (data) => 
  fetch('/.netlify/functions/createProduct', {
    body: JSON.stringify(data),
    method: 'POST'
  })
  .then(res => res.json())

const getProducts = () =>
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
