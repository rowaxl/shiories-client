import React, {
  // useState
} from 'react'
import { NextPage } from 'next'

// interfaces
import BookDetails from 'interfaces/BookDetails'

// components
import Layout from 'components/Layout'

// MUI components
import {
  Box
} from '@material-ui/core'


// API
import {
  getBooks,
  // postBook
} from './api/books'

type Props = {
  books: BookDetails[]
}

const BooksPage: NextPage<Props> = ({
  books
}) => {
  console.log(books)

  return (
    <Layout
      title="The Shiories (books)"
    >
      <h1>Books</h1>

      <Box fontFamily="fontFamily">
        Your reading list
      </Box>

    </Layout>
  )
}

BooksPage.getInitialProps = async () => {
  const books: BookDetails[] = await getBooks()

  return { books }
}

export default BooksPage