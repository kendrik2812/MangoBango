import React, { useState } from 'react';
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="navbar">
        <div>
            MangoBango
        </div>
    </div>
  );
}

export default Navbar;