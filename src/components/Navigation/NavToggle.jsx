import React from 'react';
import { useState } from 'react';
import Navbar from './/Navbar';
import Sidebar from './/Sidebar';

const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default NavToggle;
