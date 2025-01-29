import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav>
      <NavLink to="/Home" />

      <NavLink to="/about-us" />

      <NavLink to="/community" />
      {/* <Dropdown>
      <NavLink href="/tools"></NavLink>
                <DropdownContent>
                  <a href="/tools/doc">Docs</a>
                  <a href="/tools/link">Links</a>
                  <a href="/tools/courses">Courses</a>
                </DropdownContent>

        </Dropdown> */}
    </nav>
  );
}