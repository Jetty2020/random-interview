import Link from 'next/link';
import { WHITE, PRIMARY_200 } from '@constants/colors';
import * as Styled from './styled';

export function ListPage() {
  return (
    <Styled.SectionPage backgroundColor={WHITE}>
      <Styled.ContainerIntro flexEnd>
        <Styled.ImgIntro
          src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
          left
        />
        <Styled.ContainerText>
          <Styled.HeaderLogo>질문 리스트</Styled.HeaderLogo>
          <Styled.TextIntro>
            원하는 스택을 골라서 면접 질문과 추천 답변까지 <br />
            프론트엔드 면접 질문에 대한 다양한 가이드를 제공해 드려요.
            <br />
            <br />
          </Styled.TextIntro>
          <Link href="/">
            <Styled.LinkBtn
              backgroundColor={PRIMARY_200}
              color="#444"
              content="☝"
            >
              체험하기
            </Styled.LinkBtn>
          </Link>
        </Styled.ContainerText>
      </Styled.ContainerIntro>
    </Styled.SectionPage>
  );
}
