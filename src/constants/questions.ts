import { CATEGORIES } from './categories';

export interface QuestionData {
  question: string;
  answer: string;
  category: string;
}

export const QUESTIONS = [...Array(234)].map((_, i) => {
  const rand = Math.floor(Math.random() * CATEGORIES.length);
  return {
    question: `${CATEGORIES[rand]} 질문${i + 1}`,
    answer: `${CATEGORIES[rand]} 답변${i + 1}`,
    category: CATEGORIES[rand],
  };
});
