import styled from '@emotion/styled';
import React, { SetStateAction } from 'react';
import { CATEGORIES } from '@constants/categories';
import { QuestionData } from '@constants/questions';
import { pxToRem } from '@utils/pxToRem';
import Question from './Question';
import TitleList from './TitleList';
import Pagination from './Pagination';

interface ListQuestionProps {
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  selection: boolean[];
  questionMap: Map<string, QuestionData[]>;
}

const ListQuestion = ({
  page,
  setPage,
  selection,
  questionMap,
}: ListQuestionProps) => {
  const categories = selection.every((isSelected) => !isSelected)
    ? CATEGORIES
    : CATEGORIES.filter((_, i) => selection[i]);

  const questions = categories
    .map((category) =>
      questionMap
        .get(category)
        ?.map(({ question, answer }) => (
          <Question key={question} question={question} answer={answer} />
        )),
    )
    .flat();

  return (
    <Container>
      <TitleList>질문</TitleList>
      <List>{questions.slice((page - 1) * 10, page * 10)}</List>
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={Math.ceil(questions.length / 10)}
      />
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
