import faunadb, { query as q } from 'faunadb'

export const handler = async (event, context) => {
  console.log('Function `getAllProducts` invoked')
  
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_KEY
  })

  return await client.query(q.Paginate(q.Match(q.Index('products'))))
    .then(res => {
      console.log('Product refs', res.data)
      console.log(`${res.data.length} products found`)
      
      const allProductsDataQuery = res.data.map(ref => q.Get(ref))
      
      return client.query(allProductsDataQuery).then(res => {
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
