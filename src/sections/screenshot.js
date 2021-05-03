import * as React from "react"
// import styled from "styled-components"
// import { StaticImage } from "gatsby-plugin-image"
// import { Container } from "../components/global"
import DataScreenshots from "../components/appscreenshots/dataScreenshots"

const Screenshot = () => {
  return (
    // <MainDiv>
    //   <div className="linear-background px-11"></div>
    //   <h1>App Screenshot</h1>
    //   <Container>
    //     <div className="bg-white justify-center">
    //       <div>
    //         <StaticImage
    //           loading="eager"
    //           src="../images/screenshot-slider.png"
    //           alt="phone"
    //           width={700}
    //           placeholder="tracedSVG"
    //           layout="constrained"
    //           className="banner-phone mt-10"
    //           as="section"
    //         />
    //       </div>
    //     </div>
    //   </Container>
    // </MainDiv>
    <>
      <DataScreenshots />
    </>
  )
}

export default Screenshot

// const MainDiv = styled.div`
//   justify-content: center;
//   align-items: center;
//   h1 {
//     font-size: 64px;
//     font-family: Roboto Slab;
//     font-style: normal;
//     font-weight: bold;
//     line-height: 84px;
//     text-align: center;
//   }
// `
