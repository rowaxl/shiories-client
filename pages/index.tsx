import React, { useState } from 'react'
import { NextPage } from 'next'
import { uuid } from 'uuidv4'

// Components
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import GridContainer from '../components/Grid/GridContiner'
import GridItem from '../components/Grid/GridItem'

// MUI Components
import { TextField, TextareaAutosize, Button, FormGroup } from '@material-ui/core'

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

  const [articles, setArticles] = useState(dummyArticle)
  const [title, setTitle] = useState('')
  const [impression, setImpression] = useState('')

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeImpression = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImpression(e.target.value)
  }

  const onClickedSubmit = () => {
    const newArticles = [...articles]
    newArticles.push({
      id: uuid(),
      title,
      impression,
      wrotenAt: Date.now()
    })

    setArticles(newArticles)

    onClickClear()
  }

  const onClickClear = () => {
    setTitle('')
    setImpression('')
  }

  const MaterialUIForm = () => {
    return (
      <FormGroup>
        <GridItem>
          <TextField
            id="title"
            label="book title"
            margin="dense"
            autoComplete="off"
            onChange={onChangeTitle}
            value={title}
          />
        </GridItem>
        <GridItem>
          <TextareaAutosize
            id="impression"
            aria-label="impression"
            placeholder="Write your impression"
            rows={4}
            onChange={onChangeImpression}
            value={impression}
          />
        </GridItem>
        <GridItem>
          <GridContainer {...{ direction: "row", justify:"space-evenly", alignItems:"center" }}>
            <Button variant="contained" color="primary" onClick={onClickedSubmit}>
              Submit
            </Button>
            <Button variant="contained" onClick={onClickClear}>
              Clear
            </Button>
          </GridContainer>
        </GridItem>
      </FormGroup>
    )
  }

  return (
    <Layout title="The Shiories">
      <h1>Home</h1>

      <ArticleList items={articles} />

      <GridContainer {...{ direction: "column", alignItems: "center" }}>
        { MaterialUIForm() }
      </GridContainer>
    </Layout>
  );
}

export default IndexPage
