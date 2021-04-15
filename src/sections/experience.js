import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Container } from "../components/global"

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
          <Container>
            <Flex>
              <HeaderTextGroup>
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
                        <h2 className="px-10 font-bold text-xl">10M</h2>
                        <p className="px-4">Download</p>
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
                        <h2 className="px-10 font-bold text-xl">1M</h2>
                        <p className="px-4">Active User</p>
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
              </HeaderTextGroup>
              <ImageWrapper>
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
              </ImageWrapper>
            </Flex>
          </Container>
        </BgImage>
      </StyledMain>
    </>
  )
}

export default Experience
const Flex = styled.div`
  display: grid;
  justify-content: space-space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: 767px) {
    justify-self: center;
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: 767px) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: white;
  }

  h2 {
    margin-bottom: 24px;
    font-size: 22px;
    line-height: 30px;
    color: white;
  }

  p {
    margin-bottom: 48px;
  }
`

const StyledMain = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - (6rem + 4rem));

  .classContainer {
    padding-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
