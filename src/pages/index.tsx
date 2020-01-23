import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import { BookmarkDetails } from 'interfaces/BookmarkDetails'

// components
import Layout from 'components/Layout'

import ArticleList from 'components/Article/ArticleList'
import AddArticle from 'components/Article/Form/AddArticle'

import Modal from 'components/Modal/SpringModal'

// MUI components
import Fab from '@material-ui/core/Fab'
import BookmarkIcon from '@material-ui/icons/Bookmark'

// states
import isOpenModal from 'states/isOpenModal'

// API
import { getArticles, postArticle } from './api/articles'

// styles
import customStyle from 'styles/customStyles'

type Props = {
  articles: BookmarkDetails[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {

  const [currentArticles, setArticles] = useState(articles)

  const {
    isOpen,
    open,
    close
  } = isOpenModal()

  const onSubmitArticle = async (newArticle: BookmarkDetails) => {
    await postArticle(newArticle)

    close()

    const renewed = await getArticles()

    setArticles(renewed)
  }

  return (
    <Layout title="The Shiories (Home)">
      <h1>Your Bookmarks</h1>

      <ArticleList items={currentArticles} />

      <div className={customStyle().floatingActionButton}>
        <Fab
          color="primary"
          aria-label="add-bookmark"
          onClick={open}
          variant="extended"
        >
          <BookmarkIcon />
          New Bookmark
        </Fab>
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={close}
      >
        <AddArticle onSubmit={onSubmitArticle} />
      </Modal>

    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  const articles: BookmarkDetails[] = await getArticles()

  return { articles }
}

export default IndexPage
