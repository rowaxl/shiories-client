import React, {
  // useState
} from 'react'
import { NextPage } from 'next'

// interfaces
import { BookDetails } from 'interfaces'

// components
import Layout from 'components/Templates/Layout'
import BookList from 'components/Organisms/Books/BookList'

// MUI components
import Typography from '@material-ui/core/Typography'

// API
import {
  getBooks,
  // postBook
} from './api/books'

type Props = {
  bookList: BookDetails[]
}

const BooksPage: NextPage<Props> = ({
  bookList
}) => {
  return (
    <Layout
      title="The Shiories (books)"
    >
      <Typography
        variant="h3"
      >
        Books you read(ing)
      </Typography>

      <BookList bookList={bookList} />

    </Layout>
  )
}

BooksPage.getInitialProps = async () => {
  const bookList: BookDetails[] = await getBooks()

  return { bookList }
}

export default BooksPage