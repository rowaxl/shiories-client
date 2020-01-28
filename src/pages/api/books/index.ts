import fetchWrapper from 'utils/fetchWrapper'
import { BookSearchQuery, BookSearchResult } from 'interfaces'
import { GoogleBookSearchEndpoint } from 'constants/api'
import parseBookSearchQuery from 'utils/parseBookSearchQuery'

/**
 * GET /
 * search book detail by google api
 */
export const searchBook = async (query: BookSearchQuery) => {
  const res: BookSearchResult = await fetchWrapper(GoogleBookSearchEndpoint + parseBookSearchQuery(query))

  return res
}