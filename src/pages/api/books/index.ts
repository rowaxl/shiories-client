import fetchWrapper from 'utils/fetchWrapper'
import BookDetails from 'interfaces/BookDetails'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { API_BASE_URL }
} = getConfig()

const endPoint = API_BASE_URL + 'books/'

/**
 * GET /books
 * get book details
 */
export const getBooks = async () => {
  const res: BookDetails[] = await fetchWrapper(endPoint)

  return res
}

/**
 * POST /books
 * add new book detail
 */
export const postBook = async (body: BookDetails) => {
  const res: BookDetails = await fetchWrapper<BookDetails>(
    endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  })

  return res
}