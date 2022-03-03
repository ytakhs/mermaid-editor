import type { NextPage } from 'next';
import { Editor } from '../components/editor';
import { Layout } from '../components/layout';
import { Viewer } from '../components/viewer';

const Home: NextPage = () => {
  return (
    <Layout>
      <Editor />
      <Viewer />
    </Layout>
  );
};

export default Home;
