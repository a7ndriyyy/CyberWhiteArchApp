
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerAbout = styled.div`
    display: flex;
  flex-direction: column;
  background-color:rgb(0, 0, 0); /* Dark background for hacker vibe */
  color:rgb(235, 240, 241); /* Light blue text for hacker aesthetic */
`;

export const Menu = styled.ul`
   heigth:86vh;
  margin-left: 0;
  padding: 16px;
  list-style: none;
`;

export const Item = styled.li`
  margin-left: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  &.tab {
    padding-left: 24px;
  }
`;

export const AboutLink = styled(NavLink)`
  color: #607b96;
  font-size: 16px;
  font-weight: 400;
`;