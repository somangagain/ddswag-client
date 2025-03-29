import React from 'react';
import styled from 'styled-components';

// components
import MainResponsive from '@components/main/MainResponsive';
import HeaderLogo from './HeaderLogo';

export type HeaderProps = {
};

function Header({  }: HeaderProps) {
  return (
    <Block>
      <Inner>
        <HeaderLogo/>
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export default Header;