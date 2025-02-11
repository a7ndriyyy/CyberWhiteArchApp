import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Register from '../Signup/Register';|

import {
  Container,
  VSCodeContainer,
  TopBar,
  Dot,
  Editor,
  Code,
  RegisterButton,
} from './Home.styled';


const Home = () => {
  const [showRegister, setShowRegister] = useState(false);

    // const navigate = useNavigate();

    const handleRegister = () => {
      setShowRegister(true);
      // navigate('/register');
    };
  
    return (
      <Container>
        {showRegister ? (
        <Register />
      ) : (
        <>
        <VSCodeContainer>
          {/* VS Code-like UI */}
          <TopBar>
          <Dot color="#1ed760" />
          <Dot color="#f2d94e" />
          <Dot color="#e04f5f" />
          </TopBar>
          <Editor>
            <Code>
            {`import HackTools from 'CyberArch';\n \n function hackTheWorld() {\n              console.log("Welcome to the Matrix");\nreturn "You're in!";\n}\n\nhackTheWorld();`}
            </Code>
          </Editor>
        </VSCodeContainer>
        <RegisterButton onClick={handleRegister}>Enter the System</RegisterButton>
        </>
      )}
      </Container>
  );
};

export default Home;