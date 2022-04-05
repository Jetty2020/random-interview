import styled from '@emotion/styled';
import Link from 'next/link';
import { NextPageContext } from 'next';
import { pxToRem } from '@utils/pxToRem';
import { PRIMARY_700, WHITE } from '@constants/colors';
import ErrorIcon from '@assets/icon/error.svg';

import Error404 from './404';

function Error(statusCode: number) {
  if (statusCode === 404) return <Error404 />;
  return (
    <Container>
      <h2 className="sr-only">에러 페이지</h2>
      {statusCode > 510 ? (
        <div>
          <ErrorIcon
            width={pxToRem(200)}
            height={pxToRem(200)}
            fill={PRIMARY_700}
          />
          <Title>Network ERROR</Title>
          <Desc>네트워크 에러가 발생했습니다.</Desc>
          <Link href="/" passHref>
            <BackAnchor href="replace">홈으로 이동하기</BackAnchor>
          </Link>
        </div>
      ) : statusCode ? (
        <div>
          <ErrorIcon
            width={pxToRem(200)}
            height={pxToRem(200)}
            fill={PRIMARY_700}
          />
          <Title>Server ERROR</Title>
          <Desc>서버 에러가 발생했습니다.</Desc>
          <Link href="/" passHref>
            <BackAnchor href="replace">홈으로 이동하기</BackAnchor>
          </Link>
        </div>
      ) : (
        <div>
          <ErrorIcon
            width={pxToRem(200)}
            height={pxToRem(200)}
            fill={PRIMARY_700}
          />
          <Title>Client ERROR</Title>
          <Desc>클라이언트 에러가 발생했습니다.</Desc>
          <Link href="/" passHref>
            <BackAnchor href="replace">홈으로 이동하기</BackAnchor>
          </Link>
        </div>
      )}
    </Container>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

const Container = styled.section`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  text-align: center;
`;

const Title = styled.h3`
  font-size: ${pxToRem(50)};
  color: ${PRIMARY_700};
  font-weight: 700;
  margin: ${pxToRem(28)} 0 ${pxToRem(12)};
`;

const Desc = styled.p`
  margin-bottom: ${pxToRem(80)};
  font-size: ${pxToRem(20)};
  color: ${PRIMARY_700};
  font-weight: 500;
`;

const BackAnchor = styled.a`
  background-color: ${WHITE};
  color: ${PRIMARY_700};
  padding: ${pxToRem(17)} ${pxToRem(25)};
  font-weight: 600;
  font-size: ${pxToRem(18)};
  border: ${pxToRem(3)} solid ${PRIMARY_700};
  border-radius: ${pxToRem(10)};

  &:hover {
    background-color: ${PRIMARY_700};
    color: ${WHITE};
  }
`;
