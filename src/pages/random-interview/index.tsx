import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageTitle from '@components/common/PageTitle';
import styled from '@emotion/styled';
import { SettingForm } from '@components/ramdom-interview/SettingForm';
import { StartInterview } from '@components/ramdom-interview/StartInterview';

const RandomInterview: NextPage = () => {
  const router = useRouter();
  const questionQueryArr = router.query.question;

  return (
    <>
      <PageTitle title="랜덤 면접" />
      <ContainerForm>
        {!questionQueryArr ? <SettingForm /> : <StartInterview />}
      </ContainerForm>
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
