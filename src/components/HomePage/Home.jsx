import React, { useState } from 'react';
import Register from '../Signup/Register';
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
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    setShowRegister(true);
  };

  const handleLoginSuccess = (token) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to Your Account</h2>
          <p>Your token: {token}</p>
        </div>
      ) : (
        showRegister ? (
          <Register onLoginSuccess={handleLoginSuccess} />
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
        )
      )}
    </Container>
  );
};

export default Home;
