import styled from 'styled-components';
import ReactSlider from 'react-slider';

export const FilterTitle = styled.div`
  height: 32px;
  font-size: 16px;
  line-height: 16px;
  color: #9c8c8c;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 170px;
  width: 344px;
  border-right: 1px solid #edeae3;
  padding: 16px 16px 16px 0;

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    border-right: none;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 320px;
  height: 4px;
`;

export const StyledThumb = styled.div`
  height: 24px;
  line-height: 4px;
  width: 24px;
  background-color: #119383;
  border-radius: 50%;
  cursor: grab;
  margin-top: -10px;
`;

export const Thumb = (props) => <StyledThumb {...props}></StyledThumb>;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 156px;
  border: 1px solid #edeae3;
  padding-right: 12px;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 80px;
  padding-left: 8px;
  border: none;
  font-size: 16px;
  letter-spacing: 0px;
  color: #1f2244;
`;

export const InputCurrency = styled.div`
  text-align: right;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;
`;
export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? '#EDEAE3' : props.index === 1 ? '#119383' : '#EDEAE3'};
  border-radius: 999px;
`;

export const Track = (props, state) => (
  <StyledTrack {...props} index={state.index} />
);
