import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./originalNavLinks"
import NavLogo from "./originalNavLogo"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <Navigation>
      <NavLogo />
      <Toggle
        navbarOpen={navbarOpen}
        // onClick={() => setNavbarOpen(!navbarOpen)}
        onClick={toggle}
      >
        {/* {navbarOpen ? <Hamburger open /> : <Hamburger />} */}
        <Hamburger open={navbarOpen} />
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open onClick={toggle}>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  height: 8vh;
  display: flex;
  background: #066ab8;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 999;
  align-self: center;

  @media (max-width: 768px) {
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  /* padding: 0 10vw; */

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #111;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
