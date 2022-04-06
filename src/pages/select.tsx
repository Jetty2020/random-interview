import { nanoid } from 'nanoid';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Media from '@components/Media';

interface IOptionValue {
  recordMethod: string | undefined;
  audioInput: string | undefined;
  videoInput: string | undefined;
}

const Select: NextPage = () => {
  const audioInputRef = useRef<HTMLSelectElement>(null);
  const videoInputRef = useRef<HTMLSelectElement>(null);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [optionValue, setOptionValue] = useState<IOptionValue>({
    recordMethod: 'none',
    audioInput: undefined,
    videoInput: undefined,
  });
  const { recordMethod, audioInput, videoInput } = optionValue;

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOptionValue({
      ...optionValue,
      [name]: value,
    });
  };

  const getDevicesList = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = devices.filter(
      (device) => device.kind === 'audioinput',
    );
    const videoDevices = devices.filter(
      (device) => device.kind === 'videoinput',
    );
    setAudioDevices(audioDevices);
    setVideoDevices(videoDevices);
    setOptionValue({
      ...optionValue,
      audioInput: audioDevices[0].deviceId,
      videoInput: videoDevices[0].deviceId,
    });
  };

  useEffect(() => {
    getDevicesList();
  }, []);

  return (
    <>
      <label htmlFor="recordMethod">
        기록 방식
        <select
          id="recordMethod"
          name="recordMethod"
          value={recordMethod}
          onChange={handleOptionChange}
          aria-label="기록 방식 선택"
        >
          <option value="none">없음</option>
          <option value="audio">녹음</option>
          <option value="video">영상</option>
          <option value="full">영상+녹음</option>
        </select>
      </label>
      <br />
      {(recordMethod === 'audio' || recordMethod === 'full') && (
        <label htmlFor="audioInput">
          오디오 장치 선택
          <select
            id="audioInput"
            name="audioInput"
            ref={audioInputRef}
            value={audioInput}
            onChange={handleOptionChange}
            aria-label="오디오 장치 선택"
          >
            {audioDevices.map((device) => (
              <option value={device.deviceId} key={`audio-device-${nanoid()}`}>
                {device.label}
              </option>
            ))}
          </select>
        </label>
      )}
      <br />
      {(recordMethod === 'video' || recordMethod === 'full') && (
        <label htmlFor="videoInput">
          비디오 장치 선택
          <select
            id="videoInput"
            name="videoInput"
            ref={videoInputRef}
            value={videoInput}
            onChange={handleOptionChange}
            aria-label="비디오 장치 선택"
          >
            {videoDevices.map((device) => (
              <option value={device.deviceId} key={`video-device-${nanoid()}`}>
                {device.label}
              </option>
            ))}
          </select>
        </label>
      )}
      <br />
      {recordMethod !== 'none' && (
        <>
          <div>테스트</div>
          <Media {...optionValue} isRecording={false} isTest={true} />
        </>
      )}
      <Link
        href={{
          pathname: '/random-play',
          query: {
            recordMethod,
            audioInput,
            videoInput,
          },
        }}
        as="/random-play"
      >
        시작하기
      </Link>
    </>
  );
};

export default Select;
