export const PRODUCTS_QUERY = `
  query getAllProducts {
    allProducts(_size: 10) {
    data {
      _id
      name
      description
      tags
      price
      productLink
      productType
      brand
      rating
      imageLink
    } 
   }
  }
`
