import styled from '@emotion/styled';
import { Keyframes, keyframes } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';
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

interface QuestionButtonProps {
  isOpened: boolean;
}

interface AnswerButtonProps {
  animation: Keyframes | null;
}

const Question = ({ question, answer }: QuestionProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [animation, setAnimation] = useState<Keyframes | null>(null);

  const handleQuestionClick = useCallback(() => {
    if (isOpened) {
      setAnimation(fadeOut);
    } else {
      setAnimation(fadeIn);
    }
  }, [isOpened, animation]);

  const handleAnswerClick = () => {
    setAnimation(fadeOut);
  };

  const handleAnimationEnd = () => {
    if (animation === fadeOut) {
      setIsOpened(false);
      setAnimation(null);
    }
  };

  useEffect(() => {
    if (!isOpened && animation) {
      setIsOpened(true);
    }
  }, [animation]);

  return (
    <Item>
      <ButtonQuestion isOpened={isOpened} onClick={handleQuestionClick}>
        <QuestionMark>Q.</QuestionMark>
        <Text>{question}</Text>
      </ButtonQuestion>
      {isOpened && (
        <ButtonAnswer
          animation={animation}
          onClick={handleAnswerClick}
          onAnimationEnd={handleAnimationEnd}
        >
          <AnswerMark>A.</AnswerMark>
          <Text>{answer}</Text>
        </ButtonAnswer>
      )}
    </Item>
  );
};

const Item = styled.li`
  overflow: hidden;
  margin: 0 auto;
  word-break: break-all;
`;

const ButtonQuestion = styled.button<QuestionButtonProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 10;
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
  align-self: flex-start;
  padding-right: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${PRIMARY_400};
`;

export const Text = styled.span`
  line-height: ${pxToRem(30)};
  font-size: ${pxToRem(20)};
`;

const ButtonAnswer = styled.button<AnswerButtonProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem(60)};
  padding: ${pxToRem(10)};
  border-left: ${pxToRem(4)} solid transparent;
  background-color: ${WHITE};
  text-align: left;
  box-sizing: border-box;
  transition: border 0.2s 0.05s;
  animation: ${({ animation }) => animation} 0.4s;

  &:hover {
    border-left: ${pxToRem(4)} solid ${SECONDARY_500};
  }
`;

const AnswerMark = styled.span`
  align-self: flex-start;
  padding-right: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${SECONDARY_400};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export default React.memo(Question);
