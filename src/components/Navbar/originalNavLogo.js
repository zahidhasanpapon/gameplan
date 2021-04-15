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

// const LogoWrap = styled.div`
//   margin: auto 0;
//   flex: 0 1 36px;
//   /* top: 50px; */

//   @media (max-width: 768px) and (orientation: landscape) {
//     flex: 0 1 25px;
//   }
// `

const LogoWrap = styled.div`
  justify-self: flex-start;
  align-items: center;
  margin: auto 0;
  cursor: pointer;
`
