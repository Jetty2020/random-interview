import { CATEGORIES } from '@constants/categories';
import styled from '@emotion/styled';
import { pxToRem } from '@utils/pxToRem';
import React from 'react';
import Category from './Category';

interface ListCategoryProps {
  selection: boolean[];
  categoryClick: (index: number) => () => void;
}

const ListCategory = ({ selection, categoryClick }: ListCategoryProps) => {
  return (
    <CategoryContainer>
      {CATEGORIES.map((category, index) => (
        <Category
          key={category}
          category={category}
          isSelected={selection[index]}
          isActive={selection.some((isSelected) => isSelected)}
          handleClick={categoryClick(index)}
        />
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.ul`
  max-width: ${pxToRem(300)};
  padding: ${pxToRem(10)};
`;

export default React.memo(ListCategory);
