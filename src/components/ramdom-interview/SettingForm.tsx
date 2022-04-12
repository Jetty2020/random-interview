import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import router from 'next/router';
import {
  ERROR,
  GRAY_300,
  PRIMARY_900,
  RED_300,
  WHITE,
} from '@constants/colors';
import { QUESTIONS } from '@constants/questions';
import { CATEGORIES } from '@constants/categories';
import { pxToRem } from '@utils/pxToRem';
import Media from '@components/Media';

interface FormInputs {
  all: boolean;
  html: boolean;
  css: boolean;
  js: boolean;
  web: boolean;
  react: boolean;
  quizCount: number;
}

interface IOptionValue {
  recordMethod: string | undefined;
  audioInput: string | undefined;
  videoInput: string | undefined;
}

export const SettingForm = () => {
  const audioInputRef = useRef<HTMLSelectElement>(null);
  const videoInputRef = useRef<HTMLSelectElement>(null);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [optionValue, setOptionValue] = useState<IOptionValue>({
    recordMethod: undefined,
    audioInput: undefined,
    videoInput: undefined,
  });
  const { recordMethod, audioInput, videoInput } = optionValue;
  const [errMsg, setErrMsg] = useState('');
  const { register, getValues, setValue, handleSubmit } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      all: true,
      html: true,
      css: true,
      js: true,
      web: true,
      react: true,
      quizCount: 10,
    },
  });

  const handleAllOption = () => {
    const { all } = getValues();
    setValue('html', all);
    setValue('css', all);
    setValue('js', all);
    setValue('web', all);
    setValue('react', all);

    if (errMsg === '카테고리를 선택해주세요') {
      setErrMsg('');
    }
  };

  const handleChangeOption = () => {
    const { html, css, js, web, react } = getValues();
    const checkAllOption = html && css && js && web && react;
    setValue('all', checkAllOption);

    if (errMsg === '카테고리를 선택해주세요') {
      setErrMsg('');
    }
  };

  const handleChangeInput = () => {
    if (errMsg !== '카테고리를 선택해주세요') {
      setErrMsg('');
    }
  };

  const handleChangeMethod = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOptionValue({
      ...optionValue,
      [name]: value,
    });
  };

  const submitCategory = () => {
    const { html, css, js, web, react, quizCount } = getValues();
    const checkedOptionArr = [html, css, js, web, react];
    const reducer = (accumulator: number, curr: number) => accumulator + curr;

    // 데이터 카테고리의 문제 개수를 세준다.
    const quizCountOfCategory = checkedOptionArr.map((ele, idx) =>
      ele
        ? QUESTIONS.filter((question) => question.category === CATEGORIES[idx])
            .length
        : 0,
    );

    const maxQuizCount = quizCountOfCategory.reduce(reducer);
    if (!(html || css || js || web || react)) {
      setErrMsg('카테고리를 선택해주세요');
    } else if (quizCount < 1 || quizCount > maxQuizCount || !quizCount) {
      setErrMsg(
        `선택한 카테고리에서 가능한 질문 개수는 1이상 ${maxQuizCount}이하 입니다`,
      );
    } else {
      // 유저가 선택한 카테고리 개수
      const checkedCategoryLen = checkedOptionArr.filter((ele) => ele).length;
      // 균등분배
      const sameCount = Math.floor(quizCount / checkedCategoryLen);
      // 나머지
      const remainedCount = quizCount % checkedCategoryLen;
      // 가장 많은 문제를 가진 카테고리의 인덱스
      const idxOfMax = quizCountOfCategory.indexOf(
        Math.max(...quizCountOfCategory),
      );

      const distributedQuizArr = quizCountOfCategory.map((e, i) => {
        // 나머지가 있는 경우에만,
        if (i === idxOfMax && e >= sameCount + remainedCount) {
          return sameCount + remainedCount;
        }
        if (i === idxOfMax && e >= sameCount) {
          return e;
        }
        if (e >= sameCount) {
          return sameCount;
        }
        return e;
      });

      // 추가
      const arrSum = distributedQuizArr.reduce(reducer);

      let diff = quizCount - arrSum;
      if (diff > 0) {
        for (let i = 0; i < distributedQuizArr.length; i++) {
          if (diff === 0) {
            break;
          }
          if (diff > 0 && quizCountOfCategory[i] > distributedQuizArr[i]) {
            const sumDiff = quizCountOfCategory[i] - distributedQuizArr[i];
            distributedQuizArr[i] += sumDiff;
            diff -= sumDiff;
          }
        }
      }

      const query = distributedQuizArr.join('_');
      router.push(
        {
          pathname: 'random-interview',
          query: { question: query, recordMethod, audioInput, videoInput },
        },
        'random-interview/interviewing',
      );
    }
  };

  const getDevicesList = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    if (devices) {
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
        audioInput: audioDevices[0]?.deviceId,
        videoInput: videoDevices[0]?.deviceId,
      });
    }
  };

  useEffect(() => {
    getDevicesList();
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit(submitCategory)}>
        <LabelStyled htmlFor="all">
          <input
            id="all"
            type="checkbox"
            {...register('all', {
              onChange: handleAllOption,
            })}
          />
          전체
        </LabelStyled>
        <LabelStyled htmlFor="html">
          <input
            id="html"
            type="checkbox"
            {...register('html', {
              onChange: handleChangeOption,
            })}
          />
          HTML
        </LabelStyled>
        <LabelStyled htmlFor="css">
          <input
            id="css"
            type="checkbox"
            {...register('css', {
              onChange: handleChangeOption,
            })}
          />
          CSS
        </LabelStyled>
        <LabelStyled htmlFor="js">
          <input
            id="js"
            type="checkbox"
            {...register('js', {
              onChange: handleChangeOption,
            })}
          />
          JS
        </LabelStyled>
        <LabelStyled htmlFor="web">
          <input
            id="web"
            type="checkbox"
            {...register('web', {
              onChange: handleChangeOption,
            })}
          />
          web
        </LabelStyled>
        <LabelStyled htmlFor="react">
          <input id="react" type="checkbox" value={1} {...register('react')} />
          react
        </LabelStyled>
        <LabelStyled htmlFor="quizCount">
          질문 개수 :
          <InputCount
            id="quizCount"
            type="number"
            min="1"
            autoFocus
            {...register('quizCount', {
              onChange: handleChangeInput,
            })}
          />
          개
        </LabelStyled>
        <RecordMethod htmlFor="recordMethod">
          기록 방식 &nbsp;
          <select
            id="recordMethod"
            name="recordMethod"
            value={recordMethod}
            onChange={handleChangeMethod}
            aria-label="기록 방식 선택"
          >
            <option value="none">없음</option>
            {audioDevices.length !== 0 && <option value="audio">녹음</option>}
            {videoDevices.length !== 0 && <option value="video">영상</option>}
            {audioDevices.length !== 0 && videoDevices.length !== 0 && (
              <option value="full">녹음+영상</option>
            )}
          </select>
        </RecordMethod>
        {(recordMethod === 'audio' || recordMethod === 'full') && (
          <AudioInput htmlFor="audioInput">
            오디오 &nbsp;
            <select
              id="audioInput"
              name="audioInput"
              ref={audioInputRef}
              value={audioInput}
              onChange={handleChangeMethod}
              aria-label="오디오 장치 선택"
            >
              {audioDevices.map((device) => (
                <option
                  value={device.deviceId}
                  key={`audio-device-${nanoid()}`}
                >
                  {device.label}
                </option>
              ))}
            </select>
          </AudioInput>
        )}
        {(recordMethod === 'video' || recordMethod === 'full') && (
          <VideoInput htmlFor="videoInput">
            비디오 &nbsp;
            <select
              id="videoInput"
              name="videoInput"
              ref={videoInputRef}
              value={videoInput}
              onChange={handleChangeMethod}
              aria-label="비디오 장치 선택"
            >
              {videoDevices.map((device) => (
                <option
                  value={device.deviceId}
                  key={`video-device-${nanoid()}`}
                >
                  {device.label}
                </option>
              ))}
            </select>
          </VideoInput>
        )}
        {audioDevices.length === 0 && videoDevices.length !== 0 && (
          <MsgDeviceErr>마이크가 없어 녹음이 불가합니다.</MsgDeviceErr>
        )}
        {audioDevices.length !== 0 && videoDevices.length === 0 && (
          <MsgDeviceErr>카메라가 없어 녹화가 불가합니다.</MsgDeviceErr>
        )}
        {audioDevices.length === 0 && videoDevices.length === 0 && (
          <MsgDeviceErr>장치가 없어 녹음/녹화가 불가합니다.</MsgDeviceErr>
        )}
        {errMsg ? <TextError>{errMsg}</TextError> : null}
        {!(recordMethod === 'none' || recordMethod === undefined) && (
          <ContainerRecordSetting>
            <Media {...optionValue} isRecording={false} isTest={true} />
          </ContainerRecordSetting>
        )}
        <BtnSubmit type="submit" disabled={Boolean(errMsg)}>
          시작하기
        </BtnSubmit>
      </Form>
      <Notice>
        카테고리에 있는 문제보다 많은 질문 개수를 선택할 시, 해당 카테고리에
        있는 모든 문제가 출제됩니다
      </Notice>
    </>
  );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr) 2fr;
  gap: ${pxToRem(20)} 0;
  text-align: center;
  margin: ${pxToRem(60)} auto 0;
  padding: ${pxToRem(35)} ${pxToRem(60)};
  border: 3px double ${PRIMARY_900};
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputCount = styled.input`
  width: ${pxToRem(50)};
  height: ${pxToRem(25)};
  margin: 0 ${pxToRem(10)};
  text-align: right;
`;

