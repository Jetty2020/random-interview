import styled from '@emotion/styled';
import React from 'react';
import { GRAY_500 } from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';

export const TitlePage = React.memo(function TitlePage() {
  return (
    <Container>
      <Title>면접 질문 목록</Title>
      <Desc>면접 질문 목록을 카테고리별 열람 및 검색할 수 있습니다.</Desc>
    </Container>
  );
});

const Container = styled.div`
  height: ${pxToRem(100)};
  padding: ${pxToRem(50)} 0 0 ${pxToRem(30)};
`;

const Title = styled.h2`
  margin-bottom: ${pxToRem(10)};
  font-size: ${pxToRem(36)};
`;

const Desc = styled.p`
  font-size: ${pxToRem(16)};
  color: ${GRAY_500};
`;
