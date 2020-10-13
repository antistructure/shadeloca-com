import { query as q } from 'faunadb'

import { queryDbServer } from '../database/query'

export const handler = async (event, context) => {
  const data = JSON.parse(event.body)
  const product = { data: data }

  return await queryDbServer(q.Create(q.Collection('products'), {data: JSON.parse(event.body)}))
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
