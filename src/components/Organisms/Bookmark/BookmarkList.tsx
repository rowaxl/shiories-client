import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'

// components
import ArticleList from 'components/Molecules/Article/ArticleList'
import Bookmark from 'components/Organisms/Bookmark/Bookmark'

// interfaces
import { BookmarkDetails } from 'interfaces'

type Props = {
  bookmarks: BookmarkDetails[]
}

const BookmarkList: FunctionComponent<Props> = ({ bookmarks }) => {
  const [currentItems, setCurrentItems] = useState(bookmarks);

  useEffect(() => setCurrentItems(bookmarks), [bookmarks.length])

  const getCurrentItems = () => currentItems.map(bookmark => 
    <Bookmark key={bookmark.id} detail={bookmark} />
  )

  return (
    <ArticleList items={getCurrentItems()} />
  )
}

export default BookmarkList
