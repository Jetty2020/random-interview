import type { NextPage } from 'next';
import PageTitle from '@components/common/PageTitle';
import {
  PageIntro,
  ListPage,
  Example,
  InterviewPage,
} from '@components/landing';

const Home: NextPage = () => {
  return (
    <>
      <PageTitle title="홈" />
      <PageIntro />
      <ListPage />
      <InterviewPage />
      {/* <Example /> */}
    </>
  );
};

export default Home;
