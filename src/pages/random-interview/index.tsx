import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageTitle from '@components/common/PageTitle';
import { SettingForm } from '@components/ramdom-interview/SettingForm';

const RandomInterview: NextPage = () => {
  const router = useRouter();
  const questionQueryArr = router.query.question;

  return (
    <>
      <PageTitle title="랜덤 면접" />
      {!questionQueryArr ? <SettingForm /> : null}
    </>
  );
};

export default RandomInterview;
