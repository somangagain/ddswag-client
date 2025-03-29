import React from 'react';
import styled from 'styled-components';

// components
import MainResponsive from '@components/main/MainResponsive';
import HeaderLogo from './HeaderLogo';

export type HeaderProps = {
};

function Header({  }: HeaderProps) {
  return (
    <Container>
      <SectionTop>
        <Block>
          <HeaderLogo />
        </Block>
      </SectionTop>
      <SectionDown>
        <Block>
          <Link>홈</Link>
          <Link>소개</Link>
          <Link>일정</Link>
          <Link>그룹</Link>
          <Link>자료실</Link>
          <Link>회원가입</Link>
        </Block>
      </SectionDown>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTop = styled.div`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  
  background: var(--primaryD1);
  color: white;
`;

const SectionDown = styled.div`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  
  background: var(--primary);
  color: white;
`;

const Block = styled(MainResponsive)`
  display: flex;

  justify-content: center;
`;

const Link = styled.div`
  font-weight: 700;

  & + & {
    margin-left: 0.75rem;
  }
  `


export default Header;