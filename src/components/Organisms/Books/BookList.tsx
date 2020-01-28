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

const BookList: FunctionComponent<Props> = ({ bookList }) => {
  const [currentItems, setCurrentItems] = useState(bookList);

  useEffect(() => setCurrentItems(bookList), [bookList.length])

  const renderCurrentItems = () => currentItems.map(book =>
    <Book key={book.bookID} detail={book} />
  )

  return (
    <ArticleList items={renderCurrentItems()} />
  )
}

export default BookList
