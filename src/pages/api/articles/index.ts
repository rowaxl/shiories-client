import { FetchWrapper } from '../../../utils/FetchWrapper'

/**
 * GET /articles
 * get all list of articles
 */
export default async () => {
  const res = await FetchWrapper('http://localhost:3000/articles')

  return res
}
