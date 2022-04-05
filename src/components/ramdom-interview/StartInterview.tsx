import styled from '@emotion/styled';
import router from 'next/router';
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
  const questionQueryArr =
    question
      ?.toString()
      .split('_')
      .map((ele) => +ele) || [];
  const quizCountOfCategory = questionQueryArr.map((ele, idx) =>
    ele > 0
      ? QUESTIONS.filter((question) => question.category === CATEGORIES[idx])
          .length
      : 0,
  );
  const questionArr = questionQueryArr.map((ele, idx) =>
    selectIndex(quizCountOfCategory[idx], ele),
  );

  console.log(questionArr);

  return (
    <Container>
      <ListQuestionNum>
        {CATEGORIES.map((ele, idx) => {
          return (
            <ItemQuestionNum key={Math.random()}>
              <TitleCategory>{ele}</TitleCategory>
              <span>0/{questionQueryArr[idx]}</span>
            </ItemQuestionNum>
          );
        })}
      </ListQuestionNum>
      <Container>
        <ContentQuestion>Q1. DOCTYPE 이란 무엇인가요?</ContentQuestion>
        <Video />
      </Container>
      <BtnContainer>
        <Btn type="button">종료하기</Btn>
        <Btn type="button">다음 질문</Btn>
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
