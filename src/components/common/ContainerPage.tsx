import styled from '@emotion/styled';
import React from 'react';
import { pxToRem } from '@utils/pxToRem';

interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage = ({ children }: ContainerPageProps) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};

const Container = styled.div`
  max-width: ${pxToRem(1140)};
  margin: 0 auto;
`;

export default ContainerPage;
