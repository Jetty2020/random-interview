import styled from '@emotion/styled';
import React, { SetStateAction } from 'react';
import { pxToRem } from '@utils/pxToRem';
import { QuestionData } from '@constants/.';
import Question from './Question';
import TitleList from './TitleList';
import Pagination from './Pagination';

interface ListQuestionProps {
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  questions: QuestionData[];
}

export const ListQuestion = React.memo(function ListQuestion({
  page,
  setPage,
  questions,
}: ListQuestionProps) {
  return (
    <Container>
      <TitleList sticky>질문</TitleList>
      <List>
        {questions
          .map(({ question, answer }) => (
            <Question key={question} question={question} answer={answer} />
          ))
          .slice((page - 1) * 10, page * 10)}
      </List>
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={Math.ceil(questions.length / 10)}
      />
    </Container>
  );
});

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
