import React, { useState } from 'react';
import styled from 'styled-components';
import FilterButtonComponent from './ButtonComponents/FilterButtonComponent';
import ReservationButton from './ButtonComponents/ReservationButton';
import MySlider from './MySlider';

function Search({ setOneFilter, setPrice, setReservation }) {
  return (
    <SearchContainer>
      <MySlider setPrice={setPrice} />
      <TypeContainer>
        <FilterTitle>Typ karavanu</FilterTitle>
        <ButtonContainer>
          <FilterButtonComponent type='Campervan' setOneFilter={setOneFilter} />
          <FilterButtonComponent type='BuiltIn' setOneFilter={setOneFilter} />
          <FilterButtonComponent
            type='Intergrated'
            setOneFilter={setOneFilter}
          />
          <FilterButtonComponent type='Alcove' setOneFilter={setOneFilter} />
        </ButtonContainer>
      </TypeContainer>
      <ReservationButton setReservation={setReservation} />
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  background: #ffff;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #edeae3;

  @media (max-width: 400px) {
    justify-content: left;
    padding: 0 0 16px 16px;
    flex-wrap: wrap;
  }
`;

const TypeContainer = styled.div`
  width: 704px;
  border-right: 1px solid #edeae3;
  padding: 16px;

  @media (max-width: 400px) {
    padding-left: unset;
  }
`;

const FilterTitle = styled.div`
  height: 32px;
  font: normal normal normal 16px/16px Roboto, sans-serif;
  color: #9c8c8c;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
