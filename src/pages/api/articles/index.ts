import { FetchWrapper } from '../../../utils/FetchWrapper'
import { Article } from '../../../interfaces/Article'

/**
 * GET /articles
 * get all list of articles
 */
export const getArticles = async () => {
  const res: Article[] = await FetchWrapper('http://localhost:3000/articles')

  return res
}
