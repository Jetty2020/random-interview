import Link from 'next/link';
import { PRIMARY_100, WHITE } from '@constants/colors';
import * as Styled from './styled';

export function PageIntro() {
  return (
    <Styled.SectionPage backgroundColor={PRIMARY_100}>
      <Styled.ContainerIntro>
        <Styled.ContainerText>
          <Styled.HeaderLogo>소개합니다</Styled.HeaderLogo>
          <Styled.TextIntro>
            프론트엔드 기술에 따른 질문 리스트 모아둔 페이지입니다,
            <br />
            면접 질문에 답하는 동시에 내 모습과 목소리 체크할 수 있어요.
            <br />
            나의 강점과 역량을 파악해가며 면접 준비를 할 수 있습니다..
          </Styled.TextIntro>
          {/* <TextIntro>
            면접을 준비하는 과정에서 가장 중요한 사항은 무엇일까요? 면접에
            사용할 질문 리스트를 미리 작성하는 것입니다. 지원자와 이야기 하기
            전에 체크할 사항들을 미리 정리해 두는 것이지요. 해당 직무의 핵심
            과제 중심으로 질문을 구성해 두는 것이 좋습니다.
          </TextIntro> */}
          <Link href="/">
            <Styled.LinkBtn backgroundColor={WHITE} color="#444" content="👀">
              자세히보기
            </Styled.LinkBtn>
          </Link>
        </Styled.ContainerText>
        <Styled.ImgIntro src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png" />
      </Styled.ContainerIntro>
    </Styled.SectionPage>
  );
}
