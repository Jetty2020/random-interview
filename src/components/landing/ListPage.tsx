import styled from '@emotion/styled';
import Link from 'next/link';
import { WHITE, PRIMARY_200 } from '@constants/colors';

export function ListPage() {
  return (
    <SectionPage>
      <ContainerIntro>
        <ImgIntro src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png" />
        <ContainerText>
          <TextLogo>질문 리스트</TextLogo>
          <TextIntro>
            원하는 스택을 골라서 면접 질문과 추천 답변까지 <br />
            프론트엔드 면접 질문에 대한 다양한 가이드를 제공해 드려요.
            <br />
            <br />
          </TextIntro>
          <Link href="/">
            <LinkBtn>체험하기</LinkBtn>
          </Link>
        </ContainerText>
      </ContainerIntro>
    </SectionPage>
  );
}

const SectionPage = styled.section`
  display: flex;
  min-width: 1024px;
  padding-top: 40px;
  background-color: ${WHITE};
`;
const ContainerIntro = styled.div`
  flex-basis: 40%;
  position: relative;
  min-width: 1024px;
  height: 760px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ImgIntro = styled.img`
  position: absolute;
  width: 600px;
  height: 600px;
  left: 0;
  bottom: 0;
`;

const ContainerText = styled.div`
  flex-basis: 40%;
`;

const TextLogo = styled.h2`
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const TextIntro = styled.p`
  margin-bottom: 30px;
  line-height: 24px;
  /* letter-spacing: -0.1px; */
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
  background: ${PRIMARY_200};
  &::after {
    content: '☝';
    display: inline-block;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'LinearIcons-Free';
    font-size: 1.25rem;
    vertical-align: top;
  }
`;
