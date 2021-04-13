import * as React from "react"
import { useState } from "react"
import data from "../components/faqData"
import SingleQuestion from "../components/faqQuestion"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Faq = () => {
  const { backgroundImage123 } = useStaticQuery(graphql`
    query {
      backgroundImage123: file(relativePath: { eq: "faq.png" }) {
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
  const [questions, setQuestions] = useState(data)

  return (
    <StyledMain>
      <BgImage image={pluginImage} className="masthead">
        <h1>FAQ</h1>
        <main className="main">
          <div className="containerDiv">
            <section className="info">
              {questions.map(question => {
                return <SingleQuestion key={question.id} {...question} />
              })}
            </section>
          </div>
        </main>
      </BgImage>
    </StyledMain>
  )
}

export default Faq

const StyledMain = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - (6rem + 4rem));

  .containerDiv {
    width: 90vw;
    margin: 5rem auto;
    background: #fff;
    border-radius: 0.25rem;
    padding: 2.5rem 2rem;
    max-width: 920px;
    /* display: grid; */
    /* gap: 1rem 2rem; */

    /* h3 {
      line-height: 1.2;
      font-weight: 500;
    } */
  }

  @media (min-width: 992px) {
    .containerDiv {
      /* display: grid; */
      /* grid-template-columns: 250px 1fr; */
    }
  }
  .main {
    /* min-height: 100vh; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }

  .info {
  }

  .masthead {
    width: 100%;
    min-height: 80vh;
    padding: 3rem;
    /* justify-content: center; */
    /* align-items: center; */
    /* padding: 3rem; */

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
