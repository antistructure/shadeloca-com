import { query as q } from 'faunadb'

import { queryDbServer } from './database/query'

export const handler = async (event, context) => {
  const data = JSON.parse(event.body)
  console.log(`Function 'createProduct' invoked`, data)
  const product = {
    data: data
  }

  return await queryDbServer(q.Create(q.Collection('products'), product))
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
