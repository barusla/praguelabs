import React, { useState } from 'react';

import {
  FilterTitle,
  Input,
  InputContainer,
  InputCurrency,
  SliderContainer,
  StyledSlider,
  Thumb,
  Track,
} from './mySliderElements.js';

function MySlider({ setPrice }) {
  const [sliderValue, setSliderValue] = useState([100, 10000]);

  const changePrice = (priceArray) => {
    setSliderValue(priceArray);
    setPrice(priceArray);
  };

  return (
    <SliderContainer>
      <FilterTitle>Cena za den</FilterTitle>
      <StyledSlider
        min={100}
        max={10000}
        value={sliderValue}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value, index) => changePrice(value)}
      />
      <InputContainer>
        <Input
          value={sliderValue[0]}
          onChange={(e) => {
            changePrice([e.target.value, sliderValue[1]]);
          }}
        ></Input>
        <InputCurrency>Kč</InputCurrency>
      </InputContainer>
      <InputContainer>
        <Input
          value={sliderValue[1]}
          onChange={(e) => {
            changePrice([sliderValue[0], e.target.value]);
          }}
        ></Input>
        <InputCurrency>Kč</InputCurrency>
      </InputContainer>
    </SliderContainer>
  );
}

export default MySlider;
