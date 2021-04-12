import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="#about">About</NavItem>
      <NavItem to="#rules">Rules</NavItem>
      <NavItem to="#review">Review</NavItem>
      <NavItem to="#contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

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
    color: #066ab8;
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
