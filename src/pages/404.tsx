import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
import { pxToRem } from '@utils/pxToRem';

const Error404: NextPage = () => (
  <Container>
    <h2 className="sr-only">에러 404 페이지</h2>
    <ErrorText>Error 404 페이지를 찾을 수 없습니다.</ErrorText>{' '}
    <Link href="/" passHref>
      <a href="replace">홈으로 이동하기</a>
    </Link>
  </Container>
);

export default Error404;

const Container = styled.section`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: ${pxToRem(30)};
  text-align: center;
`;

const ErrorText = styled.p`
  margin-bottom: ${pxToRem(20)};
`;
