import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Result: NextPage = () => {
  const router = useRouter();
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const { downloadLink } = router.query as { downloadLink: string };
  console.log('result 페이지의', downloadLink);
  if (downloadRef && downloadRef.current) {
    downloadRef.current.href = downloadLink;
  }

  return (
    <a ref={downloadRef} href="none" download="random-interview.mp4">
      다운로드
    </a>
  );
};

export default Result;
