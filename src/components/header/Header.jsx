import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickeyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("stickey__header");
      } else {
        headerRef.current.classList.remove("stickey__header");
      }
    });
  };

  useEffect(() => {
    stickeyHeaderFunc();
    return () =>
      window.removeEventListener("scroll", stickeyHeaderFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">

            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="TravelWorld Logo" className="logoImg" />
            </div>

            {/* Navigation */}
            <div className="navigation" ref={menuRef}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right buttons */}
            <div className="nav_right d-flex align-items-center gap-4">
              <Link to="/login" className="login_btn">
                Login
              </Link>

              <Link to="/register" className="register_btn">
                Register
              </Link>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
