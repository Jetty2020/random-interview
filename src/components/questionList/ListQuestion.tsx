import styled from '@emotion/styled';
import React from 'react';
import { CATEGORIES } from '@constants/categories';
import { QuestionData } from '@constants/questions';
import { pxToRem } from '@utils/pxToRem';
import Question from './Question';
import TitleList from './TitleList';

interface ListQuestionProps {
  selection: boolean[];
  questionMap: Map<string, QuestionData[]>;
}

const ListQuestion = ({ selection, questionMap }: ListQuestionProps) => {
  const categories = selection.every((isSelected) => !isSelected)
    ? CATEGORIES
    : CATEGORIES.filter((_, i) => selection[i]);

  return (
    <Container>
      <TitleList>질문</TitleList>
      <List>
        {categories.map((category) => {
          const questions = questionMap.get(category);
          return questions?.map(({ question, answer }) => (
            <Question key={question} question={question} answer={answer} />
          ));
        })}
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
