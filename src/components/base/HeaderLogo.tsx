import React from 'react';
import styled from 'styled-components';


function HeaderLogo() {
  return (
    <Block>
      <Logo>
        Daedan SWAG
      </Logo>
      <Vision>
        실력을 향상하고 교류를 촉진한다
      </Vision>
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

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`

const Vision = styled.div`
  font-weight: 500;
  font-size: 1rem;
  
  color: var(--gray5);
  opacity:0.75;
`

export default HeaderLogo;