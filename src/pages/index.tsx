// import React, { useState } from 'react'
import React from 'react'
import { NextPage } from 'next'

// Components
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import AddArticle from '../components/InputForm/AddArticle'

// type DummyArticle = {
//   id: string,
//   title: string,
//   impression: string,
//   wrotenAt: number
// }

const IndexPage: NextPage = () => {
  // TODO: GET articles/
  const dummyArticle = [
    {
      "id": "01ARZ3NDEKTSV4RRFFQ69G5FAV",
      "title": "title0",
      "impression": "lolem ipsum",
      "wrotenAt": 1576834054417
    },
    {
      "id": "01ARZ3NDEKTSV5RRFFQ69G5FAV",
      "title": "title2",
      "impression": "lolem ipsum",
      "wrotenAt": 1576834954555
    },
    {
      "id": "01ARZ3NDEKTSV4RRFFQ69G5FAZ",
      "title": "title1",
      "impression": "lolem ipsum",
      "wrotenAt": 1576835154555
    },
    {
      "id": "01ARZ3NDEKTSFFRRFFQ69G5FAV",
      "title": "title3",
      "impression": "lolem ipsum",
      "wrotenAt": 1576835354417
    }
  ]

  // const [articles] = useState()

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={dummyArticle} />

      <GridContainer {...{ direction: "column", alignItems: "center" }}>
        <AddArticle />
      </GridContainer>
    </Layout>
  );
}

// IndexPage.getInitialProps = async () => {
  
// }

export default IndexPage
