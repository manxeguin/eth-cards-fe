import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/headerlogo.png';

function Header() {
  return (
    <div>
      <section className="hero is-info is-medium is-hero-dbz">
        <div className="is-blur">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="../">
                    <img src={logo} alt="dragon ball z logo" />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenu"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                    <div className="tabs is-right">
                      <ul>
                        <li className="is-active">
                          <Link to="/">Home</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title dbz-app-title">Hero title</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
