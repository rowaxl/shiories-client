// import React, { useState } from 'react'
import React from 'react'
import { NextPage } from 'next'

// interface
import { Article } from '../interfaces/Article'

// Components
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import AddArticle from '../components/InputForm/AddArticle'

// API
import { getArticles } from './api/articles'

type Props = {
  articles: Article[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={articles} />

      <GridContainer {...{ direction: "column", alignItems: "center" }}>
        <AddArticle />
      </GridContainer>
    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  const articles: Article[] = await getArticles()

  return { articles }
}

export default IndexPage
