import { query as q } from 'faunadb'

import { queryDbServer } from './database/query'
import { getId } from 'utils'

export const handler = async (event, context) => {
  const id = getId(event.path)
  
  console.log(`Function 'deleteProductById' invoked. delete id: ${id}`)

  return queryDbServer(q.Delete(q.Ref(q.Collection('products'), `${id}`)))
    .then((res) => {
      console.log('success', res)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
