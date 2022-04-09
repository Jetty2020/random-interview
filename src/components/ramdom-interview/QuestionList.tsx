import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import router from 'next/router';
import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';
import { pxToRem } from '@utils/pxToRem';
import { GRAY_400 } from '@constants/colors';
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
      if (questionIndexArr[i][j] !== '') {
        questionArr[i].push(questionCategoryArr[+questionIndexArr[i][j]]);
      }
    }
  }

  return (
    <ContainerUL>
      {questionArr.map((e) =>
        e.map(
          (
            content: { question: string; answer: string; category: string },
            index: number,
          ) => {
            console.log(index);
            return (
              <List key={nanoid()}>
                {index === 0 ? (
                  <CategoryMark key={nanoid()}>{content.category}</CategoryMark>
                ) : null}
                <Quiz
                  key={nanoid()}
                  question={content.question}
                  answer={content.answer}
                />
              </List>
            );
          },
        ),
      )}
    </ContainerUL>
  );
};
const ContainerUL = styled.ul``;

const List = styled.li`
  margin: ${pxToRem(10)};
`;

const CategoryMark = styled.div`
  font-weight: 900;
  font-size: ${pxToRem(40)};
  color: ${GRAY_400};
  margin: ${pxToRem(10)} ${pxToRem(40)};
`;
