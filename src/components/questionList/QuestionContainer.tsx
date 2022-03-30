import styled from '@emotion/styled';

interface ContainerProps {
  children: React.ReactElement[];
}

const QuestionContainer = ({ children }: ContainerProps) => {
  return <FlexContainer>{children}</FlexContainer>;
};

const FlexContainer = styled.section`
  display: flex;

  & > * {
    flex: 1;
  }
`;

export default QuestionContainer;
