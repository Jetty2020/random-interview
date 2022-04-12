import type { NextPage } from 'next';
import PageTitle from '@components/common/PageTitle';
import { LandingSection } from '@components/landing';
import { PRIMARY_100, PRIMARY_200, WHITE } from '@constants/colors';

const Home: NextPage = () => {
  return (
    <>
      <PageTitle title="홈" />
      <LandingSection
        header="소개합니다"
        pageBackground={PRIMARY_100}
        btnBackground={WHITE}
        btnEmoji="☝"
        btnText="자세히 보기"
        href="/"
        imageSrc="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
      >
        프론트엔드 기술에 따른 질문 리스트 모아둔 페이지입니다,
        <br />
        면접 질문에 답하는 동시에 내 모습과 목소리 체크할 수 있어요.
        <br />
        나의 강점과 역량을 파악해가며 면접 준비를 할 수 있습니다..
      </LandingSection>

      <LandingSection
        header="질문 리스트"
        pageBackground={WHITE}
        btnBackground={PRIMARY_200}
        btnEmoji="☝"
        btnText="체험하기"
        href="/list"
        imageSrc="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
        flexEnd
        left
      >
        원하는 스택을 골라서 면접 질문과 추천 답변까지 <br />
        프론트엔드 면접 질문에 대한 다양한 가이드를 제공해 드려요.
      </LandingSection>

      <LandingSection
        header="면접 플레잉"
        pageBackground={PRIMARY_100}
        btnBackground={WHITE}
        btnEmoji="☝"
        btnText="체험하기"
        href="/random-interview"
        imageSrc="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
      >
        랜덤 인터뷰를 풀 때 제공되는 녹화 기능을 이용해서 <br />
        면접 태도를 바로잡으며 실전 연습을 할 수 있어요.
      </LandingSection>
    </>
  );
};

export default Home;
