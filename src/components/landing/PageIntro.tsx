import styled from '@emotion/styled';
import Link from 'next/link';
import { PRIMARY_100 } from '@constants/colors';

export function PageIntro() {
  return (
    <SectionPage>
      <ContainerIntro>
        <ContainerText>
          <TextLogo>소개합니다</TextLogo>
          <TextIntro>
            프론트엔드 기술에 따른 질문 리스트 모아둔 페이지입니다,
            <br />
            면접 질문에 답하는 동시에 내 모습과 목소리 체크할 수 있어요.
            <br />
            나의 강점과 역량을 파악해가며 면접 준비를 할 수 있습니다.
          </TextIntro>
          {/* <TextIntro>
            면접을 준비하는 과정에서 가장 중요한 사항은 무엇일까요? 면접에
            사용할 질문 리스트를 미리 작성하는 것입니다. 지원자와 이야기 하기
            전에 체크할 사항들을 미리 정리해 두는 것이지요. 해당 직무의 핵심
            과제 중심으로 질문을 구성해 두는 것이 좋습니다.
          </TextIntro> */}
          <Link href="/">
            <LinkBtn>자세히보기</LinkBtn>
          </Link>
        </ContainerText>
        <ImgIntro src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png" />
      </ContainerIntro>
    </SectionPage>
  );
}

const SectionPage = styled.section`
  display: flex;
  min-width: 1024px;
  /* padding-top: 40px; */
  background-color: ${PRIMARY_100};
`;

const ContainerIntro = styled.div`
  flex-basis: 40%;
  position: relative;
  min-width: 1024px;
  height: 760px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const ContainerText = styled.div`
  flex-basis: 40%;
`;

// const TextLogo = styled.img`
//   display: inline-block;
//   width: 200px;
//   margin-bottom: 30px;
// `;

const TextLogo = styled.h2`
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const TextIntro = styled.p`
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 24px;
`;

const LinkBtn = styled.a`
  display: inline-block;
  width: 170px;
  height: 50px;
  line-height: 50px;
  font-family: 'NotoSanskr_Medium';
  color: #444;
  font-weight: bold;
  text-align: center;
  border-radius: 25px;
  background: #fff;
  &::after {
    content: '👀';
    display: inline-block;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'LinearIcons-Free';
    font-size: 1.25rem;
  }
`;

const ImgIntro = styled.img`
  position: absolute;
  width: 600px;
  height: 600px;
  right: 0;
  bottom: 0;
`;
