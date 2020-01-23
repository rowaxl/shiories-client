import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import { BookmarkDetails } from 'interfaces/BookmarkDetails'

// Components
import Layout from 'components/Layout'
import GridContainer from 'components/Grid/GridContiner'

import ArticleList from 'components/Article/ArticleList'
import AddArticle from 'components/Article/Form/AddArticle'

import Modal from 'components/Modal/SpringModal'

// logics
import isOpenModal from 'states/isOpenModal'

// API
import { getArticles, postArticle } from './api/articles'

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

    // TODO: close modal

    const renewed = await getArticles()

    setArticles(renewed)
  }

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={currentArticles} />

      <GridContainer {...{ direction: "column", alignItems: "center" }}>
        <button type="button" onClick={open}>
          open
        </button>

        <Modal
          isOpen={isOpen}
          closeModal={close}
        >
          <AddArticle onSubmit={onSubmitArticle} />
        </Modal>
      </GridContainer>

    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  const articles: BookmarkDetails[] = await getArticles()

  return { articles }
}

export default IndexPage
