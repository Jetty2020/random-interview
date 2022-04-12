import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { pxToRem } from '@utils/pxToRem';
import Guideline from '@assets/icon/guideline.svg';
import { ERROR } from '@constants/colors';

interface IMediaProps {
  recordMethod: string | undefined;
  audioInput: string | undefined;
  videoInput: string | undefined;
  isRecording: boolean;
  isTest: boolean;
}

const Media = ({
  recordMethod,
  audioInput,
  videoInput,
  isRecording,
  isTest,
}: IMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const meterRef = useRef<HTMLMeterElement>(null);
  const recordedBlob: BlobPart[] = [];
  const MIME_TYPE =
    recordMethod === 'audio' ? 'audio/webm;codecs=opus' : 'video/webm';
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
  let mediaRecorder: MediaRecorder;
  let mediaStream: MediaStream | null = null;
  let rafId = 0;

  const startRecording = (mediaStream: MediaStream) => {
    if (indexedDB) {
      const request = indexedDB.open('random-interview');
      request.onupgradeneeded = () => {
        const db = request.result;
        db.createObjectStore('recordings');
      };
      request.onerror = (e) => {
        console.error(e);
      };
    }

    mediaRecorder = new MediaRecorder(mediaStream);
    if (mediaRecorder && recordedBlob.length === 0) {
      mediaRecorder.ondataavailable = (e) => {
        recordedBlob.push(e.data);
      };
      mediaRecorder.start(1000);
    }
  };

  const saveRecording = () => {
    const mergedBlob = new Blob(recordedBlob, { type: MIME_TYPE });
    const request = indexedDB.open('random-interview');
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['recordings'], 'readwrite');
      const objectStore = transaction.objectStore('recordings');
      objectStore.add(mergedBlob, 'index');
    };
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setTimeout(() => {
        saveRecording();
      }, 0);
    }
  };

  const DecibelMeter = (mediaStream: MediaStream) => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const mediaStreamSource = audioContext.createMediaStreamSource(mediaStream);
    const uint8Array = new Uint8Array(analyser.frequencyBinCount);
    mediaStreamSource.connect(analyser);

    const visualize = () => {
      analyser.getByteFrequencyData(uint8Array);
      const decibel = Math.floor((Math.max(...uint8Array) / 255) * 100);
      if (meterRef && meterRef.current) {
        meterRef.current.value = decibel;
      }
      rafId = requestAnimationFrame(visualize);
    };
    visualize();
  };

  const startMedia = async (CONSTRAINTS: MediaStreamConstraints) => {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      if (recordMethod === 'video' || recordMethod === 'full') {
        if (videoRef && videoRef.current) {
          const $video = videoRef.current;
          $video.srcObject = mediaStream;
          $video.play();
        }
      }
      if (recordMethod !== 'video') {
        DecibelMeter(mediaStream);
      }
      if (isRecording) {
        startRecording(mediaStream);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const stopMedia = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      mediaStream = null;
    }
  };

  useEffect(() => {
    startMedia(CONSTRAINTS);
    return () => {
      stopMedia();
      cancelAnimationFrame(rafId);
      if (isRecording) {
        stopRecording();
      }
    };
  }, [recordMethod]);

  return (
    <section>
      {(recordMethod === 'audio' || recordMethod === 'full') && isTest && (
        <Decibel
          ref={meterRef}
          min={0}
          low={30}
          optimum={50}
          high={80}
          max={100}
        />
      )}
      {recordMethod !== 'audio' && (
        <ContainerVideo>
          <Video ref={videoRef} muted />
          {isTest && (
            <ContainerGuideline>
              <Guideline />
            </ContainerGuideline>
          )}
        </ContainerVideo>
      )}
      {recordMethod === 'audio' && !isTest && (
        <RecordingNotice>
          <Pulse />
          <span>REC</span>
        </RecordingNotice>
      )}
    </section>
  );
};

const ContainerVideo = styled.div`
  position: relative;
  width: ${pxToRem(500)};
  height: ${pxToRem(400)};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const ContainerGuideline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Decibel = styled.meter`
  width: ${pxToRem(500)};
  height: ${pxToRem(50)};
`;

const pulse = keyframes`
    40% {
        transform: scale(1.1);
        box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.3);
    }

    80% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0)
    }
`;

const RecordingNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${pxToRem(30)};
  span {
    color: ${ERROR};
  }
`;

const Pulse = styled.div`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  margin-bottom: ${pxToRem(10)};
  border-radius: 50%;
  background-color: ${ERROR};
  animation: ${pulse} 2.5s infinite;
`;

export default React.memo(Media);
