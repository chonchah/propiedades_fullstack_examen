import React from 'react';

import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Wrapper = styled.div`
  position: absolute;
  transform: translate(-30px, -30px) !important;
  width: 32px;
  height: 32px;
  background-color: #ff0000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = ({ text, onClick }) => (
  <Card style={{'width':'300px'}}>
    <Card.Body>
      <Wrapper alt={text} onClick={onClick}></Wrapper>
      <Card.Title>{text}</Card.Title>
    </Card.Body>
  </Card>
);



export default Marker;