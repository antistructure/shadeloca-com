import gql from 'graphql-tag'

export const PRODUCTS_QUERY = gql`
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
