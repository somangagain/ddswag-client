import React from 'react';
import styled from 'styled-components';

// icons
import { 
  Home,  
  Info, 
  Pencil, 
  Calendar, 
  Users, 
  FolderOpen, 
  UserPlus 
} from 'lucide-react';

// components
import MainResponsive from '@components/main/MainResponsive';
import HeaderLogo from './HeaderLogo';
import HeaderLink from './HeaderLink';

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
          <HeaderLink to="/" icon={Home} label="홈" />
          <HeaderLink to="/" icon={Info} label="소개" />
          <HeaderLink to="/" icon={Pencil} label="블로그" />
          <HeaderLink to="/" icon={Calendar} label="일정" />
          <HeaderLink to="/" icon={Users} label="그룹" />
          <HeaderLink to="/" icon={FolderOpen} label="자료실" />
          <HeaderLink to="/" icon={UserPlus} label="회원가입" />
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




export default Header;