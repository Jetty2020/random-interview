import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import router from 'next/router';
import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';
import ContainerPage from '@components/common/ContainerPage';
import { Quiz } from './Quiz';

export const QuestionList = () => {
  const { 'question-list': questionList } = router.query as {
    'question-list': string;
  };

  const questionIndexArr = questionList
    .split('-')
    .map((ele: string) => ele.split('*'));

  useEffect(() => {
    if (questionIndexArr.length !== CATEGORIES.length) {
      router.push('/random-interview');
    }
  }, []);

  const questionArr = Array(0);
  CATEGORIES.forEach((_) => questionArr.push([]));

  for (let i = 0; i < questionIndexArr.length; i++) {
    const questionCategoryArr = QUESTIONS.filter(
      (ele) => ele.category === CATEGORIES[i],
    );
    for (let j = 0; j < questionIndexArr[i].length; j++) {
      questionArr[i].push(questionCategoryArr[+questionIndexArr[i][j]]);
    }
  }
  console.log(questionArr[0]);
  console.log(questionArr[0][0].question);

  // const existquestionList = questionArr.filter((e) => e[0] !== []);
  // console.log(typeof existquestionList);
  return (
    <ContainerPage>
      {questionArr.map((e) =>
        e.map(
          (content: { question: string; answer: string; category: string }) => {
            return (
              <Quiz
                key={nanoid()}
                question={content.question}
                category={content.category}
                answer=""
              />
            );
          },
        ),
      )}
    </ContainerPage>
  );
};
