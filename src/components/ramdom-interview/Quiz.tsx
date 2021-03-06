import styled from '@emotion/styled';
import {
  QuestionMark,
  Text,
  AnswerMark,
} from '@components/questionList/Question';
import { pxToRem } from '@utils/pxToRem';

interface quizProps {
  question: string;
  answer: string;
}
export const Quiz = ({ question, answer }: quizProps) => {
  return (
    <WrapQuiz>
      <QuestionMark>Q.</QuestionMark>
      <Text>{question}</Text>
      <br />
      <AnswerMark>A.</AnswerMark>
      <Text>{answer}</Text>
    </WrapQuiz>
  );
};

const WrapQuiz = styled.div`
  margin: ${pxToRem(50)} ${pxToRem(40)};
`;
