import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"

export const Navigation = styled.nav`
  background-color: #066ab8;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1536px;
`

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItems = styled.li`
  height: 80px;
`

export const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`
