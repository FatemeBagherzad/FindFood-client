import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/img/findfood-logo.png';
import menu from '../../assets/Icons/menu.png';
import { useState } from 'react';
import close from '../../assets/Icons/close-24px.svg';

const Header = () => {
  const [menuList, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menuList);
  };
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          alt="Omnifood logo"
          src={logo}
          onClick={() => navigate(`/`)}
        />

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li
              className="header__nav-list-link"
              onClick={() => navigate(`/how`)}
            >
              How it works
            </li>
            <li className="header__nav-list-link header__nav-list-cta">
              TRY IT!
            </li>
          </ul>
        </nav>

        <button className="header__mobileIcn" onClick={handleMenu}>
          <img alt="menu icon" src={menu} className="header__mobileIcn-menu" />
        </button>

        {menuList && (
          <div className="stickyNAv">
            <img
              alt="close icon"
              src={close}
              className="stickyNAv__mobileIcn-close"
              onClick={handleMenu}
            />

            <ul className="stickyNAv-list">
              <li
                claclassNamess="stickyNAv-list-link"
                onClick={() => navigate(`/how`)}
              >
                How it works
              </li>
              <li className="stickyNAv-list-link stickyNAv-list-cta">
                TRY IT!
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
