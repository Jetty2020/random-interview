import styled from '@emotion/styled';
import React from 'react';
import { CATEGORIES } from '@constants/categories';
import { pxToRem } from '@utils/pxToRem';
import Category from './Category';

interface ListCategoryProps {
  selection: boolean[];
  categoryClick: (index: number) => () => void;
}

const ListCategory = ({ selection, categoryClick }: ListCategoryProps) => {
  return (
    <Container>
      {CATEGORIES.map((category, index) => (
        <Category
          key={category}
          category={category}
          isSelected={selection[index]}
          isActive={selection.some((isSelected) => isSelected)}
          handleClick={categoryClick(index)}
        />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  max-width: ${pxToRem(300)};
  padding: ${pxToRem(10)};
`;

export default React.memo(ListCategory);
