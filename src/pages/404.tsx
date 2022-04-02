import { NextPage } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

const Error404: NextPage = () => (
  <div>
    <h2 className="sr-only">에러 404 페이지</h2>
    <p>Error 404 페이지를 찾을 수 없습니다.</p>{' '}
    <Link href="/" passHref>
      <a href="replace">홈으로 이동하기</a>
    </Link>
  </div>
);

export default Error404;
