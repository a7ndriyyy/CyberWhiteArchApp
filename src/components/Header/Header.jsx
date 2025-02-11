import React from 'react';
import {
    HeaderContainer,
    LeftSection,
    Nav,
    RightSection,
    NavLink,
    Dropdown,
    DropdownContent
  } from './Header.styled';
import AboutUs from '../AboutUs';
import  Home from '../HomePage/Home';
// import Logo from '../Logo/Logo';



const HeaderComponent = () => {
    return (
        <HeaderContainer>
          {/* Left Section */}
          <LeftSection>
            <NavLink href="/account">Your Account</NavLink>
          </LeftSection>
    
          {/* Center Navigation */}
          <Nav>
            <NavLink href="/Home" component={<Home />}>Home</NavLink>
            <NavLink href="/about-us" component={<AboutUs />}>About Us</NavLink>
            <NavLink href="/community">Community</NavLink>
            <Dropdown>
              <NavLink href="/tools">Tools</NavLink>
              <DropdownContent>
                <a href="/tools/doc">Docs</a>
                <a href="/tools/link">Links</a>
                <a href="/tools/courses">Courses</a>
              </DropdownContent>
            </Dropdown>
          </Nav>
    
          {/* Right Section */}
          <RightSection>
            <p>Logo</p>
            {/* <Logo></Logo> */}
          </RightSection>
        </HeaderContainer>
    );
};

export default HeaderComponent; 