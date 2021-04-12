import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; {new Date().getFullYear()} Team Plan - All rights reserved.</p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 4rem;
  display: grid;
  place-items: center;
  background: #212121;
  text-align: center;
  padding: 1rem;

  p {
    color: #ffffff;
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer
