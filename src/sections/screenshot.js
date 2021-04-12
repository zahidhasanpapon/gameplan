import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Screenshot = () => {
  return (
    <MainDiv>
      <div className="linear-background px-11"></div>
      <h1>App Screenshot</h1>
      <div className="bg-white justify-center">
        <div>
          <StaticImage
            loading="eager"
            src="../images/screenshot-slider.png"
            alt="phone"
            width={700}
            placeholder="tracedSVG"
            layout="constrained"
            className="banner-phone mt-10"
            as="section"
          />
        </div>
      </div>
    </MainDiv>
  )
}

export default Screenshot

const MainDiv = styled.div`
  .linear-background {
    width: 400px;
    height: 200px;
    justify-content: center;
    align-items: center;

    background: linear-gradient(265.76deg, #f4d119 -0.65%, #ffaa04 106.58%);
    border: 10px solid #ffffff;
    border-radius: 20px;
  }

  h1 {
    font-size: 64px;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    line-height: 84px;
    text-align: center;
  }
`
