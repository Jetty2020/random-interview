import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';
import { useEffect } from 'react';
import router from 'next/router';

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
  return <>ddu</>;
};
