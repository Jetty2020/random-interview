import styled from '@emotion/styled';
import Link from 'next/link';
import { pxToRem } from '@utils/pxToRem';
import Error404 from './404';

function Error(statusCode: number) {
  if (statusCode === 404) return <Error404 />;
  return (
    <Container>
      <h2 className="sr-only">에러 페이지</h2>
      {statusCode > 510 ? (
        <div>
          <ErrorText>네트워크 에러가 발생했습니다.</ErrorText>
          <Link href="/" passHref>
            <a href="replace">홈으로 이동하기</a>
          </Link>
        </div>
      ) : (
        <div>
          <ErrorText>에러가 발생했습니다.</ErrorText>
          <Link href="/" passHref>
            <a href="replace">홈으로 이동하기</a>
          </Link>
        </div>
      )}
    </Container>
  );
}

export default Error;

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
