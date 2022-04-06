import styled from '@emotion/styled';
import React from 'react';
import { CATEGORIES } from '@constants/categories';
import { QUESTIONS } from '@constants/questions';
import { pxToRem } from '@utils/pxToRem';
import Question from './Question';
import TitleList from './TitleList';

interface ListQuestionProps {
  selection: boolean[];
}

const ListQuestion = ({ selection }: ListQuestionProps) => {
  const categories = selection.every((isSelected) => !isSelected)
    ? CATEGORIES
    : CATEGORIES.filter((_, i) => selection[i]);

  return (
    <Container>
      <TitleList>질문</TitleList>
      <List>
        {QUESTIONS.filter(({ category }) => categories.includes(category)).map(
          ({ question, answer }) => (
            <Question key={question} question={question} answer={answer} />
          ),
        )}
      </List>
    </Container>
  );
};

const Container = styled.div`
  padding: ${pxToRem(10)} 0;

  & li:not(:last-of-type) {
    margin-bottom: ${pxToRem(30)};
  }
`;

const List = styled.ul`
  padding: 0 ${pxToRem(20)};
`;

export default React.memo(ListQuestion);
