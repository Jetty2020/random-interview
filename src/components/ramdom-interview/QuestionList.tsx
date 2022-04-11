import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';
import { pxToRem } from '@utils/pxToRem';
import { GRAY_400, PRIMARY_900, WHITE } from '@constants/colors';
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

  const downloadRecording = async () => {
    let BLOB: Blob;
    let objectURL = '';
    // 로컬스토리지 방식
    const recording = JSON.parse(
      localStorage.getItem('recorded-interview') as string,
    );
    console.log('recording:', recording);
    BLOB = await (await fetch(recording)).blob();
    console.log('BLOB:', BLOB);
    objectURL = URL.createObjectURL(BLOB);

    // indexedDB 방식
    // const request = indexedDB.open('random-interview');
    // request.onsuccess = () => {
    //   const db = request.result;
    //   const transaction = db.transaction(['recordings'], 'readonly');
    //   const objectStore = transaction.objectStore('recordings');
    //   const response = objectStore.get('index');
    //   response.onsuccess = () => {
    //     BLOB = response.result;
    //     objectURL = URL.createObjectURL(BLOB);
    //     console.log(BLOB);
    //   };
    // };

    // 다운로드 링크 생성
    const downloadLink = document.createElement('a');
    downloadLink.download = 'recorded-interview.webm';
    console.log('objectURL:', objectURL);
    downloadLink.href = objectURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    URL.revokeObjectURL(objectURL);
    downloadLink.remove();
  };

  return (
    <>
      <ButtonContainer>
        <Link href="/random-interview">
          <Button as="a">처음으로</Button>
        </Link>
        <Button type="button" onClick={downloadRecording}>
          음성/영상 저장
        </Button>
      </ButtonContainer>
      <ContainerUL>
        {questionArr.map((e) =>
          e.map(
            (
              content: { question: string; answer: string; category: string },
              index: number,
            ) => {
              return (
                <List key={nanoid()}>
                  {index === 0 ? (
                    <CategoryMark key={nanoid()}>
                      {content.category}
                    </CategoryMark>
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
    </>
  );
};

const ButtonContainer = styled.div`
  height: ${pxToRem(80)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${pxToRem(10)};
`;

const Button = styled.button`
  width: ${pxToRem(160)};
  height: ${pxToRem(36)};
  background-color: ${PRIMARY_900};
  font-size: ${pxToRem(18)};
  font-weight: 500;
  line-height: ${pxToRem(36)};
  text-align: center;
  color: ${WHITE};
  border-radius: 10px;
  cursor: pointer;
`;

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
