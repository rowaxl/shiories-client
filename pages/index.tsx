import React, { useState } from 'react'
import { NextPage } from 'next'

// Components
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import AddArticle from '../components/InputForm/AddArticle'

type DummyArticle = {
  id: string,
  title: string,
  impression: string,
  wrotenAt: number
}

const IndexPage: NextPage = () => {
  const dummyArticle: DummyArticle[] = [{
    id: 'a-b-c-d',
    title: 'title1',
    impression: 'impression1',
    wrotenAt: new Date('2019-12-20T10:20:30Z').getTime()
  }]

  const [articles] = useState(dummyArticle)

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

export default IndexPage
