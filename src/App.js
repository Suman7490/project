
import './App.css';
import './index.css'
import Home from './Home'
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;


function App() {
  const [cursorStyle, setCursorStyle] = useState({
    width: '20px',
    height: '20px',
    transform: 'translate(-50%, -50%) scale(1)',
  });

  const handleMouseMove = (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {  // Ensure the cursor element exists
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  };

  const handleMouseEnter = () => {
    setCursorStyle((prevStyle) => ({
      ...prevStyle,
      transform: 'translate(-50%, -50%) scale(2)',
    }));
  };

  const handleMouseLeave = () => {
    setCursorStyle((prevStyle) => ({
      ...prevStyle,
      transform: 'translate(-50%, -50%) scale(1)',
    }));
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
 <div className="App">
      <div className="hover-area" onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
        <Title>Title</Title>
      </div>
      <div className="custom-cursor" style={cursorStyle}></div>
      
    </div>
    </>
  );
}

export default App;
