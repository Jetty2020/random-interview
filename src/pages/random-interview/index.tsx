import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import PageTitle from '@components/common/PageTitle';
import { PRIMARY_900, RED_300, WHITE } from '@constants/colors';

interface FormInputs {
  all: boolean;
  html: boolean;
  css: boolean;
  js: boolean;
  web: boolean;
  react: boolean;
  quizCount: number;
}
// TODO: 서밑 disabled 추가, 카테고리 선택 안하고 버튼 눌렀을 때 에러 추가, 문제 개수가 부족할 때의 에러처리

const RandomInterview: NextPage = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      all: true,
      html: true,
      css: true,
      js: true,
      web: true,
      react: true,
      quizCount: 0,
    },
  });

  const handleAllOption = () => {
    const { all } = getValues();
    setValue('html', all);
    setValue('css', all);
    setValue('js', all);
    setValue('web', all);
    setValue('react', all);
  };

  const handleChangeOption = () => {
    const { html, css, js, web, react } = getValues();
    const checkAllOption = html && css && js && web && react;
    setValue('all', checkAllOption);
  };

  const submitCategory = () => {
    const { html, css, js, web, react } = getValues();
    if (html || css || js || web || react) {
      console.log('값존재 ');
      console.log(getValues());
    } else {
      console.log('값x');
    }
  };

  return (
    <>
      <PageTitle title="랜덤 면접" />
      <ContainerForm>
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
            <input
              id="react"
              type="checkbox"
              value={1}
              {...register('react')}
            />
            react
          </label>
          <LabelCount htmlFor="quizCount">
            질문 개수 :
            <InputCount
              id="quizCount"
              type="number"
              autoFocus
              {...register('quizCount', {
                required: true,
                onChange: handleChangeOption,
                validate: { positive: (v) => v > 0 && v <= 100 },
              })}
            />
            개
          </LabelCount>
          {errors?.quizCount ? (
            <TextError>질문의 개수는 1이상 100이하 입니다</TextError>
          ) : null}
          <BtnSubmit type="submit">시작하기</BtnSubmit>
        </Form>
      </ContainerForm>
    </>
  );
};

export default RandomInterview;

const ContainerForm = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;
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
`;