const TextError = styled.p`
  grid-column: 1 / span 8;
  text-align: center;
  margin: ${pxToRem(-20)} 0 ${pxToRem(20)};
  font-size: ${pxToRem(13)};
  color: ${RED_300};
`;

const BtnSubmit = styled.button`
  grid-column: 1 / span 8;
  width: ${pxToRem(200)};
  height: ${pxToRem(36)};
  margin: 0 auto;
  background-color: ${PRIMARY_900};
  font-size: ${pxToRem(20)};
  font-weight: 600;
  line-height: 1.6;
  color: ${WHITE};
  border-radius: ${pxToRem(10)};

  &:disabled {
    background-color: ${GRAY_300};
  }
`;

const Notice = styled.div`
  margin-top: 5px;
  color: ${RED_300};
  text-align: center;
`;

const RecordMethod = styled.label`
  grid-column: 1/3;
`;

const AudioInput = styled.label`
  grid-column: span 3;
`;

const VideoInput = styled.label`
  grid-column: span 3;
`;

const ContainerRecordSetting = styled.div`
  grid-column: 1 / span 7;
  margin: 0 auto;
`;

const MsgDeviceErr = styled.p`
  grid-column: span 2;
  line-height: ${pxToRem(19)};
  color: ${ERROR};
  vertical-align: middle;
`;
