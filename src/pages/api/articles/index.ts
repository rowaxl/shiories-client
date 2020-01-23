import fetchWrapper from 'utils/fetchWrapper'
import { BookmarkDetails } from 'interfaces/BookmarkDetails'

/**
 * GET /articles
 * get articles with details
 */
export const getArticles = async () => {
  const res: BookmarkDetails[] = await fetchWrapper('http://localhost:3000/articles')

  if (res) {
    res.sort((a, b) => b.wrotenAt - a.wrotenAt)
  }

  return res
}

/**
 * POST /articles
 * submit new article
 */
export const postArticle = async (body: BookmarkDetails) => {
  const res: BookmarkDetails = await fetchWrapper<BookmarkDetails>(
    'http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  })

  return res
}