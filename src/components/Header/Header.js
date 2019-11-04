import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="hero-header">
        <h1 className="title">Shade Gifs</h1>
        <h2 className="subtitle">
          The <em>best</em> reaction gifs in one place
        </h2>
        <div className="field has-addons header-form">
          <div className="control header-input">
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </div>
          <div className="control">
            <input
              type="submit"
              class="button is-info"
              value="Search"
            />
          </div>
        </div>
      </div>
      <div className="header-image"></div>
    </>
  );
};

export default Header;
