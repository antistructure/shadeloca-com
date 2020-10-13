import { query as q } from 'faunadb'

import { queryDbServer } from './server/db/config.js'
import { getId } from './utils.js'

export const handler = async (event, context) => {
  const id = getId(event.path)

  console.log(`Function 'getProduct' invoked. Get id: ${id}`)

  return await queryDbServer(q.Collection(`products/${id}`))
    .then((res) => {
      console.log('success', res)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    })
    .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}