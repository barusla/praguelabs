import styled from 'styled-components';

export const Caravans = styled.div`
  margin-top: 50px;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const CaravansSection = styled.div`
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
