import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageTitle from '@components/common/PageTitle';
import { SettingForm } from '@components/ramdom-interview/SettingForm';
import { StartInterview } from '@components/ramdom-interview/StartInterview';
import { QuestionList } from '@components/ramdom-interview/QuestionList';
import ContainerPage from '@components/common/ContainerPage';

const RandomInterview: NextPage = () => {
  const router = useRouter();
  const { question, 'question-list': questionList } = router.query;

  const page = () => {
    if (question) {
      return <StartInterview />;
    }
    if (questionList) {
      return <QuestionList />;
    }
    return <SettingForm />;
  };

  return (
    <>
      <PageTitle title="랜덤 면접" />
      <ContainerPage>{page()}</ContainerPage>
    </>
  );
};
export default RandomInterview;
