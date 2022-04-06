import styled from '@emotion/styled';

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
  min-width: 1024px;
  padding-top: 40px;
  background-color: ${(props) => props.backgroundColor};
`;

export const ContainerIntro = styled.div<ContainerIntroProps>`
  flex-basis: 40%;
  position: relative;
  min-width: 1024px;
  height: 760px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${(props) => props.flexEnd && 'justify-content:end'};
`;

export const ContainerText = styled.div`
  flex-basis: 40%;
`;

export const HeaderLogo = styled.h2`
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 30px;
`;

export const TextIntro = styled.p`
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 24px;
`;

export const AnchorBtn = styled.a<LinkButtonProps>`
  display: inline-block;
  width: 170px;
  height: 50px;
  line-height: 50px;
  font-family: 'NotoSanskr_Medium';
  color: ${(props) => props.color};
  font-weight: bold;
  text-align: center;
  border-radius: 25px;
  background: ${(props) => props.backgroundColor};

  &::after {
    content: '👀';
    display: inline-block;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'LinearIcons-Free';
    font-size: 1.25rem;
  }
`;

export const ImgIntro = styled.img<ImgIntroProps>`
  position: absolute;
  width: 600px;
  height: 600px;
  ${(props) => (props.left ? 'left:0 ' : 'right:0')};
  bottom: 0;
`;
