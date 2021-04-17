import * as React from "react"
import { BgImage } from "gbimage-bridge"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

import Title from "../components/title"

const Experience = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "stadium-background.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `)
  const bgImage = getImage(backgroundImage)

  return (
    <Wrapper id="experience">
      <BgImage image={bgImage} className="background-image">
        <Title title="We Provide Best Experience" />
        <div className="container-div">
          <div className="left-div">
            <div className="left-div-card">
              <StaticImage
                loading="eager"
                src="../images/experience-download.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <h4>10M</h4>
              <p>Download</p>
            </div>
            <div className="left-div-card">
              <StaticImage
                loading="eager"
                src="../images/experience-user.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <h4>1M</h4>
              <p>Active User</p>
            </div>
            <div className="left-div-card">
              <StaticImage
                loading="eager"
                src="../images/experience-prize.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <h4>10M</h4>
              <p>Prizes</p>
            </div>
            <div className="left-div-card">
              <StaticImage
                loading="eager"
                src="../images/experience-match.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <h2>10K</h2>
              <p>Match Covered</p>
            </div>
          </div>
          <div className="right-div">
            <StaticImage
              loading="eager"
              src="../images/experience-banner.png"
              alt="phone"
              width={600}
              placeholder="tracedSVG"
              layout="constrained"
            />
          </div>
        </div>
      </BgImage>
    </Wrapper>
  )
}

export default Experience

const Wrapper = styled.section`
  .background-image {
    width: 100%;
    min-height: 80vh;
  }

  .container-div {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40 px;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  .left-div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    .left-div-card {
      background-color: #fff;
      color: #333;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      padding: 20px;
      margin: 10px;
      text-align: center;
      margin: 18px 10px 40px;
    }
  }

  .right-div {
    justify-self: end;
    align-self: center;
  }
`
