import faunadb, { query as q } from "faunadb"

export const handler = async (event, context) => {
  console.log('Function `getAllProducts` invoked')
  
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_KEY
  })

  return await client.query(q.Paginate(q.Match(q.Ref('indexes/allProducts'))))
    .then(response => {
      const productRefs = response.data
      console.log('Product refs', productRefs)
      console.log(`${productRefs.length} products found`)
      
      const getAllProductsDataQuery = productRefs.map(ref => {
        return q.Get(ref)
      })
      
      return client.query(getAllProductsDataQuery).then(ret => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
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
