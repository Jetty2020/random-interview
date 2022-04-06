import styled from '@emotion/styled';
import { pxToRem } from '@utils/pxToRem';

interface SetctionProps {
  backgroundColor: string;
}

interface ContainerIntroProps {
  flexEnd?: boolean;
}

interface LinkButtonProps {
  backgroundColor: string;
  color: string;
  content: string;
}

interface ImgIntroProps {
  left?: boolean;
}

export const SectionPage = styled.section<SetctionProps>`
  display: flex;
  padding-top: ${pxToRem(40)};
  background-color: ${(props) => props.backgroundColor};
`;

export const ContainerIntro = styled.div<ContainerIntroProps>`
  flex-basis: 40%;
  position: relative;
  min-width: ${pxToRem(1140)};
  height: ${pxToRem(760)};
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${(props) => props.flexEnd && 'justify-content:end'};
`;

export const ContainerText = styled.div`
  flex-basis: 40%;
`;

export const HeaderLogo = styled.h2`
  font-size: ${pxToRem(45)};
  font-weight: 900;
  margin-bottom: ${pxToRem(30)};
`;

export const TextIntro = styled.p`
  font-weight: 600;
  margin-bottom: ${pxToRem(30)};
  line-height: ${pxToRem(24)};
`;

export const AnchorBtn = styled.a<LinkButtonProps>`
  display: inline-block;
  width: ${pxToRem(170)};
  height: ${pxToRem(50)};
  line-height: ${pxToRem(50)};
  font-family: 'NotoSanskr_Medium';
  color: ${(props) => props.color};
  font-weight: bold;
  text-align: center;
  border-radius: ${pxToRem(25)};
  background: ${(props) => props.backgroundColor};

  &::after {
    content: '👀';
    display: inline-block;
    margin-left: ${pxToRem(5)};
    font-weight: bold;
    font-family: 'LinearIcons-Free';
    font-size: 1.25rem;
  }
`;

export const ImgIntro = styled.img<ImgIntroProps>`
  position: absolute;
  width: ${pxToRem(600)};
  height: ${pxToRem(600)};
  ${(props) => (props.left ? 'left:0 ' : 'right:0')};
  bottom: 0;
`;
