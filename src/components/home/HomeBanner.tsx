import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const HomeBanner: React.FC = () => {
  return (
    <Block>
      <Headline>우리의 소프트웨어를 대단하게</Headline>
      <StatsGrid>
        <StatCard>
          <StatNumber><CountUp start={0} end={56} duration={1} /></StatNumber>
          <StatLabel>회원 수</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={24} duration={1.75} /></StatNumber>
          <StatLabel>세미나 횟수</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={37} duration={2.5} /></StatNumber>
          <StatLabel>완료한 과제 수</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp start={0} end={1248} duration={3.25} /></StatNumber>
          <StatLabel>푼 문제 수</StatLabel>
        </StatCard>
      </StatsGrid>
    </Block>
  );
};

const Block = styled.section`
  padding: 3rem 1.5rem;
  
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