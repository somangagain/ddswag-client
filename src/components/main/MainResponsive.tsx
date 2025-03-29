import React from 'react';
import styled from 'styled-components';

export type MainResponsiveProps = {
  children: React.ReactNode;
  className?: string;
};

function MainResponsive({ children, className }: MainResponsiveProps) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.div`
  width: 1800px;
  margin-left: auto;
  margin-right: auto;
`;

export default MainResponsive;