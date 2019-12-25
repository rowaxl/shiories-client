import fetchWrapper from '../../../utils/fetchWrapper'
import { Article } from '../../../interfaces/Article'

/**
 * GET /articles
 * get all list of articles
 */
export const getArticles = async () => {
  const res: Article[] = await fetchWrapper('http://localhost:3000/articles')

  return res
}

/**
 * POST /articles
 * submit new article
 */
export const postArticle = async (body: Article) => {
  const res: Article = await fetchWrapper<Article>(
    'http://localhost:3000/articles', {
      method: 'POST',
      body: JSON.stringify(body)
  })

  return res
}