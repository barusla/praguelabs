import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <img src={'/images/pragueLabslogo.svg'} />
      </NavbarLogo>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #edeae3;
`;
const NavbarLogo = styled.div`
  width: 1240px;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 400px) {
    justify-content: center;
  }
`;
