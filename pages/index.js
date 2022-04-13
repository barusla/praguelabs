import React from 'react';
import styled from 'styled-components';
import Navbar from '../src/components/Navbar';
import CaravansPage from '../src/pages/CaravansPage';

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />
      <CaravansPage />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default Home;
