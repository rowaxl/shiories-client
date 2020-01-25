import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import BookmarkDetails from 'interfaces/BookmarkDetails'

// components
import Layout from 'components/Layout'
import ArticleList from 'components/Article/ArticleList'
import AddArticle from 'components/Article/Form/AddArticle'
import Modal from 'components/Modal/SpringModal'

// MUI components
import Fab from '@material-ui/core/Fab'
import BookmarkIcon from '@material-ui/icons/Bookmark'

// opned state for modal
import isOpen from 'utils/isOpen'

// API
import {
  getBookmarks,
  postBookmark
} from 'pages/api/bookmarks'

// styles
import customStyle from 'styles/customStyles'

type Props = {
  articles: BookmarkDetails[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {

  const [currentArticles, setArticles] = useState(articles)

  const {
    isOpened,
    open,
    close
  } = isOpen()

  const onSubmitBookmark = async (newBookmark: BookmarkDetails) => {
    await postBookmark(newBookmark)

    close()

    const renewed = await getBookmarks()

    setArticles(renewed)
  }

  return (
    <Layout
      title="The Shiories (bookmarks)"
    >
      <h1>Bookmarks</h1>

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
        isOpen={isOpened}
        closeModal={close}
      >
        <AddArticle onSubmit={onSubmitBookmark} />
      </Modal>

    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  const articles: BookmarkDetails[] = await getBookmarks()

  return { articles }
}

export default IndexPage
