import styled from '@emotion/styled';
import { GRAY_400, PRIMARY_200, PRIMARY_900, WHITE } from '@constants/colors';

export const StartInterview = () => {
  return (
    <Container>
      <ListQuestionNum>
        <ItemQuestionNum>
          <TitleCategory>HTML</TitleCategory>
          <span>1/5</span>
        </ItemQuestionNum>
        <ItemQuestionNum>
          <TitleCategory>CSS</TitleCategory>
          <span>0/3</span>
        </ItemQuestionNum>
        <ItemQuestionNum>
          <TitleCategory>JS</TitleCategory>
          <span>0/3</span>
        </ItemQuestionNum>
        <ItemQuestionNum>
          <TitleCategory>React</TitleCategory>
          <span>0/3</span>
        </ItemQuestionNum>
        <ItemQuestionNum>
          <TitleCategory>Web</TitleCategory>
          <span>0/3</span>
        </ItemQuestionNum>
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
