import * as React from "react"
import { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from "styled-components"

import Title from "../components/title"

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "rules" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600)
        }
      }
    }
  }
`

const Rules = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  const [images, setImages] = useState(nodes)
  const [value, setValue] = useState(0)

  const { name } = images[value]
  const pathToImage = getImage(images[value])

  return (
    <Wrapper id="rules">
      <Title title="How to Play" />
      <div className="bottom-container-div">
        <div className="left-bottom-div">
          <GatsbyImage image={pathToImage} alt={name} />
        </div>
        <div className="right-bottom-div">
          <div className="number-button">
            <button onClick={() => setValue(0)}>
              <StaticImage
                loading="eager"
                src="../images/play-1.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
                className="banner-phone"
                as="section"
              />
              <div>Select Match</div>
            </button>
          </div>
          <div className="number-button">
            <button onClick={() => setValue(1)}>
              <StaticImage
                loading="eager"
                src="../images/play-2.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <div>Create Team</div>
            </button>
          </div>
          <div className="number-button">
            <button onClick={() => setValue(2)}>
              <StaticImage
                loading="eager"
                src="../images/play-3.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <div>Join match and play</div>
            </button>
          </div>
          <div className="number-button">
            <button onClick={() => setValue(3)}>
              <StaticImage
                loading="eager"
                src="../images/play-4.png"
                alt="phone"
                width={100}
                placeholder="tracedSVG"
                layout="constrained"
              />
              <div>Play casual games</div>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Rules

const Wrapper = styled.section`
  background-color: #e4f3ff;
  margin: 0 auto;
  padding: 3rem;

  .bottom-container-div {
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

    .right-bottom-div {
      display: grid;
      padding-top: 4rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      @media (max-width: 769px) {
        padding-top: 1px;
      }

      .number-button {
        padding: 20px;
        margin: 10px;
        text-align: center;
        margin: 18px 10px 40px;
      }
      button {
        outline: none;
      }
    }
  }
`
