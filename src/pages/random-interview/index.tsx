import styled from '@emotion/styled';
import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageTitle from '@components/common/PageTitle';
import { SettingForm } from '@components/ramdom-interview/SettingForm';
import { StartInterview } from '@components/ramdom-interview/StartInterview';
import { QuestionList } from '@components/ramdom-interview/QuestionList';

const RandomInterview: NextPage = () => {
  const router = useRouter();
  const { question, 'question-list': questionList } = router.query;
  const [questionIndexArr, setQuestionIndexArr] = useState<number[][]>([[]]);

  const page = () => {
    if (question) {
      return (
        <StartInterview
          questionIndexArr={questionIndexArr}
          setQuestionIndexArr={setQuestionIndexArr}
        />
      );
    }
    if (questionList === '') {
      return <QuestionList questionIndexArr={questionIndexArr} />;
    }
    return <SettingForm />;
  };

  return (
    <>
      <PageTitle title="랜덤 면접" />
      <ContainerForm>{page()}</ContainerForm>
    </>
  );
};
export default RandomInterview;

const ContainerForm = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
