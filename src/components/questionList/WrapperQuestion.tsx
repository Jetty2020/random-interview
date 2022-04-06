import styled from '@emotion/styled';

interface WrapperProps {
  children: React.ReactElement[];
}

const WrapperQuestion = ({ children }: WrapperProps) => {
  return <WrapperFlex>{children}</WrapperFlex>;
};

const WrapperFlex = styled.section`
  display: flex;

  & > * {
    flex: 1;
  }
`;

export default WrapperQuestion;
