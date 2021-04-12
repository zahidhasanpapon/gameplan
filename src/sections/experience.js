import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Experience = () => {
  const { backgroundImage123 } = useStaticQuery(graphql`
    query {
      backgroundImage123: file(relativePath: { eq: "stadium2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 50
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `)
  const pluginImage = getImage(backgroundImage123)

  return (
    <>
      <StyledMain>
        <BgImage image={pluginImage} className="masthead">
          <h1>We Provide Best Experience</h1>
          <main className="grid grid-flow-col">
            <div className="sm:text-center lg:text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <StaticImage
                    loading="eager"
                    src="../images/experience-download.png"
                    alt="phone"
                    width={100}
                    placeholder="tracedSVG"
                    layout="constrained"
                    className="banner-phone"
                    as="section"
                  />
                  <div>
                    <h2>10M</h2>
                    <p>Download</p>
                  </div>
                </div>
                <div>
                  <StaticImage
                    loading="eager"
                    src="../images/experience-user.png"
                    alt="phone"
                    width={100}
                    placeholder="tracedSVG"
                    layout="constrained"
                    className="banner-phone"
                    as="section"
                  />
                  <div>
                    <h2>1M</h2>
                    <p>Active User</p>
                  </div>
                </div>
                <div>
                  <StaticImage
                    loading="eager"
                    src="../images/experience-prize.png"
                    alt="phone"
                    width={100}
                    placeholder="tracedSVG"
                    layout="constrained"
                    className="banner-phone"
                    as="section"
                  />
                  <div>
                    <h2>10M</h2>
                    <p>Prizes</p>
                  </div>
                </div>
                <div>
                  <StaticImage
                    loading="eager"
                    src="../images/experience-match.png"
                    alt="phone"
                    width={100}
                    placeholder="tracedSVG"
                    layout="constrained"
                    className="banner-phone"
                    as="section"
                  />
                  <div>
                    <h2>10K</h2>
                    <p>Match Covered</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <StaticImage
                loading="eager"
                src="../images/experience-banner.png"
                alt="phone"
                width={600}
                placeholder="tracedSVG"
                layout="constrained"
                className="banner-phone"
                as="section"
              />
            </div>
          </main>
        </BgImage>
      </StyledMain>
    </>
  )
}

export default Experience

// const MainDiv = styled.div`
//   background: white;

//   h1 {
//     font-size: 64px;
//     font-family: Roboto Slab;
//     font-style: normal;
//     font-weight: bold;
//     line-height: 84px;
//     text-align: center;
//   }
// `

const StyledMain = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - (6rem + 4rem));

  .masthead {
    width: 100%;
    min-height: 80vh;

    justify-content: center;
    align-items: center;
    padding: 3rem;
    h1 {
      text-align: center;
      font-size: 7vh;
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: bold;
      line-height: 84px;
      text-align: center;
    }
  }
`
