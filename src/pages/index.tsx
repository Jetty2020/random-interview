import type { NextPage } from 'next';
import Example from '@components/landing/Example';
import PageTitle from '@components/common/PageTitle';

const Home: NextPage = () => {
  return (
    <div>
      <PageTitle title="홈" />
      <h1>H1</h1>
      <div>Home</div>
      <Example />
    </div>
  );
};

export default Home;
