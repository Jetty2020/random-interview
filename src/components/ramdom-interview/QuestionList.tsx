import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';

interface StartInterviewProps {
  questionIndexArr: number[][];
}

export const QuestionList = ({ questionIndexArr }: StartInterviewProps) => {
  const questionArr = Array(0);
  CATEGORIES.forEach((_) => questionArr.push([]));

  for (let i = 0; i < questionIndexArr.length; i++) {
    const questionCategoryArr = QUESTIONS.filter(
      (ele) => ele.category === CATEGORIES[i],
    );
    for (let j = 0; j < questionIndexArr[i].length; j++) {
      questionArr[i].push(questionCategoryArr[questionIndexArr[i][j]]);
    }
  }
  console.log(questionArr[0]);
  return <>ddu</>;
};
