import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { GRAY_100, GRAY_200, GRAY_500, GRAY_700 } from '@constants/colors';
import { pxToRem } from '@utils/pxToRem';
import { PAGE_MAX } from '@constants/pagination';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage: number;
}

interface ButtonNumberProps {
  selected: boolean;
}

interface ButtonArrowProps {
  disabled: boolean;
}

const Pagination = ({ page, setPage, lastPage }: PaginationProps) => {
  const handleMoveToPrevPage = useCallback(() => {
    setPage((page) =>
      page > PAGE_MAX
        ? Math.floor((page - 1) / PAGE_MAX - 1) * PAGE_MAX + 1
        : page,
    );
  }, []);

  const handleMoveToNextPage = useCallback(() => {
    setPage((page) =>
      Math.ceil(page / PAGE_MAX) < Math.ceil(lastPage / PAGE_MAX)
        ? Math.ceil(page / PAGE_MAX) * PAGE_MAX + 1
        : page,
    );
  }, [lastPage]);

  return (
    <Container>
      <ButtonArrow disabled={page <= PAGE_MAX} onClick={handleMoveToPrevPage}>
        {'<'}
      </ButtonArrow>
      {[...Array(lastPage)]
        .map((_, i) => (
          <ButtonNumber
            key={`PageNumber-${i + 1}`}
            selected={page === i + 1}
            onClick={() => {
              setPage(() => i + 1);
            }}
          >
            {i + 1}
          </ButtonNumber>
        ))
        .slice(
          Math.floor((page - 1) / PAGE_MAX) * PAGE_MAX,
          Math.floor((page - 1) / PAGE_MAX + 1) * PAGE_MAX,
        )}
      <ButtonArrow
        disabled={Math.ceil(page / PAGE_MAX) >= Math.ceil(lastPage / PAGE_MAX)}
        onClick={handleMoveToNextPage}
      >
        {'>'}
      </ButtonArrow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(10)};
  height: ${pxToRem(60)};
  margin-top: ${pxToRem(20)};
`;

const ButtonNumber = styled.button<ButtonNumberProps>`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: 50%;
  font-size: ${pxToRem(16)};
  color: ${GRAY_700};

  ${({ selected }) =>
    selected
      ? `background-color: ${GRAY_200};`
      : `&: hover {
        background-color: ${GRAY_100};`}
`;

const ButtonArrow = styled.button<ButtonArrowProps>`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: 50%;
  font-size: ${pxToRem(16)};
  color: ${GRAY_500};
  ${({ disabled }) =>
    disabled
      ? 'cursor: not-allowed;'
      : `&: hover {
      background-color: ${GRAY_100};
      }`}
`;

export default React.memo(Pagination);
