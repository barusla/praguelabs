import React from 'react';
import styled from 'styled-components';

function CaravanComponent(caravan, idx) {
  return (
    <CaravanContainer key={idx}>
      <CaravanImage src={caravan.pictures[0]} />
      <CaravanDescription>
        <CaravanType>{caravan.vehicleType}</CaravanType>
        <CaravanName>{caravan.name}</CaravanName>
        <CaravanLocation>{caravan.location}</CaravanLocation>
        <InfoLine>
          <CaravanIcons>
            <img src={'/images/iconPassenger.svg'} />{' '}
            {caravan.passengersCapacity}
          </CaravanIcons>
          <CaravanIcons>
            <img src={'/images/iconBed.svg'} /> {caravan.sleepCapacity}
          </CaravanIcons>
          {caravan.toilet ? (
            <CaravanIcons>
              <img src={'/images/iconToilet.svg'} />
            </CaravanIcons>
          ) : (
            <div />
          )}
          {caravan.shower ? (
            <CaravanIcons>
              <img src={'/images/iconShower.svg'} />
            </CaravanIcons>
          ) : (
            <div />
          )}
        </InfoLine>
        <CaravanPrice>
          Cena od
          <StrongPrice>
            {caravan.price} Kč/den{' '}
            {caravan.instantBookable ? (
              <img src={'/images/iconReservation.svg'} />
            ) : (
              <div></div>
            )}
          </StrongPrice>
        </CaravanPrice>
      </CaravanDescription>
    </CaravanContainer>
  );
}

export default CaravanComponent;

const CaravanContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #edeae3;
  border-radius: 8px;
  width: calc((100% - 32px) / 3);

  @media (max-width: 400px) {
    justify-content: center;
    flex-wrap: wrap;
    width: calc(100% - 32px);
  }
`;

const CaravanImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CaravanDescription = styled.section`
  padding: 16px;
  font-size: 16px;
  line-height: 16px;
  bottom: 0;
`;

const CaravanType = styled.header`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1px;
  color: #ff5e55;
  text-transform: uppercase;
`;

const CaravanName = styled.header`
  height: 32px;
  margin-top: 10px;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  color: #1f2244;
  border-bottom: 1px solid #edeae3;
`;

const CaravanLocation = styled.header`
  color: #1f2244;
  padding: 13px 0 13px 0;
`;
const InfoLine = styled.div`
  display: flex;
  justify-content: left;
  border-bottom: 1px solid #edeae3;
  padding-bottom: 14px;
`;

const CaravanIcons = styled.header`
  color: #1f2244;
  padding-right: 14px;
`;

const CaravanPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: #9c8c8c;
  padding: 17px 0 17px 0;
`;

const StrongPrice = styled.header`
  text-align: right;
  font: normal normal bold 16px/16px Roboto, sans-serif;
  letter-spacing: 0px;
  color: #1f2244;
`;
