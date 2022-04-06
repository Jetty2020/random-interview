import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import {
  PRIMARY_400,
  PRIMARY_500,
  SECONDARY_400,
  SECONDARY_500,
  WHITE,
} from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';

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
    <Item>
      <ButtonQuestion onClick={handleClick} isOpened={isOpened}>
        <QuestionMark>Q.</QuestionMark>
        <Text>{question}</Text>
      </ButtonQuestion>
      <ButtonAnswer onClick={handleClick} isOpened={isOpened}>
        <AnswerMark>A.</AnswerMark>
        <Text>{answer}</Text>
      </ButtonAnswer>
    </Item>
  );
};

interface ButtonProps {
  isOpened: boolean;
}

const Item = styled.li`
  margin: 0 auto;
`;

const ButtonQuestion = styled.button<ButtonProps>`
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

const ButtonAnswer = styled.button<ButtonProps>`
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
