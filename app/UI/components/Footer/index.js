import React from 'react';

function Footer() {
  return (
    <footer className="footer is-space-2xl-top">
      <div className="container">
        <div className="columns">
          <div className="column is-3 is-offset-2">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="https://www.google.es">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="https://www.google.es">Vestibulum errato isse</a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="https://www.google.es">
                  Labore et dolore magna aliqua
                </a>
              </li>
              <li>
                <a href="https://www.google.es">Kanban airis sum eschelor</a>
              </li>
            </ul>
          </div>
          <div className="column is-4">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="https://www.google.es">Objects in space</a>
              </li>
              <li>
                <a href="https://www.google.es">Playing cards with coyote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content has-text-centered">
          <div className="control level-item">
            <a href="https://github.com/BulmaTemplates/bulma-templates">
              <div className="tags has-addons">
                <span className="tag is-dark">Bulma Templates</span>
                <span className="tag is-info">MIT license</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
