import * as React from "react"
import { useState } from "react"

import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

import Title from "../components/title"
// import data from "../components/faqData"
import SingleQuestion from "../components/faqQuestion"

const Faq = () => {
  const backgroundImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "stadium-background.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
      allFaqList {
        nodes {
          _id
          question
          answer
        }
      }
    }
  `)
  const {
    allFaqList: { nodes: faqlist },
  } = backgroundImage
  // console.log(backgroundImage)
  // console.log(faqlist)
  const {
    file: { childImageSharp },
  } = backgroundImage
  const bgImage = getImage(childImageSharp)

  // console.log(data)
  // console.log(faqlist)
  const [questions] = useState(faqlist)

  return (
    <Wrapper id="faq">
      <BgImage image={bgImage} className="background-image">
        <Title title="FAQ" />
        <div className="main-container">
          <div>
            {questions.map(question => {
              {
                console.log(question._id)
              }
              return <SingleQuestion key={question._id} {...question} />
            })}
          </div>
        </div>
      </BgImage>
    </Wrapper>
  )
}

export default Faq

const Wrapper = styled.div`
  padding: 3rem;

  .background-image {
    width: 100%;
    min-height: 80vh;
  }

  .main-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40 px;
    overflow: auto;
    background: #fff;
    border-radius: 0.25rem;
    padding: 2.5rem 2.5rem;
  }
`
