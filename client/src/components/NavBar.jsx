import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ artist, setArtist }) => {
  return (
    <>
      <header>
        <div className="header">
          <h1>WILLIAM HAFER</h1>
          <nav className="navBar">
            <ul>
              <li>
                <NavLink
                  state={{ artist }}
                  className={(navData) =>
                    navData.isActive ? "active navLink" : "navLink"
                  }
                  to="/"
                // className={({ isActive }) => {
                //   isActive ? "navLink active" : "navLink";
                // }}
                // className={({ isActive }) => {
                //   isActive
                //     ? console.log("is active")
                //     : console.log("is not active");
                // }}
                >
                  Artwork
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  state={{ artist }}
                  className={(navData) =>
                    navData.isActive ? "active navLink" : "navLink"
                  }
                  to="/music">
                  Music
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active navLink" : "navLink"
                  }
                  to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active navLink" : "navLink"
                  }
                  to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active navLink" : "navLink"
                  }
                  to="/login">
                  Login
                </NavLink>
              </li>
              {
                artist ? (
                  <li>
                    <NavLink
                      state={{ artist, setArtist }}
                      className={({ isActive }) =>
                        isActive ? "active navLink" : "navLink"
                      }
                      to="/addnewart">
                      Add Art
                    </NavLink>
                  </li>)
                  : null
              }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
