import "./App.css";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="badan">
      <Link  className="scrolltop" id="scroll-top" to="/">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </Link>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="Logreg.html" className="nav__logo">
            Pandora
          </a>
          <div className="nav__menu show-menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link active-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacts">
                  Contact us
                </Link>
              </li>
              <li>
                <i className="bx bx-moon change-theme" id="theme-button"></i>
              </li>
            </ul>
          </div>
          <div className="nav-toggle" id="nav_toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
