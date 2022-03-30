import PageTitle from '@components/common/PageTitle';
import { PRIMARY_900, WHITE } from '@constants/colors';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState } from 'react';

const RandomInterview: NextPage = () => {
  return (
    <>
      <PageTitle title="랜덤 면접" />
      <ContainerForm>
        <Form>
          <label htmlFor="all">
            <input id="all" type="checkbox" />
            전체
          </label>
          <label htmlFor="html">
            <input id="html" type="checkbox" />
            HTML
          </label>
          <label htmlFor="css">
            <input id="css" type="checkbox" />
            CSS
          </label>
          <label htmlFor="js">
            <input id="js" type="checkbox" />
            JS
          </label>
          <label htmlFor="web">
            <input id="web" type="checkbox" />
            web
          </label>
          <label htmlFor="react">
            <input id="react" type="checkbox" />
            react
          </label>
          <LabelCount htmlFor="quizCount">
            질문 갯수 :
            <InputCount id="quizCount" type="number" autoFocus />개
          </LabelCount>
          <BtnSubmit type="submit">submit</BtnSubmit>
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
  grid-column: 1 / span 6;
  margin: 15px auto;
`;

const InputCount = styled.input`
  width: 300px;
  margin-left: 10px;
  text-align: right;
`;

const BtnSubmit = styled.button`
  grid-column: 1 / span 6;
  width: 200px;
  margin: 0 auto;
  background-color: ${PRIMARY_900};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  color: ${WHITE};
  border-radius: 10px;
`;
