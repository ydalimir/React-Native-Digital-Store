import React from 'react';
// Fake component
import styled from 'styled-components/native';
import type { Node } from 'react';

type TDotIndex = {
  checkedIndex: Number;
};

const Dots = ({ checkedIndex }: TDotIndex): Node => {
  return (
    <DotsContainer>
      <Dot index={0} checkedIndex={checkedIndex} />
      <Dot index={1} checkedIndex={checkedIndex} />
      <Dot index={2} checkedIndex={checkedIndex} />
    </DotsContainer>
  );
};
Dots.defaultProps = {
  checked: 0,
};
const DotsContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  height: 25px;
  width: 50px;
  flex-direction: row;
`;

const Dot = styled.View`
  height: ${(props) => (props.index === props.checkedIndex ? 10 : 6)};
  width: ${(props) => (props.index === props.checkedIndex ? 10 : 6)};
  background-color: #fff;
  opacity: ${(props) => (props.index === props.checkedIndex ? 1 : 0.5)};
  border-radius: 25;
`;

export default Dots;
