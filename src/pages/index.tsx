import type { NextPage } from 'next';
import PageTitle from '@components/common/PageTitle';
import { PageIntro, ListPage, InterviewPage } from '@components/landing';

const Home: NextPage = () => {
  return (
    <>
      <PageTitle title="홈" />
      <PageIntro />
      <ListPage />
      <InterviewPage />
    </>
  );
};

export default Home;
