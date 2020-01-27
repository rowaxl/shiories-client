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
import {
  Box
} from '@material-ui/core'

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
      <h1>Books</h1>
      <Box fontFamily='fontFamily'>
        Book list
      </Box>

    
      <BookList bookList={bookList} />

    </Layout>
  )
}

BooksPage.getInitialProps = async () => {
  const bookList: BookDetails[] = await getBooks()

  return { bookList }
}

export default BooksPage