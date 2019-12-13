import * as React from 'react';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import GridContainer from '../components/Grid/GridContiner'
import { NextPage } from 'next';

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

      <GridContainer>

      </GridContainer>
    </Layout>
  );
}

export default IndexPage;
