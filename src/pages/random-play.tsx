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

  console.log('랜덤플레이 페이지에서 받은 recordMethod', recordMethod);

  useEffect(() => {
    console.log('RandomPlay 페이지 마운트');
    return () => {
      console.log('RandomPlay 페이지 언마운트');
    };
  }, [downloadLink]);

  return (
    <>
      {!(recordMethod === 'none' || recordMethod === undefined) && (
        <Media
          isTest={false}
          isRecording={true}
          recordMethod={recordMethod}
          audioInput={audioInput}
          videoInput={videoInput}
          setDownloadLink={setDownloadLink}
        />
      )}
      <Link href="/result">종료하기 or 문제리스트 보기</Link>
    </>
  );
};

export default RandomPlay;
