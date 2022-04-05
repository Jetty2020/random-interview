import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { GRAY_300, PRIMARY_900, RED_300, WHITE } from '@constants/colors';
import { useState } from 'react';
import router from 'next/router';
import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';

interface FormInputs {
  all: boolean;
  html: boolean;
  css: boolean;
  js: boolean;
  web: boolean;
  react: boolean;
  quizCount: number;
}

export const SettingForm = () => {
  const [errMsg, setErrMsg] = useState('');
  const { register, getValues, setValue, handleSubmit } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      all: true,
      html: true,
      css: true,
      js: true,
      web: true,
      react: true,
      quizCount: 10,
    },
  });

  const handleAllOption = () => {
    const { all } = getValues();
    setValue('html', all);
    setValue('css', all);
    setValue('js', all);
    setValue('web', all);
    setValue('react', all);

    if (errMsg === '카테고리를 선택해주세요') {
      setErrMsg('');
    }
  };

  const handleChangeOption = () => {
    const { html, css, js, web, react } = getValues();
    const checkAllOption = html && css && js && web && react;
    setValue('all', checkAllOption);

    if (errMsg === '카테고리를 선택해주세요') {
      setErrMsg('');
    }
  };

  const handleChangeInput = () => {
    if (errMsg !== '카테고리를 선택해주세요') {
      setErrMsg('');
    }
  };
  const submitCategory = () => {
    const { html, css, js, web, react, quizCount } = getValues();
    const checkedOptionArr = [html, css, js, web, react];
    const reducer = (accumulator: number, curr: number) => accumulator + curr;

    // 데이터 카테고리의 문제 개수를 세준다.
    const quizCountOfCategory = checkedOptionArr.map((ele, idx) =>
      ele
        ? QUESTIONS.filter((question) => question.category === CATEGORIES[idx])
            .length
        : 0,
    );
    const maxQuizCount = quizCountOfCategory.reduce(reducer);
    if (!(html || css || js || web || react)) {
      setErrMsg('카테고리를 선택해주세요');
    } else if (quizCount < 1 || quizCount > maxQuizCount || !quizCount) {
      setErrMsg(
        `선택한 카테고리에서 가능한 질문 개수는 1이상 ${maxQuizCount}이하 입니다`,
      );
    } else {
      // 유저가 선택한 카테고리 개수
      const checkedCategoryLen = checkedOptionArr.filter((ele) => ele).length;
      // 균등분배
      const sameCount = Math.floor(quizCount / checkedCategoryLen);
      // 나머지
      const remainedCount = quizCount % checkedCategoryLen;
      // 가장 많은 문제를 가진 카테고리의 인덱스
      const idxOfMax = quizCountOfCategory.indexOf(
        Math.max(...quizCountOfCategory),
      );

      const distributedQuizArr = quizCountOfCategory.map((e, i) => {
        // 나머지가 있는 경우에만,
        if (i === idxOfMax && e >= sameCount + remainedCount) {
          return sameCount + remainedCount;
        }
        if (i === idxOfMax && e >= sameCount) {
          return e;
        }
        if (e >= sameCount) {
          return sameCount;
        }
        return e;
      });
      // 추가
      const arrSum = distributedQuizArr.reduce(reducer);

      let diff = quizCount - arrSum;
      if (diff > 0) {
        for (let i = 0; i < distributedQuizArr.length; i++) {
          if (diff === 0) {
            break;
          }
          if (diff > 0 && quizCountOfCategory[i] > distributedQuizArr[i]) {
            const sumDiff = quizCountOfCategory[i] - distributedQuizArr[i];
            distributedQuizArr[i] += sumDiff;
            diff -= sumDiff;
          }
        }
      }

      const query = distributedQuizArr.join('_');
      router.push(`random-interview?question=${query}`);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(submitCategory)}>
        <label htmlFor="all">
          <input
            id="all"
            type="checkbox"
            {...register('all', {
              onChange: handleAllOption,
            })}
          />
          전체
        </label>
        <label htmlFor="html">
          <input
            id="html"
            type="checkbox"
            {...register('html', {
              onChange: handleChangeOption,
            })}
          />
          HTML
        </label>
        <label htmlFor="css">
          <input
            id="css"
            type="checkbox"
            {...register('css', {
              onChange: handleChangeOption,
            })}
          />
          CSS
        </label>
        <label htmlFor="js">
          <input
            id="js"
            type="checkbox"
            {...register('js', {
              onChange: handleChangeOption,
            })}
          />
          JS
        </label>
        <label htmlFor="web">
          <input
            id="web"
            type="checkbox"
            {...register('web', {
              onChange: handleChangeOption,
            })}
          />
          web
        </label>
        <label htmlFor="react">
          <input id="react" type="checkbox" value={1} {...register('react')} />
          react
        </label>
        <LabelCount htmlFor="quizCount">
          질문 개수 :
          <InputCount
            id="quizCount"
            type="number"
            min="1"
            autoFocus
            {...register('quizCount', {
              onChange: handleChangeInput,
            })}
          />
          개
        </LabelCount>
        {errMsg ? <TextError>{errMsg}</TextError> : null}
        <BtnSubmit type="submit" disabled={Boolean(errMsg)}>
          시작하기
        </BtnSubmit>
      </Form>
      <Notice>
        카테고리에 있는 문제보다 많은 질문 개수를 선택할 시, 해당 카테고리에
        있는 모든 문제가 출제됩니다
      </Notice>
    </>
  );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  width: 600px;
  margin: 0 auto;
  padding: 35px;
  border: 3px double ${PRIMARY_900};
`;

const LabelCount = styled.label`
  display: flex;
  align-items: center;
  grid-column: 1 / span 6;
  margin: 10px auto 20px;
`;

const InputCount = styled.input`
  width: 50px;
  height: 25px;
  margin: 10px;
  text-align: right;
`;

const TextError = styled.p`
  grid-column: 1 / span 6;
  text-align: center;
  margin: -20px 0 20px;
  font-size: 13px;
  color: ${RED_300};
`;

const BtnSubmit = styled.button`
  grid-column: 1 / span 6;
  width: 200px;
  height: 36px;
  margin: 0 auto;
  background-color: ${PRIMARY_900};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  color: ${WHITE};
  border-radius: 10px;

  &:disabled {
    background-color: ${GRAY_300};
  }
`;

const Notice = styled.div`
  margin-top: 5px;
  color: ${RED_300};
`;
