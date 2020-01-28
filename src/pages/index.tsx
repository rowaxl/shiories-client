import React, {
  useState,
  useEffect
} from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

// interface
import { BookmarkDetails } from 'interfaces'

// components
import Layout from 'components/Templates/Layout'
import AddBookmark from 'components/Organisms/Bookmark/AddBookmark'
import Modal from 'components/Molecules/Modal/SpringModal'

// MUI components
import Fab from '@material-ui/core/Fab'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

// opned state for modal
import isOpen from 'utils/isOpen'

// styles
import customStyle from 'styles/customStyles'

// models
import { setBookmark, getAllBookmarks } from 'models/bookmarks'

const BookmarkList = dynamic(
  () => import('components/Organisms/Bookmark/BookmarkList'),
  { loading: () => <CircularProgress /> }
)

const IndexPage: NextPage = () => {
  const [currentArticles, setArticles] = useState<BookmarkDetails[]>([])

  useEffect(() => {
    const update = async () => {
      const result = await getAllBookmarks(window)
      setArticles(result)
    }

    update()
  }, [])

  const {
    isOpened,
    open,
    close
  } = isOpen()

  const onSubmitBookmark = async (newBookmark: BookmarkDetails) => {
    await setBookmark(window, newBookmark)

    close()

    const renewed = await getAllBookmarks(window)

    setArticles(renewed)
  }

  return (
    <Layout
      title="The Shiories (bookmarks)"
    >
      <Typography
        variant="h3"
      >
        Bookmarks
      </Typography>

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

export default IndexPage
