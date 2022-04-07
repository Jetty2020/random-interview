import styled from '@emotion/styled';
import React from 'react';

interface WrapperProps {
  children: React.ReactElement[];
}

export const WrapperQuestion = React.memo(function WrapperQuestion({
  children,
}: WrapperProps) {
  return <Flex>{children}</Flex>;
});

const Flex = styled.div`
  display: flex;

  & > * {
    flex: 1;
  }
`;
