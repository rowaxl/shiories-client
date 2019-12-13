import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import GridItem from '../components/Grid/GridItem'
import { TextField, TextareaAutosize, Button } from '@material-ui/core'

type DummyArticle = {
  id: string,
  title: string,
  impression: string,
  wrotenAt: number
}

const IndexPage: NextPage = () => {
  const articles: DummyArticle[] = [{
    id: 'a-b-c-d',
    title: 'title1',
    impression: 'impression1',
    wrotenAt: Date.now()
  }]

  const inputedArticle: DummyArticle = {
    id: 'dummyId',
    title: '',
    impression: '',
    wrotenAt: 0,
  }

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputedArticle.title = e.target.value
  }

  const onChangeImpression = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    inputedArticle.impression = e.target.value
  }

  const onClickedSubmit = () => {
    inputedArticle.wrotenAt = Date.now();

    console.log(inputedArticle);

    onClickedClear()
  }

  const onClickedClear = () => {
    // TODO: ref children and clear value
  }

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={articles} />

      <GridContainer {...{ direction: "column", alignItems:"center" }}>
        <GridItem {...{ sm: 12 }}>
          <TextField
            id="title"
            label="book title"
            margin="dense"
            onChange={onChangeTitle}
          />
        </GridItem>
        <GridItem {...{ sm: 12 }}>
          <TextareaAutosize
            id="impression"
            aria-label="impression"
            placeholder="Write your impression"
            rows={4}
            onChange={onChangeImpression}
          />
        </GridItem>
        <GridItem {...{ sm: 12 }}>
          <GridContainer {...{ direction: "row", justify:"space-evenly", alignItems:"center" }}>
              <Button variant="contained" color="primary" onClick={onClickedSubmit}>Submit</Button>
              <Button variant="contained" onClick={onClickedClear}>Clear</Button>
            </GridContainer>
        </GridItem>
      </GridContainer>
    </Layout>
  );
}

export default IndexPage
