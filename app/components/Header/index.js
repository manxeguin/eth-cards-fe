import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img
                    src="http://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
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
                      <li>
                        <Link to="/features">Features</Link>
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
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
