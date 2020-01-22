import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import { BookmarkDetails } from '../interfaces/BookmarkDetails'

// Components
import Layout from '../components/Layout'
import GridContainer from '../components/Grid/GridContiner'

import ArticleList from '../components/ArticleList'
import AddArticle from '../components/InputForm/AddArticle'

// API
import { getArticles, postArticle } from './api/articles'

type Props = {
  articles: BookmarkDetails[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {
  const [currentArticles, setArticles] = useState(articles)

  const onSubmitArticle = async (newArticle: BookmarkDetails) => {
    await postArticle(newArticle)

    const renewed = await getArticles()

    setArticles(renewed)
  }

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={currentArticles} />

      <GridContainer {...{ direction: "column", alignItems: "center" }}>
        <AddArticle onSubmit={onSubmitArticle} />
      </GridContainer>

    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  const articles: BookmarkDetails[] = await getArticles()

  console.log(articles)

  return { articles }
}

export default IndexPage
