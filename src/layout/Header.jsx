import React from 'react';

function Header() {
  return (
    <header className="epic-header">
      <div className="logo">
        <a href="/">LOGO</a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;