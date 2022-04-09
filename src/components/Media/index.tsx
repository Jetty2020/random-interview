import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Guideline from '@assets/icon/guideline.svg';
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
  console.log('props로 받은 recordMethod:', recordMethod);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const meterRef = useRef<HTMLMeterElement>(null);
  // const chunk = useRef<BlobPart[]>([]);
  // const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  // const [mediaStream, setMediaStream] = useState<MediaStream>(
  //   null as unknown as MediaStream,
  // );
  const recordedBlob: BlobPart[] = [];
  let mediaRecorder: MediaRecorder;
  let mediaStream: MediaStream | null = null;
  console.log('컴포넌트 실행 시 mediaStream', mediaStream);
  const CONSTRAINTS = {
    video:
      recordMethod === 'video' || recordMethod === 'full'
        ? { deviceId: videoInput, width: 500, height: 400 }
        : false,
    audio:
      recordMethod === 'audio' || recordMethod === 'full'
        ? { deviceId: audioInput }
        : false,
  };

  // 기록 시작
  const startRecording = (mediaStream: MediaStream) => {
    localStorage.removeItem('recorded-interview');
    // const MEDIA_TYPE = recordMethod === 'audio' ? 'audio/mp4' : 'video/mp4';
    mediaRecorder = new MediaRecorder(mediaStream);
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = (e) => {
        recordedBlob.push(e.data);
      };
      mediaRecorder.start(1000);
    }
  };

  // 기록 저장
  const saveRecording = async () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const audioBlob = e.target.result;
      window.localStorage.setItem(
        'recorded-interview',
        JSON.stringify(audioBlob),
      );
    };
    reader.readAsDataURL(audioBlob);
  };

  // 기록 중지
  const stopRecording = () => {
    // const MEDIA_TYPE = recordMethod === 'audio' ? 'audio/mp4' : 'video/mp4';
    if (mediaRecorder) {
      // mediaRecorder.pause();
      mediaRecorder.stop();
    }
    if (isRecording) {
      saveRecording();
    }
  };

  // 시각화
  const DecibelMeter = (mediaStream: MediaStream) => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const mediaStreamSource = audioContext.createMediaStreamSource(mediaStream);
    const unit8Array = new Uint8Array(analyser.frequencyBinCount);
    mediaStreamSource.connect(analyser);

    const visualize = () => {
      // console.log('시각화 단계의 mediaStream', mediaStream);
      analyser.getByteFrequencyData(unit8Array);
      const decibel = Math.floor((Math.max(...unit8Array) / 255) * 100);
      // let rafId = 0;
      if (meterRef && meterRef.current) {
        meterRef.current.value = decibel;
      }
      if (recordMethod === 'audio') {
        // console.log(recordMethod);
        // console.log('시각화 시작');
        requestAnimationFrame(visualize);
      } else {
        console.log('audioContext 종료');
        audioContext.close();
        // cancelAnimationFrame(rafId);
        if (meterRef && meterRef.current) {
          meterRef.current.value = 0;
        }
      }
    };

    if (recordMethod === 'audio' || recordMethod === 'full') {
      console.log('DecibelMeter의 recordMethod', recordMethod);
      visualize();
    }
  };

  // 미디어 시작
  const startMedia = async (CONSTRAINTS: MediaStreamConstraints) => {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      console.log('media 시작 시 mediaStream', mediaStream);
      if (recordMethod === 'audio') {
        if (audioRef && audioRef.current) {
          const $audio = audioRef.current;
          $audio.srcObject = mediaStream;
          $audio.play();
        }
      } else if (recordMethod === 'video' || recordMethod === 'full') {
        if (videoRef && videoRef.current) {
          const $video = videoRef.current;
          $video.srcObject = mediaStream;
          $video.play();
        }
      }
      DecibelMeter(mediaStream);

      if (isRecording) {
        startRecording(mediaStream);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 미디어 중지
  const stopMedia = () => {
    if (mediaStream) {
      console.log('미디어스트림 중지');
      mediaStream.getTracks().forEach((track) => {
        console.log(track);
        track.stop();
      });
      mediaStream = null;
      console.log('중지 후', mediaStream);
    }
  };

  useEffect(() => {
    console.log('Media 컴포넌트 마운트');
    startMedia(CONSTRAINTS);
    return () => {
      console.log('Media 컴포넌트 언마운트');
      stopMedia();
      if (isRecording) {
        stopRecording();
      }
    };
  }, [recordMethod]);

  return (
    <section>
      {(recordMethod === 'audio' || recordMethod === 'full') && isTest && (
        <Styled.Decibel
          ref={meterRef}
          min={0}
          low={30}
          optimum={50}
          high={80}
          max={100}
        />
      )}
      {recordMethod !== 'audio' && (
        <Styled.VideoContainer>
          <Styled.Video ref={videoRef} muted />
          {isTest && (
            <Styled.Guideline>
              <Guideline />
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
