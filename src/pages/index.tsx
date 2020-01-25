import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import BookmarkDetails from 'interfaces/BookmarkDetails'

// components
import Layout from 'components/Templates/Layout'
import BookmarkList from 'components/Organisms/Bookmark/BookmarkList'
import AddBookmark from 'components/Organisms/Bookmark/AddBookmark'
import Modal from 'components/Molecules/Modal/SpringModal'

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
  bookmarks: BookmarkDetails[]
}

const IndexPage: NextPage<Props> = ({ bookmarks }) => {

  const [currentArticles, setArticles] = useState(bookmarks)

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

      <BookmarkList bookmarks={currentArticles} />

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
        <AddBookmark onSubmit={onSubmitBookmark} />
      </Modal>

    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  const bookmarks: BookmarkDetails[] = await getBookmarks()

  return { bookmarks }
}

export default IndexPage
