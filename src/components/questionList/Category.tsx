import {
  BLACK,
  PRIMARY_100,
  PRIMARY_400,
  PRIMARY_500,
  WHITE,
} from '@constants/colors';
import styled from '@emotion/styled';
import { pxToRem } from '@utils/pxToRem';
import React from 'react';

interface CategoryProps {
  category: string;
  isSelected: boolean;
  isActive: boolean;
  handleClick: () => void;
}

const Category = ({
  category,
  isSelected,
  isActive,
  handleClick,
}: CategoryProps) => {
  return (
    <ItemCategory>
      <ButtonCategory
        isSelected={isSelected}
        isActive={isActive}
        onClick={handleClick}
      >
        {category}
      </ButtonCategory>
    </ItemCategory>
  );
};

interface ButtonCategoryProps {
  isSelected: boolean;
  isActive: boolean;
}

const ItemCategory = styled.li`
  max-width: ${pxToRem(250)};
  height: ${pxToRem(60)};
  margin: 0 auto;
`;

const ButtonCategory = styled.button<ButtonCategoryProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ isSelected }) => (isSelected ? PRIMARY_400 : WHITE)};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  font-size: ${pxToRem(24)};
  color: ${({ isSelected }) => (isSelected ? WHITE : BLACK)};
  opacity: ${({ isSelected, isActive }) => {
    if (isActive && !isSelected) {
      return 0.3;
    }
    return 1;
  }};
  transition: opacity 0.2s;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? PRIMARY_500 : PRIMARY_100};
    opacity: 1;
  }
`;

export default React.memo(Category);
