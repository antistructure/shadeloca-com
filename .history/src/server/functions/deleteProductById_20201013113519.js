import { query as q } from 'faunadb'

import { queryDbServer } from './database/query'
import { getId } from './utils.js'

export const handler = async (event, context) => 
    queryDbServer(q.Delete(q.Ref(q.Collection('products'), getId(event.path))))
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
