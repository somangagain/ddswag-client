import React from 'react';
import styled from 'styled-components';

function HomeBanner() {
  return (
    <Block>
      Meow
    </Block>
  );
}

const Block = styled.div`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

export default HomeBanner;