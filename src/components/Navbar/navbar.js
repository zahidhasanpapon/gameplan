import * as React from "react"
import { FaBars } from "react-icons/fa"
import {
  Navigation,
  NavbarContainer,
  Hamburger,
  NavigationMenu,
  NavItems,
  NavLinks,
} from "./styledElements"
import NavLogo from "./navbarLogo"

const Navbar = () => {
  return (
    <Navigation>
      <NavbarContainer>
        <NavLogo />
      </NavbarContainer>
      <Hamburger>
        <FaBars />
      </Hamburger>
      <NavigationMenu>
        <NavItems>
          <NavLinks to="about">About</NavLinks>
        </NavItems>
        <NavItems>
          <NavLinks to="rules">Rules</NavLinks>
        </NavItems>
        <NavItems>
          <NavLinks to="review">Review</NavLinks>
        </NavItems>
        <NavItems>
          <NavLinks to="contact">Contact</NavLinks>
        </NavItems>
      </NavigationMenu>
    </Navigation>
  )
}

export default Navbar
