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
  display: flex;
  align-items: center;
  ${(props) => props.flexEnd && 'justify-content:end'};
  position: relative;
  min-width: ${pxToRem(1140)};
  height: ${pxToRem(760)};
  margin: 0 auto;
`;

export const ContainerText = styled.div`
  flex-basis: 40%;
`;

export const HeaderLogo = styled.h2`
  margin-bottom: ${pxToRem(30)};
  font-size: ${pxToRem(45)};
  font-weight: 900;
`;

export const TextIntro = styled.p`
  margin-bottom: ${pxToRem(30)};
  font-weight: 600;
  line-height: ${pxToRem(24)};
`;

export const AnchorBtn = styled.a<LinkButtonProps>`
  display: inline-block;
  width: ${pxToRem(170)};
  height: ${pxToRem(50)};
  border-radius: ${pxToRem(25)};
  background: ${(props) => props.backgroundColor};
  line-height: ${pxToRem(50)};
  font-family: 'NotoSanskr_Medium';
  color: ${(props) => props.color};
  font-weight: bold;
  text-align: center;

  &::after {
    content: '☝';
    display: inline-block;
    margin-left: ${pxToRem(5)};
    font-weight: bold;
    font-family: 'LinearIcons-Free';
    font-size: 1.25rem;
  }
`;

export const ImgIntro = styled.img<ImgIntroProps>`
  position: absolute;
  ${(props) => (props.left ? 'left:0 ' : 'right:0')};
  width: ${pxToRem(600)};
  height: ${pxToRem(600)};
  bottom: 0;
`;
