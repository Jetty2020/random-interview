import type { NextPage } from 'next';
import PageTitle from '../components/common/PageTitle';
import Example from '../components/landing/Example';

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
