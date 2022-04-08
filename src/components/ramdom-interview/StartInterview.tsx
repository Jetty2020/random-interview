import styled from '@emotion/styled';
import router from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { GRAY_400, PRIMARY_200, PRIMARY_900, WHITE } from '@constants/colors';
import { CATEGORIES } from '@constants/categories';
import { QUESTIONS } from '@constants/questions';

const selectIndex = (totalIndex: number, selectingNumber: number) => {
  const randomIndexArray = [];
  for (let i = 0; i < selectingNumber; i++) {
    const randomNum = Math.floor(Math.random() * totalIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i -= 1;
    }
  }
  return randomIndexArray;
};

export const StartInterview = () => {
  const { question } = router.query;
  const [questionIndexArr, setQuestionIndexArr] = useState<number[][]>([[]]);
  console.log('question', question);
  const [questionContent, setQuestionContent] = useState([0, 0]);

  const questionQueryArr =
    question
      ?.toString()
      .split('_')
      .map((ele) => +ele) || [];

  const firstStartCategory = questionQueryArr.findIndex((e) => e !== 0);
  console.log(`firstStartCategory ${firstStartCategory}`);
  console.log('questionQueryArr', questionQueryArr);
  const [progressArr, setProgressArr] = useState(
    Array(questionQueryArr.length)
      .fill(0)
      .fill(1, firstStartCategory, firstStartCategory + 1),
  );

  const quizCountOfCategory = useMemo(
    () =>
      questionQueryArr.map((ele, idx) =>
        ele > 0
          ? QUESTIONS.filter(
              (question) => question.category === CATEGORIES[idx],
            ).length
          : 0,
      ),
    [],
  );

  useEffect(() => {
    setQuestionContent([firstStartCategory, 0]);
    setQuestionIndexArr(
      questionQueryArr.map((ele, idx) =>
        selectIndex(quizCountOfCategory[idx], ele),
      ),
    );
  }, []);

  const handleNextQuestion = () => {
    if (
      questionQueryArr[questionContent[0]] ===
        progressArr[questionContent[0]] &&
      questionQueryArr.length - 1 === questionContent[0]
    ) {
      const newArr = questionIndexArr.map((ele) => ele.join('*')).join('-');
      router.push(`/random-interview?question-list=${newArr}`);
    } else if (
      questionQueryArr[questionContent[0]] === progressArr[questionContent[0]]
    ) {
      let check = 1;
      while (questionQueryArr[questionContent[0] + check] === 0) {
        check += 1;
      }
      const newState = [questionContent[0] + check, 0];
      const newProgress = progressArr.concat();
      newProgress[questionContent[0] + check] = 1;
      setQuestionContent(newState);
      setProgressArr(newProgress);
    } else {
      const newState = questionContent.concat();
      newState[1] += 1;
      const newProgress = progressArr.concat();
      newProgress[questionContent[0]] += 1;

      setQuestionContent(newState);
      setProgressArr(newProgress);
    }
  };

  return (
    <Container>
      <ListQuestionNum>
        {CATEGORIES.map((ele, idx) => {
          if (questionQueryArr[idx]) {
            return (
              <ItemQuestionNum key={Math.random()}>
                <TitleCategory>{ele}</TitleCategory>
                <span>
                  {progressArr[idx]}/{questionQueryArr[idx]}
                </span>
              </ItemQuestionNum>
            );
          }
          return null;
        })}
      </ListQuestionNum>
      <Container>
        <ContentQuestion>
          {
            QUESTIONS.filter(
              (ele) => ele.category === CATEGORIES[questionContent[0]],
            )[questionIndexArr[questionContent[0]][questionContent[1]]]
              ?.question
          }
        </ContentQuestion>
        <Video />
      </Container>
      <BtnContainer>
        <Btn type="button">종료하기</Btn>
        <Btn type="button" onClick={handleNextQuestion}>
          {questionQueryArr[questionContent[0]] ===
            progressArr[questionContent[0]] &&
          questionQueryArr.length - 1 === questionContent[0]
            ? '질문 리스트 보기'
            : '다음 질문'}
        </Btn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListQuestionNum = styled.ul`
  display: flex;
  justify-content: center;
`;

const ItemQuestionNum = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 55px;
  background-color: ${PRIMARY_200};
  border-radius: 15px;

  & + & {
    margin-left: 15px;
  }
`;
const TitleCategory = styled.span`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const ContentQuestion = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

const Video = styled.div`
  width: 500px;
  height: 400px;
  background-color: ${GRAY_400};
  margin-top: 40px;
`;

const Btn = styled.button`
  width: 160px;
  height: 36px;
  margin: 0 auto;
  background-color: ${PRIMARY_900};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  color: ${WHITE};
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 500px;
  margin-top: 50px;
`;
