import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

/**
 * Fixed navigation bar with smooth-scroll links and theme toggle.
 * @param {{sections: {id: string, label: string}[], activeSection: string, onNavigate: (id: string) => void, theme: 'light'|'dark', onToggleTheme: () => void}} props
 */
const Navbar = ({ sections, activeSection, onNavigate, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="logo" onClick={() => handleNavigate('home')}>
          Diwakar<span>•AI</span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleNavigate(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

