import type { NextPage } from 'next';
import PageTitle from '@components/common/PageTitle';
import CategoryList from '@components/questionList/CategoryList';
import { CATEGORIES } from '@constants/categories';
import { useCallback, useState } from 'react';
import QuestionList from '@components/questionList/QuestionList';
import QuestionContainer from '@components/questionList/QuestionContainer';

const QuestionListPage: NextPage = () => {
  const [selection, setSelection] = useState<boolean[]>(
    Array(CATEGORIES.length).fill(false),
  );

  const categoryClick = (index: number) =>
    useCallback(() => {
      setSelection((state) => {
        const selection = [...state];
        selection[index] = !selection[index];
        return selection;
      });
    }, []);

  return (
    <>
      <PageTitle title="면접 질문 목록" />
      <QuestionContainer>
        <CategoryList selection={selection} categoryClick={categoryClick} />
        <QuestionList selection={selection} />
      </QuestionContainer>
    </>
  );
};

export default QuestionListPage;
