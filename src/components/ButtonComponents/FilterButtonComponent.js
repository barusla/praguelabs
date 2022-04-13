import React, { useState } from 'react';
import styled from 'styled-components';

function FilterButtonComponent({ type, setOneFilter }) {
  const [click, setClick] = useState(true);
  const buttonData = {
    Campervan: {
      name: 'Campervan',
      description: 'Obytka s rozměry osobáku, se kterou dojedete všude.',
    },
    BuiltIn: {
      name: 'Vestavba',
      description: 'Celý byt geniálně poskládaný do dodávky.',
    },
    Intergrated: {
      name: 'Integrál',
      description: 'Král mezi karavany. Luxus na kolech.',
    },
    Alcove: {
      name: 'Přívěs',
      description: 'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.',
    },
  };

  const handleClick = () => {
    setClick(!click);
    setOneFilter(type, click);
  };

  return (
    <FilterButton isClicked={!click} onClick={handleClick}>
      <ButtonTitle>{buttonData[type].name}</ButtonTitle>
      <ButtonDescription>{buttonData[type].description}</ButtonDescription>
    </FilterButton>
  );
}

export default FilterButtonComponent;

const FilterButton = styled.button`
  background: #ffffff;
  border: 1px solid #edeae3;
  border-radius: 8px;
  height: 88px;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  padding: 10px;

  ${({ isClicked }) =>
    isClicked &&
    `
      background: #ffffff;
      border: 2px solid #119383;
      border-radius: 8px;
    `};
`;

const ButtonTitle = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
  color: #1f2244;
`;

const ButtonDescription = styled.div`
  color: #9c8c8c;
  font-size: 12px;
  line-height: 14px;
`;
