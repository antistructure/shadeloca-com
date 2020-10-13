import { products } from './_data'

export function get(req, res, next) {
  res.end(JSON.stringify(products))
}
