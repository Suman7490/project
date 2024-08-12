import React from 'react';
import styled from 'styled-components';
import ScrollableDiv from './style';


const Button = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
`;


const Home = () => {
  return (
    <>
        <div style={{height: '1500px'}}>
        <Button>Click Me</Button>
        </div>
    </>
  )
}

export default Home

