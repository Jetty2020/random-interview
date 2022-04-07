import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
import { pxToRem } from '@utils/pxToRem';
import { PRIMARY_700, WHITE } from '@constants/colors';
import ErrorIcon from '@assets/icon/error.svg';

const Error404: NextPage = () => (
  <Container>
    <h2 className="sr-only">에러 404 페이지</h2>
    <ErrorIcon width={pxToRem(200)} height={pxToRem(200)} fill={PRIMARY_700} />
    <Title>404 ERROR</Title>
    <Desc>페이지를 찾을 수 없습니다.</Desc>
    <Link href="/" passHref>
      <BackAnchor href="replace">홈으로 이동하기</BackAnchor>
    </Link>
  </Container>
);

export default Error404;

const Container = styled.section`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  text-align: center;
`;

const Title = styled.h3`
  margin: ${pxToRem(28)} 0 ${pxToRem(12)};
  font-size: ${pxToRem(50)};
  color: ${PRIMARY_700};
  font-weight: 700;
`;

const Desc = styled.p`
  margin-bottom: ${pxToRem(80)};
  font-size: ${pxToRem(20)};
  color: ${PRIMARY_700};
  font-weight: 500;
`;

const BackAnchor = styled.a`
  border: ${pxToRem(3)} solid ${PRIMARY_700};
  border-radius: ${pxToRem(10)};
  padding: ${pxToRem(17)} ${pxToRem(25)};
  background-color: ${WHITE};
  color: ${PRIMARY_700};
  font-weight: 600;
  font-size: ${pxToRem(18)};

  &:hover {
    background-color: ${PRIMARY_700};
    color: ${WHITE};
  }
`;
