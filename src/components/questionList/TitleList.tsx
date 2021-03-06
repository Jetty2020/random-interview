import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import { GRAY_100, PRIMARY_800, WHITE } from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';

interface TitleListProps {
  sticky?: boolean;
  children: string;
}

interface TitleProps {
  sticky?: boolean;
}

const TitleList = ({ sticky, children }: TitleListProps) => {
  return <Title sticky={sticky}>{children}</Title>;
};

const Title = styled.p<TitleProps>`
  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: ${pxToRem(80)};
    `}
  z-index: 20;
  box-sizing: border-box;
  padding: ${pxToRem(27, 0, 27, 20)};
  margin-bottom: ${pxToRem(20)};
  border-bottom: ${pxToRem(2)} solid ${GRAY_100};
  background-color: ${WHITE};
  font-weight: 700;
  font-size: ${pxToRem(24)};
  color: ${PRIMARY_800};
`;

TitleList.defaultProps = {
  sticky: false,
};

export default React.memo(TitleList);
