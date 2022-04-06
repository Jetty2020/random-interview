import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Media from '@components/Media';

interface IMediaProps {
  recordMethod: string | undefined;
  audioInput: string | undefined;
  videoInput: string | undefined;
  isRecording: boolean;
}

const RandomPlay: NextPage = () => {
  const router = useRouter();
  const [downloadLink, setDownloadLink] = useState<string>('');
  const { recordMethod, audioInput, videoInput } =
    router.query as unknown as IMediaProps;

  const goToResult = (e: { preventDefault: () => void }) => {
    console.log('result 페이지로 보내는', downloadLink);
    e.preventDefault();
    router.push({
      pathname: '/result',
      // query: { downloadLink },
    });
  };

  useEffect(() => {
    console.log('RandomPlay 페이지 마운트');
    return () => {
      console.log('RandomPlay 페이지 언마운트');
    };
  }, [downloadLink]);

  return (
    <>
      {recordMethod !== 'none' && (
        <Media
          isTest={false}
          isRecording={true}
          recordMethod={recordMethod}
          audioInput={audioInput}
          videoInput={videoInput}
          setDownloadLink={setDownloadLink}
        />
      )}
      {/* <a href="/result" onClick={goToResult}>
        결과 페이지로 이동
      </a> */}
      <Link href="/result">결과 페이지로 이동 링크</Link>
    </>
  );
};

export default RandomPlay;
