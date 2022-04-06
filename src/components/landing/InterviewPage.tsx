import styled from '@emotion/styled';
import Link from 'next/link';
import { PRIMARY_100 } from '@constants/colors';

export function InterviewPage() {
  return (
    <SectionPage>
      <ContainerIntro>
        <ContainerText>
          <TextLogo>면접 플레잉</TextLogo>
          {/* <TextIntro>
            면접을 보는 모습을 녹화하면서, 녹화된 영상을 보고 면접 태도를
            바로잡고 제시된 면접 질문을 통해 실전 연습할 수 있어요.
          </TextIntro> */}
          <TextIntro>
            랜덤 인터뷰를 풀 때 제공되는 녹화 기능을 이용해서 <br />
            면접 태도를 바로잡으며 실전 연습을 할 수 있어요.
          </TextIntro>
          <Link href="/">
            <LinkBtn>체험하기</LinkBtn>
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
  padding-top: 40px;
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

const TextLogo = styled.h2`
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: 900;
`;

const TextIntro = styled.p`
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
    content: '☝';
    display: inline-block;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'LinearIcons-Free';
    font-size: 1.25rem;
    vertical-align: top;
  }
`;

const ImgIntro = styled.img`
  position: absolute;
  width: 600px;
  height: 600px;
  right: 0;
  bottom: 0;
`;
