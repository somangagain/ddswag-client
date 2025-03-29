import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const HomeBanner: React.FC = () => {
  return (
    <Block>
      <Headline>우리의 소프트웨어를 대단하게</Headline>
      <StatsGrid>
        <StatCard>
          <StatNumber><CountUp start={0} end={56} duration={2} /></StatNumber>
          <StatLabel>등록된 회원</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={24} duration={2} /></StatNumber>
          <StatLabel>등록된 그룹</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={68} duration={2} /></StatNumber>
          <StatLabel>완료된 세미나</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={379} duration={2} /></StatNumber>
          <StatLabel>완료된 과제</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={198} duration={2} /></StatNumber>
          <StatLabel>해결된 질문</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={1248} duration={2} /></StatNumber>
          <StatLabel>해결된 문제</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={1119} duration={2} /></StatNumber>
          <StatLabel>솔브드 절사평균</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={987} duration={2} /></StatNumber>
          <StatLabel>코포 절사평균</StatLabel>
        </StatCard>
      </StatsGrid>
    </Block>
  );
};

const Block = styled.section`
  padding: 3rem 1rem;
  
  text-align: center;

  background-color: var(--gray2);
`;

const Headline = styled.h2`
  margin-bottom: 1.5rem;

  font-size: 1.75rem;
  font-weight: 700;
`;

const StatsGrid = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

const StatCard = styled.div`
  padding: 1.25rem;

  background-color: white;
  border-radius: 15px;
`;

const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
`;

const StatLabel = styled.div`
  margin-top: 0.25rem;

  font-weight: 500;

  color: var(--gray5);
`;

export default HomeBanner;