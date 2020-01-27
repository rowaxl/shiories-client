import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'

// components
import ArticleList from 'components/Molecules/Article/ArticleList'
import Book from 'components/Organisms/Books/Book'

// interfaces
import { BookDetails } from 'interfaces'

type Props = {
  bookList: BookDetails[]
}

const BookmarkList: FunctionComponent<Props> = ({ bookList }) => {
  const [currentItems, setCurrentItems] = useState(bookList);

  useEffect(() => setCurrentItems(bookList), [bookList.length])

  const renderCurrentItems = () => currentItems.map(book => 
    <Book key={book.id} detail={book} />
  )

  return (
    <ArticleList items={renderCurrentItems()} />
  )
}

export default BookmarkList
