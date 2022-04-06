import Link from 'next/link';
import { PRIMARY_100, WHITE } from '@constants/colors';
import * as Styled from './styled';

export function InterviewPage() {
  return (
    <Styled.SectionPage backgroundColor={PRIMARY_100}>
      <Styled.ContainerIntro>
        <Styled.ContainerText>
          <Styled.HeaderLogo>면접 플레잉</Styled.HeaderLogo>
          {/* <TextIntro>
            면접을 보는 모습을 녹화하면서, 녹화된 영상을 보고 면접 태도를
            바로잡고 제시된 면접 질문을 통해 실전 연습할 수 있어요.
          </TextIntro> */}
          <Styled.TextIntro>
            랜덤 인터뷰를 풀 때 제공되는 녹화 기능을 이용해서 <br />
            면접 태도를 바로잡으며 실전 연습을 할 수 있어요.
          </Styled.TextIntro>
          <Link href="/">
            <Styled.LinkBtn backgroundColor={WHITE} color="#444" content="☝">
              체험하기
            </Styled.LinkBtn>
          </Link>
        </Styled.ContainerText>
        <Styled.ImgIntro src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png" />
      </Styled.ContainerIntro>
    </Styled.SectionPage>
  );
}
