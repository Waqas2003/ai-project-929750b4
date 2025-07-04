import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 h-screen flex justify-center items-center">
      <nav className="flex justify-between items-center py-4">
        <a href="#" className="text-lg font-bold text-white">
          Pakistan Atomic Power
        </a>
        <ul className="flex justify-between items-center">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;