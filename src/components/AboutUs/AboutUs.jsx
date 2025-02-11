import React from 'react';
import { AboutLink, Item, Menu , ContainerAbout } from "./AboutUs.styled";

import {
  FaFolder,
  FaFileCode,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <ContainerAbout>
    <Menu>
      <Item>
        <FaChevronRight color="#21a1f1" />
        <FaFolder color="#21a1f1" />
        <AboutLink to="">bio</AboutLink>
      </Item>
      <Item>
        <FaChevronRight color="#81A1C1" />
        <FaFolder color="#43D9AD" />
        <AboutLink to="work">work</AboutLink>
      </Item>
      <Item>
        <FaChevronRight color="#00ff00" />
        <FaFolder color="#00ff00" />
        <AboutLink to="interests">History</AboutLink>
      </Item>
      <Item>
        <FaChevronDown color="#00ff00" />
        <FaFolder color="#00ff00" />
        <AboutLink to="university">education</AboutLink>
      </Item>
      <Item className="tab">
        <FaFileCode color="#21a1f1" />
        <AboutLink to="certifications">certifications</AboutLink>
      </Item>
    </Menu>
    </ContainerAbout>
  );
};

export default AboutUs;