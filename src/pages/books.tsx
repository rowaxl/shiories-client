import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

// interfaces
import { BookDetails } from 'interfaces'

// components
import Layout from 'components/Templates/Layout'
import BookList from 'components/Organisms/Books/BookList'

// MUI components
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

// API
import { getAllBooks } from 'models/books'

const BooksPage: NextPage = () => {
  const [bookList, setBookList] = useState<BookDetails[]>()

  useEffect(() => {
    const update = async () => {
      const result = await getAllBooks(window)
      setBookList(result)
    }

    update()
  }, [])

  const renderBooklist = () => {
    if (!bookList) return <CircularProgress />

    return <BookList bookList={bookList} />
  }

  return (
    <Layout
      title="The Shiories (books)"
    >
      <Typography
        variant="h3"
      >
        Reading List
      </Typography>

      {renderBooklist()}

    </Layout>
  )
}

export default BooksPage