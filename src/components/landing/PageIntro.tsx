import Link from 'next/link';
import * as Styled from './styled';

interface SectionProps {
  header: string;
  pageBackground: string;
  btnBackground: string;
  btn?: boolean;
  btnEmoji: string;
  btnText: string;
  href: string;
  imageSrc: string;
  flexEnd?: boolean;
  left?: boolean;
  children: React.ReactNode[];
}

export function LandingSection({
  header,
  pageBackground,
  btnBackground,
  btn,
  btnEmoji,
  btnText,
  href,
  imageSrc,
  flexEnd,
  left,
  children,
}: SectionProps) {
  return (
    <Styled.SectionPage backgroundColor={pageBackground}>
      <Styled.ContainerIntro flexEnd={flexEnd}>
        <Styled.ContainerText>
          <Styled.HeaderLogo>{header}</Styled.HeaderLogo>
          <Styled.TextIntro>{children}</Styled.TextIntro>
          {btn && (
            <Link href={href}>
              <Styled.AnchorBtn
                backgroundColor={btnBackground}
                color="#444"
                content={btnEmoji}
              >
                {btnText}
              </Styled.AnchorBtn>
            </Link>
          )}
        </Styled.ContainerText>
        <Styled.ImgIntro src={imageSrc} left={left} />
      </Styled.ContainerIntro>
    </Styled.SectionPage>
  );
}

LandingSection.defaultProps = {
  flexEnd: false,
  left: false,
  btn: false,
};
