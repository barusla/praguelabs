import React, { useState } from 'react';
import styled from 'styled-components';

function LoadMoreButton({ loadAll }) {
  const [show, setShow] = useState(true);

  const changeText = () => {
    loadAll();
    setShow(!show);
  };

  return (
    <LoadMoreContainer onClick={changeText}>
      {show ? (
        <ButtonText>Načíst další</ButtonText>
      ) : (
        <ButtonText>Skrýt další</ButtonText>
      )}
    </LoadMoreContainer>
  );
}

export default LoadMoreButton;

const LoadMoreContainer = styled.button`
  width: 155px;
  height: 48px;
  background: #119383;
  border-radius: 8px;
  align-self: center;
  margin: 48px 0 48px 0;
`;
const ButtonText = styled.div`
  font-size: 16px;
  color: #ffffff;
`;
