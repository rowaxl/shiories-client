import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import { ArticleDetails } from '../interfaces/ArticleDetails'

// Components
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import AddArticle from '../components/InputForm/AddArticle'

// API
import { getArticles, postArticle } from './api/articles'

type Props = {
  articles: ArticleDetails[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {
  const [currentArticles, setArticles] = useState(articles);

  const onSubmitArticle = async (newArticle: ArticleDetails) => {
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
  const articles: ArticleDetails[] = await getArticles()

  console.log(articles)

  return { articles }
}

export default IndexPage
