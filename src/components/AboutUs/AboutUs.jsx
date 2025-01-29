import React, { useState } from 'react';
import { Container,Summary,SummaryItem,Content } from './AboutUs.styled';

const AboutUs = () => {
    const [activeSection, setActiveSection] = useState('introduction');
  
    const sections = {
      introduction: 'This is the introduction text about your app...',
      history: 'Here, you can write about the history of your app...',
      mission: 'This section can include your app\'s mission statement...',
      team: 'Meet the team behind the app...'
    };
  
    return (
      <Container>
        <Summary>
          {Object.keys(sections).map((section) => (
            <SummaryItem key={section} onClick={() => setActiveSection(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </SummaryItem>
          ))}
        </Summary>
        <Content>
          {sections[activeSection]}
        </Content>
      </Container>
    );
  };
  
  export default AboutUs;