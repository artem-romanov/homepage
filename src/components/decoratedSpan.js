import React from 'react';
import styled from 'styled-components';

export default styled.span`
  color: ${({ red }) => red ? 'red' : 'black'};
`;
