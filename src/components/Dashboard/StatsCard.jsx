import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #f3f4f6;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  background: ${props => props.color}15;
`;

const Value = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

const Title = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const StatsCard = ({ title, value, color, icon }) => {
  return (
    <Card>
      <Header>
        <div>
          <Value>{value}</Value>
          <Title>{title}</Title>
        </div>
        <Icon color={color}>
          {icon}
        </Icon>
      </Header>
    </Card>
  );
};

export default StatsCard;