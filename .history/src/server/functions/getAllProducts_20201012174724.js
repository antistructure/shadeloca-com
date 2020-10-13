import { query as q } from 'faunadb'
import { queryDbServer } from './server/db/config.js'

export const handler = async (event, context) => {
  console.log('Function `getAllProducts` invoked')
  
  return await queryDbServer(q.Paginate(q.Match(q.Index('products'))))
    .then(res => {
      console.log('Product refs', res.data)
      console.log(`${res.data.length} products found`)
      
      const allProductsDataQuery = res.data.map(ref => q.Get(ref))
      
      return queryDbServer(allProductsDataQuery).then(res => {
        return {
          statusCode: 200,
          body: JSON.stringify(res)
        }
      })
    })
    .catch(error => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
