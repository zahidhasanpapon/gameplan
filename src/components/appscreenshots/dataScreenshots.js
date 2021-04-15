import * as React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "screenshots" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600)
        }
      }
    }
  }
`

const DataScreenshots = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  const [images, setImages] = useState(nodes)
  const [index, setIndex] = useState(2)

  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images])

  return (
    <>
      <App>
        <button onClick={() => setIndex(index - 1)}>Prev</button>
        <button onClick={() => setIndex(index + 1)}>Next</button>
        <div>
          <section>
            <div className="cardSlider">
              <div className="cardSliderWrapper">
                {images.map((image, indexImage) => {
                  let position = "initialPosition"
                  if (indexImage === index) {
                    position = "activeSlide"
                  }
                  const { name } = image
                  const pathToImage = getImage(image)
                  return (
                    <article key={indexImage} className={position}>
                      <GatsbyImage image={pathToImage} alt={name} />
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </App>
    </>
  )
}

export default DataScreenshots

const App = styled.div`
  text-align: center;
  position: relative;

  .cardSliderWrapper {
    display: flex;
  }

  .cardsSlider {
    position: relative;
    max-width: 226px;
    margin: 0 auto;
  }

  article.activeSlide {
    transform: translateX(0);
    width: 900px;
  }

  article.initialPosition {
    /* opacity: 0; */
  }
`
