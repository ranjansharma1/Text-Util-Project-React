import React from "react";
import PropTypes from "prop-types"; //short form: impt
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location=useLocation();
  console.log(location.pathname)

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            {/* it will take value from Navabr.js  */}
            {props.title}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'? 'active':""}`}  to="/about">
                  {props.about} {/* it will take value from Navabr.js  */}
                </Link>
              </li>
            </ul>
            <form className={`mx-3 text-${ props.mode === "light" ? "dark" : "light" }`} >
              <input type="radio"  id="blue" name="color" value="blue" checked={props.colorMode === "blue"} onChange={(e) => props.colorChangeMode(e.target.value)}/>
              <label className="mx-2" htmlFor="blue"> Blue </label>

              <input type="radio" id="green" name="color" value="green" checked={props.colorMode === "green"} onChange={(e) => props.colorChangeMode(e.target.value)}/>
              <label className="mx-2" htmlFor="green">Green</label>

              <input type="radio" id="red" name="color" value="red" checked={props.colorMode === "red"} onChange={(e) => props.colorChangeMode(e.target.value)}/>
              <label className="mx-2" htmlFor="red">Red</label>
            </form>

            {/* htmlFor Enabling Dark Mode */}
            <div className={`form-check form-switch text-${ props.mode === "light" ? "dark" : "light" }`} >
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="dId"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  // title: PropTypes.string,
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

// It helps to set default properties if value is not given.
Navbar.defaultProps = {
  title: "set title here",
  about: "About text here",
};
