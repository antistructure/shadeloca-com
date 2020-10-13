import { query as q } from 'faunadb'
import { queryDbServer } from './server/db/config'

export const handler = async (event, context) => {
  const data = JSON.parse(event.body)
  console.log(`Function 'createProduct' invoked`, data)
  const product = {
    data: data
  }

  return await queryDbServer(q.Create(q.Collection('Product'), product))
    .then((res) => {
      console.log('success', res)
      /* Success! return the res with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    }).catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
