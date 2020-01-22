import fetchWrapper from '../../../utils/fetchWrapper'
import { ArticleDetails } from '../../../interfaces/ArticleDetails'

/**
 * GET /articles
 * get all list of articles
 */
export const getArticles = async () => {
  const res: ArticleDetails[] = await fetchWrapper('http://localhost:3000/articles')

  return res
}

/**
 * POST /articles
 * submit new article
 */
export const postArticle = async (body: ArticleDetails) => {
  const res: ArticleDetails = await fetchWrapper<ArticleDetails>(
    'http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  })

  return res
}