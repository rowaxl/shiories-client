import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import GridItem from '../components/Grid/GridItem'
import { TextField, TextareaAutosize } from '@material-ui/core'

type DummyArticle = {
  id: string,
  title: string,
  impression: string
  wrotenAt: number
}

const IndexPage: NextPage = () => {
  const articles: DummyArticle[] = [{
    id: 'a-b-c-d',
    title: 'title1',
    impression: 'impression1',
    wrotenAt: Date.now()
  }]

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={articles} />

      <GridContainer {...{ direction: "column", justify:"center", alignItems:"center" }}>
        <GridItem {...{ xs: 12, sm: 12 }}>
          <TextField id="title" label="book title" margin="dense" />
        </GridItem>
        <GridItem {...{ xs: 12, sm: 12 }}>
          <TextareaAutosize
            id="description"
            aria-label="details"
            placeholder="Write your impression"
            rows={4}
          />
        </GridItem>
      </GridContainer>
    </Layout>
  );
}

export default IndexPage
