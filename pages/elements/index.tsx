import Listado from 'components/Elements';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Mi página</title>
      </Head>
      <h1>Mi página</h1>
      <Listado />
    </div>
  );
};

export default IndexPage;