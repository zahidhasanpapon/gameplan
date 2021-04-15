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
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        <div>
          <section className="card-section">
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

  .card-section {
    margin: 5rem auto;
    max-width: 900px;
    background: white;
    padding-top: 2rem;
    height: 60vh;
  }

  .next-btn,
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    color: var(--clr-white);
    border: transparent;
    cursor: pointer;
    transition: var(--transition);
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }
  .next-btn:hover,
  .prev-btn:hover {
    color: var(--clr-primary-5);
  }
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }
  @media (min-width: 1000px) {
    .prev-btn {
      left: 1rem;
    }
    .next-btn {
      right: 1rem;
    }
  }

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
