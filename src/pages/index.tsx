import React, { useState } from 'react'
import { NextPage } from 'next'

// interface
import { Article } from '../interfaces/Article'

// Components
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import AddArticle from '../components/InputForm/AddArticle'

// API
import { getArticles, postArticle } from './api/articles'

type Props = {
  articles: Article[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {
  const [currentArticles, setArticles] = useState(articles);

  const onSubmitArticle = async (newArticle: Article) => {
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
  const articles: Article[] = await getArticles()

  console.log(articles)

  return { articles }
}

export default IndexPage
