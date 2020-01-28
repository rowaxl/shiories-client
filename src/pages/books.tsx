import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

// interfaces
import { BookDetails } from 'interfaces'

// components
import Layout from 'components/Templates/Layout'
// import BookList from 'components/Organisms/Books/BookList'

// MUI components
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

// models
import { getAllBooks } from 'models/books'

const BookList = dynamic(
  () => import('components/Organisms/Books/BookList'),
  { loading: () => <CircularProgress /> }
)

const BooksPage: NextPage = () => {
  const [bookList, setBookList] = useState<BookDetails[]>([])

  useEffect(() => {
    const update = async () => {
      const result = await getAllBooks(window)
      setBookList(result)
    }

    update()
  }, [])

  return (
    <Layout
      title="The Shiories (books)"
    >
      <Typography
        variant="h3"
      >
        Reading List
      </Typography>

      <BookList bookList={ bookList } />

    </Layout>
  )
}

export default BooksPage