import styled from '@emotion/styled';
import React from 'react';
import { CATEGORIES } from '@constants/categories';
import { QUESTIONS } from '@constants/questions';
import { pxToRem } from '@utils/pxToRem';
import Question from './Question';

interface ListQuestionProps {
  selection: boolean[];
}

const ListQuestion = ({ selection }: ListQuestionProps) => {
  const categories = selection.every((isSelected) => !isSelected)
    ? CATEGORIES
    : CATEGORIES.filter((_, i) => selection[i]);

  return (
    <Container>
      <ul>
        {QUESTIONS.filter(({ category }) => categories.includes(category)).map(
          ({ question, answer }) => (
            <Question key={question} question={question} answer={answer} />
          ),
        )}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  padding: ${pxToRem(10)} ${pxToRem(20)};

  & li:not(:last-of-type) {
    margin-bottom: ${pxToRem(30)};
  }
`;

export default React.memo(ListQuestion);
