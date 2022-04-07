import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Image from 'next/image';
import Guideline from 'public/guideline.svg';
import * as Styled from './styled';

interface IMediaProps {
  recordMethod: string | undefined;
  audioInput: string | undefined;
  videoInput: string | undefined;
  isRecording: boolean;
  isTest: boolean;
  setDownloadLink?: Dispatch<SetStateAction<string>>;
}

const Media = ({
  recordMethod,
  audioInput,
  videoInput,
  isRecording,
  isTest,
  setDownloadLink,
}: IMediaProps) => {
  console.log(recordMethod);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const meterRef = useRef<HTMLMeterElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const recordedBlob: BlobPart[] = [];
  let mediaRecorder: MediaRecorder;
  let stream: MediaStream | null = null;

  const CONSTRAINTS = {
    video:
      recordMethod === 'video' || recordMethod === 'full'
        ? { deviceId: videoInput }
        : false,
    audio:
      recordMethod === 'audio' || recordMethod === 'full'
        ? { deviceId: audioInput }
        : false,
  };

  const startRecording = (stream: MediaStream) => {
    const MEDIA_TYPE = recordMethod === 'audio' ? 'audio/mp4' : 'video/mp4';

    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
      recordedBlob.push(e.data);
    };
    mediaRecorder.start(1000);
  };

  const stopRecording = () => {
    // const MEDIA_TYPE = recordMethod === 'audio' ? 'audio/mp4' : 'video/mp4';
    mediaRecorder.pause();
    mediaRecorder.stop();
    const downloadLink = URL.createObjectURL(
      // new Blob(recordedBlob, { type: MEDIA_TYPE }),
      new Blob(recordedBlob),
    );
    console.log('Media 컴포넌트의', downloadLink);
    setDownloadLink?.(downloadLink);
    router.push(
      {
        pathname: '/result',
        query: { downloadLink },
      },
      '/result',
      { shallow: true },
    );
  };

  const VUmeter = (stream: MediaStream) => {
    const audioContext = new AudioContext();
    const mediaStreamAudioSourceNode =
      audioContext.createMediaStreamSource(stream);
    const analyserNode = audioContext.createAnalyser();
    mediaStreamAudioSourceNode.connect(analyserNode);

    const pcmData = new Float32Array(analyserNode.fftSize);
    const onFrame = () => {
      analyserNode.getFloatTimeDomainData(pcmData);
      let sumSquares = 0.0;
      for (const amplitude of pcmData) {
        sumSquares += amplitude * amplitude;
      }
      if (meterRef && meterRef.current) {
        meterRef.current.value = Math.sqrt(sumSquares / pcmData.length);
      }
      window.requestAnimationFrame(onFrame);
    };
    window.requestAnimationFrame(onFrame);
  };

  const startMedia = async (CONSTRAINTS: MediaStreamConstraints) => {
    try {
      stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      if (recordMethod === 'audio') {
        if (audioRef && audioRef.current) {
          const $audio = audioRef.current;
          $audio.srcObject = stream;
          $audio.play();
        }
        VUmeter(stream);
      } else if (recordMethod === 'video' || recordMethod === 'full') {
        if (videoRef && videoRef.current) {
          const $video = videoRef.current;
          $video.srcObject = stream;
          $video.play();
        }
      }

      if (isRecording) {
        startRecording(stream);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const stopMedia = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  useEffect(() => {
    console.log('Media 컴포넌트 마운트');
    if (recordMethod !== undefined) {
      startMedia(CONSTRAINTS);
    }
    return () => {
      console.log('Media 컴포넌트 언마운트');
      stopMedia();
      if (isRecording) {
        stopRecording();
      }
    };
  }, [CONSTRAINTS]);

  return (
    <section>
      {recordMethod === 'audio' ? (
        <>
          <meter ref={meterRef} max={1} />
          {/* <audio ref={audioRef} muted controls /> */}
        </>
      ) : (
        <Styled.VideoContainer>
          <Styled.Video ref={videoRef} muted />
          {isTest && (
            <Styled.Guideline>
              <Image src={Guideline} layout="fill" />
            </Styled.Guideline>
          )}
        </Styled.VideoContainer>
      )}
    </section>
  );
};

Media.defaultProps = {
  setDownloadLink: () => null,
};

export default Media;
