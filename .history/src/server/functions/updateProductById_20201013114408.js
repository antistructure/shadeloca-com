import { query as q } from 'faunadb'

import { queryDbServer } from '../database/query'
import { getId } from './utils'


export const handler = async (event, context) => {
  const data = JSON.parse(event.body)
  const id = getId(event.path)
  
  console.log(`Function 'todo-update' invoked. update id: ${id}`)

  return await queryDbServer(q.Update(q.Ref(q.Collection(`products`), `${id}`), {data}))
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
