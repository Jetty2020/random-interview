import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { GRAY_300, PRIMARY_900, RED_300, WHITE } from '@constants/colors';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface FormInputs {
  all: boolean;
  html: boolean;
  css: boolean;
  js: boolean;
  web: boolean;
  react: boolean;
  quizCount: number;
}
// TODO: 문제 개수가 부족할 때의 에러처리, 문제 수를 정하는 로직이 만들어지면 버튼 아래에 안내문구 UI 추가

export const SettingForm = () => {
  const router = useRouter();
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
    if (errMsg === '질문의 개수는 1이상 100이하 입니다') {
      setErrMsg('');
    }
  };
  const submitCategory = () => {
    const { html, css, js, web, react, quizCount } = getValues();
    if (!(html || css || js || web || react)) {
      setErrMsg('카테고리를 선택해주세요');
    } else if (quizCount < 1 || quizCount > 100 || !quizCount) {
      setErrMsg('질문의 개수는 1이상 100이하 입니다');
    } else {
      const checkedOptionArr = [html, css, js, web, react];
      const checkedOptionLen = checkedOptionArr.filter((ele) => ele).length;
      const minQuizArr = checkedOptionArr.map(
        (ele) => Math.floor(quizCount / checkedOptionLen) * +ele,
      );
      // TODO: 문제 개수가 가장 많은 카테고리에 나머지 문제 개수 추가 / (quizCount % checkedOptionLen)
      const query = minQuizArr.join('_');
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