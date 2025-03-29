import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { LucideIcon } from 'lucide-react';

interface HeaderLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, icon: Icon, label }) => {
  return (
    <Block>
      <StyledLink to={to}>
        <StyledIcon as={Icon} />
        <Label>{label}</Label>
      </StyledLink>
    </Block>
  );
};

const Block = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-left: 0.75rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem; /* text-sm */
  text-decoration: none;
  color: inherit;

  @media (min-width: 640px) {
    flex-direction: row;
    font-size: 1rem; /* text-base */
  }
`;

const StyledIcon = styled.div`
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.25rem;
  vertical-align: middle;

  @media (min-width: 640px) {
    margin-bottom: 0;
    margin-right: 0.25rem;
  }
`;

const Label = styled.span``;

export default HeaderLink;
