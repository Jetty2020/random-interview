import {
  PRIMARY_400,
  PRIMARY_500,
  SECONDARY_400,
  SECONDARY_500,
  WHITE,
} from '@constants/colors';
import styled from '@emotion/styled';
import { pxToRem } from '@utils/pxToRem';
import React, { useCallback, useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setIsOpened((state) => !state);
  }, []);
  return (
    <QuestionItem>
      <QuestionButton onClick={handleClick} isOpened={isOpened}>
        <QuestionMark>Q.</QuestionMark>
        <Text>{question}</Text>
      </QuestionButton>
      <AnswerButton onClick={handleClick} isOpened={isOpened}>
        <AnswerMark>A.</AnswerMark>
        <Text>{answer}</Text>
      </AnswerButton>
    </QuestionItem>
  );
};

interface ButtonProps {
  isOpened: boolean;
}

const QuestionItem = styled.li`
  margin: 0 auto;
`;

const QuestionButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem(60)};
  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(5)};
  border-left: ${pxToRem(4)} solid
    ${({ isOpened }) => (isOpened ? PRIMARY_500 : 'transparent')};
  background-color: ${WHITE};
  text-align: left;
  box-sizing: border-box;
  transition: border 0.2s 0.05s;

  &:hover {
    border-left: ${pxToRem(4)} solid ${PRIMARY_500};
  }
`;

const QuestionMark = styled.span`
  padding-right: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${PRIMARY_400};
`;

const Text = styled.span`
  line-height: ${pxToRem(30)};
  font-size: ${pxToRem(20)};
`;

const AnswerButton = styled.button<ButtonProps>`
  display: ${({ isOpened }) => (isOpened ? 'inline-flex' : 'none')};
  align-items: center;
  width: 100%;
  min-height: ${pxToRem(60)};
  padding: ${pxToRem(10)};
  border-left: ${pxToRem(4)} solid transparent;
  background-color: ${WHITE};
  text-align: left;
  box-sizing: border-box;
  transition: border 0.2s 0.05s;

  &:hover {
    border-left: ${pxToRem(4)} solid ${SECONDARY_500};
  }
`;

const AnswerMark = styled.span`
  padding-right: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${SECONDARY_400};
`;

export default React.memo(Question);
