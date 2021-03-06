import styled from '@emotion/styled';
import React from 'react';
import { nanoid } from 'nanoid';
import { CATEGORIES } from '@constants/categories';
import { pxToRem } from '@utils/pxToRem';
import Category from './Category';
import TitleList from './TitleList';

interface ListCategoryProps {
  selection: boolean[];
  categoryClick: (index: number) => () => void;
}

export const ListCategory = React.memo(function ListCategory({
  selection,
  categoryClick,
}: ListCategoryProps) {
  return (
    <Container>
      <WrapperSticky>
        <TitleList>카테고리</TitleList>
        <ul>
          {CATEGORIES.map((category, index) => (
            <Category
              key={`Category-${nanoid()}`}
              category={category}
              isSelected={selection[index]}
              isActive={selection.some((isSelected) => isSelected)}
              handleClick={categoryClick(index)}
            />
          ))}
        </ul>
      </WrapperSticky>
    </Container>
  );
});

const Container = styled.div`
  max-width: ${pxToRem(220)};
  padding: ${pxToRem(10)};
  margin-right: ${pxToRem(50)};
`;

const WrapperSticky = styled.div`
  position: sticky;
  top: ${pxToRem(80)};
`;
