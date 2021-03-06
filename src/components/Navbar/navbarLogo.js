import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLogo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <StaticImage
        src="../../images/gameplan-icon.png"
        alt="Gameplan Logo"
        width={50}
        placeholder="none"
      />
    </LogoWrap>
  )
}

export default NavLogo

const LogoWrap = styled.div`
  justify-self: flex-start;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;
`
