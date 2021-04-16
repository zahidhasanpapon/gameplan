import * as React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  )
}

export default Title

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
`
