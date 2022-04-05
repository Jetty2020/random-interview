import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import PageTitle from '@components/common/PageTitle';
import ListCategory from '@components/questionList/ListCategory';
import { CATEGORIES } from '@constants/categories';
import ListQuestion from '@components/questionList/ListQuestion';
import WrapperQuestion from '@components/questionList/WrapperQuestion';

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
      <WrapperQuestion>
        <ListCategory selection={selection} categoryClick={categoryClick} />
        <ListQuestion selection={selection} />
      </WrapperQuestion>
    </>
  );
};

export default QuestionListPage;
