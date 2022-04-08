import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '@utils/pxToRem';
import IconSearch from '@assets/icon/search.svg';
import { GRAY_300, PRIMARY_800 } from '@constants/colors';

export const SearchBar = React.memo(function SearchBar() {
  const [value, setValue] = useState<string>('');

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return (
    <Container>
      <Input
        placeholder="키워드로 검색하기"
        value={value}
        onChange={handleChange}
      />
      <Icon />
    </Container>
  );
});

const Container = styled.form`
  position: relative;
  height: ${pxToRem(50)};
  padding: 0 ${pxToRem(30)};
  margin-bottom: ${pxToRem(40)};
`;

const Icon = styled(IconSearch)`
  position: absolute;
  top: ${pxToRem(10)};
  left: ${pxToRem(40)};
  transform: scale(150%);
  fill: ${GRAY_300};
`;

const Input = styled.input`
  width: 100%;
  padding: 0 0 ${pxToRem(16)} ${pxToRem(50)};
  border: none;
  border-bottom: ${pxToRem(1)} solid ${GRAY_300};
  font-size: ${pxToRem(32)};

  &:focus {
    outline: none;
    border-bottom-color: ${PRIMARY_800};
  }

  &:focus + svg {
    fill: ${PRIMARY_800};
  }

  &::placeholder {
    color: ${GRAY_300};
  }
`;
