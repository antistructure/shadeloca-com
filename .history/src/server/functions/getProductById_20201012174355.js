import faunadb, { query as q } from 'faunadb'
import { getId } from 'utils'

export const handler = async (event, context) => {

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_KEY
  })
  const id = getId(event.path)

  console.log(`Function 'getProduct' invoked. Get id: ${id}`)

  return await client.query(q.Collection(`/todos/${id}`))
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}