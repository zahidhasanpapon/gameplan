import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Link as ReactLink, animateScroll as Scroll } from "react-scroll"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" onClick={() => Scroll.scrollToTop}>
        Home
      </NavItem>
      <NavItem to="section1" smooth={true} duration={500}>
        About
      </NavItem>
      <NavItem to="rules" smooth={true} duration={500}>
        Rules
      </NavItem>
      <NavItem to="review" smooth={true} duration={500}>
        Review
      </NavItem>
      <NavItem to="contact" smooth={true} duration={500}>
        Contact
      </NavItem>
    </>
  )
}

export default NavbarLinks

const NavItem = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #066ab8;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: blue;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
