import * as React from 'react';
import { TextArea, Icon } from '@blueprintjs/core';
import Layout from '../components/Layout';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout title="The Shiories">
      <h1>Home</h1>
      <div className="bp3-input-group .modifier">
        <Icon icon="book" />
        <input className="bp3-input" placeholder="Book title" dir="auto" />
      </div>
      <TextArea />
    </Layout>
  );
}

export default HomePage;
