import styled from '@emotion/styled';
import { pxToRem } from '@utils/pxToRem';

export const VideoContainer = styled.div`
  position: relative;
  width: ${pxToRem(500)};
  height: ${pxToRem(400)};
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const Guideline = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Decibel = styled.meter`
  width: ${pxToRem(500)};
  height: ${pxToRem(50)};
`;
