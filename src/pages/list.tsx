import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { QuestionData, CATEGORIES, QUESTION_MAP } from '@constants/.';
import ContainerPage from '@components/common/ContainerPage';
import PageTitle from '@components/common/PageTitle';
import {
  WrapperQuestion,
  TitlePage,
  SearchBar,
  ListCategory,
  ListQuestion,
} from '@components/questionList';

const QuestionListPage: NextPage = () => {
  const [selection, setSelection] = useState<boolean[]>(
    Array(CATEGORIES.length).fill(false),
  );
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [page, setPage] = useState<number>(1);

  const categoryClick = (index: number) =>
    useCallback(() => {
      setPage(1);
      setSelection((state) => {
        const selection = [...state];
        selection[index] = !selection[index];
        return selection;
      });
    }, []);

  const updateQuestions = useCallback(() => {
    setQuestions(
      (selection.some((isSelected) => isSelected)
        ? CATEGORIES.filter((_, i) => selection[i])
        : CATEGORIES
      )
        .map((category) => QUESTION_MAP.get(category) || [])
        .flat()
        .sort((a, b) => a.question.localeCompare(b.question)),
    );
  }, [selection]);

  useEffect(() => {
    updateQuestions();
  }, [selection]);

  return (
    <ContainerPage>
      <PageTitle title="면접 질문 목록" />
      <TitlePage />
      <SearchBar
        setQuestions={setQuestions}
        updateQuestions={updateQuestions}
      />
      <WrapperQuestion>
        <ListCategory selection={selection} categoryClick={categoryClick} />
        <ListQuestion page={page} setPage={setPage} questions={questions} />
      </WrapperQuestion>
    </ContainerPage>
  );
};

export default QuestionListPage;
