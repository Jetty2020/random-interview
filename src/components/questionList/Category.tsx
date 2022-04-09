import styled from '@emotion/styled';
import React from 'react';
import {
  BLACK,
  PRIMARY_100,
  PRIMARY_400,
  PRIMARY_500,
  WHITE,
} from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';

interface CategoryProps {
  category: string;
  isSelected: boolean;
  isActive: boolean;
  handleClick: () => void;
}

interface ButtonProps {
  isSelected: boolean;
  isActive: boolean;
}

const Category = ({
  category,
  isSelected,
  isActive,
  handleClick,
}: CategoryProps) => {
  return (
    <Item>
      <Button isSelected={isSelected} isActive={isActive} onClick={handleClick}>
        {category}
      </Button>
    </Item>
  );
};

const Item = styled.li`
  height: ${pxToRem(60)};
  margin: 0 auto;
`;

const Button = styled.button<ButtonProps>`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: ${pxToRem(20)};
  border-top: 6px solid ${WHITE};
  background-color: ${({ isSelected }) => (isSelected ? PRIMARY_400 : WHITE)};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  font-size: ${pxToRem(24)};
  text-align: left;
  color: ${BLACK};
  opacity: ${({ isSelected, isActive }) => {
    if (isActive && !isSelected) {
      return 0.3;
    }
    return 1;
  }};
  transition: opacity 0.2s,
    font-size 0.1s
      ${({ isSelected }) => isSelected && ', background-color 0.3s'};

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    border-left: 12px solid transparent;
    border-bottom: 12px solid ${WHITE};
  }

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? PRIMARY_500 : PRIMARY_100};
    opacity: 1;
  }
`;

export default React.memo(Category);
