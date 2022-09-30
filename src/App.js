import './App.css';
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Components/sidebar';
import TextContainer from './Components/textContainer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-image: url('bg.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);;
    }
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar/>
        <TextContainer/>
      </Container>
    </div>
  );
}

export default App;
