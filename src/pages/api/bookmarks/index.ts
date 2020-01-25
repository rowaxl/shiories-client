import fetchWrapper from 'utils/fetchWrapper'
import BookmarkDetails from 'interfaces/BookmarkDetails'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { API_BASE_URL }
} = getConfig()


const endPoint = API_BASE_URL + 'bookmarks/'

/**
 * GET /bookmark
 * get all saved bookmark
 */
export const getBookmarks = async () => {
  const res: BookmarkDetails[] = await fetchWrapper(endPoint)

  if (res) {
    res.sort((a, b) => b.wrotenAt - a.wrotenAt)
  }

  return res
}

/**
 * POST /bookmark
 * add new bookmark
 */
export const postBookmark  = async (body: BookmarkDetails) => {
  const res: BookmarkDetails = await fetchWrapper<BookmarkDetails>(
    endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  })

  return res
}