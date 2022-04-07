import styled from '@emotion/styled';
import React from 'react';
import { GRAY_100, PRIMARY_800, WHITE } from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';

interface TitleListProps {
  children: string;
}

const TitleList = ({ children }: TitleListProps) => {
  return <Title>{children}</Title>;
};

const Title = styled.p`
  box-sizing: border-box;
  position: sticky;
  top: ${pxToRem(80)};
  padding: ${pxToRem(20)} 0 ${pxToRem(30)} ${pxToRem(20)};
  margin-bottom: ${pxToRem(20)};
  border-bottom: ${pxToRem(2)} solid ${GRAY_100};
  background-color: ${WHITE};
  font-weight: 700;
  font-size: ${pxToRem(24)};
  color: ${PRIMARY_800};
`;

export default React.memo(TitleList);
