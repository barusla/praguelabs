import React from 'react';
import styled from 'styled-components';

function ReservationButton({ setReservation }) {
  return (
    <SelectContainer>
      <SelectLabel>
        Okamžitá rezervace
        <img src={'/images/iconReservation.svg'} />
      </SelectLabel>
      <SelectButton onChange={setReservation} defaultValue={'Ne'}>
        <option value='Ano'>Ano</option>
        <option value={'Ne'}>Ne</option>
      </SelectButton>
    </SelectContainer>
  );
}

export default ReservationButton;

const SelectContainer = styled.div`
  padding: 16px 0 16px 16px;

  @media (max-width: 400px) {
    padding-left: unset;
  }
`;

const SelectLabel = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #9c8c8c;
`;

const SelectButton = styled.select`
  width: 176px;
  justify-content: center;
  background: transparent;

  height: 48px;
  border: 1px solid #edeae3;
  border-radius: 8px;

  font-size: 16px;
  color: #1f2244;
  padding-left: 12px;
  margin-top: 12px;

  option {
    padding-left: 12px;
    color: #1f2244;
  }
`;
