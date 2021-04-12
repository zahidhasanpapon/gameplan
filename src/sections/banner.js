import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"
import { Container } from "../components/global"

const Banner = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "banner2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `)

  const pluginImage = getImage(backgroundImage)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <StyledMain>
      <BgImage image={pluginImage} className="masthead">
        <Container>
          <Flex>
            <HeaderTextGroup>
              <h1>GAMEPLAN</h1>
              <h2>#1 Fantasy App in Bangladesh</h2>
              <HeaderForm onSubmit={handleSubmit}>
                <HeaderInput placeholder="Enter phone number" />
                <HeaderButton>Get Link</HeaderButton>
              </HeaderForm>
            </HeaderTextGroup>
            <ImageWrapper>
              <StaticImage
                loading="eager"
                src="../images/hero-phone-img.png"
                alt="phone"
                width={500}
                placeholder="tracedSVG"
                layout="constrained"
                className="banner-phone"
                as="section"
              />
            </ImageWrapper>
          </Flex>
        </Container>
      </BgImage>
    </StyledMain>
  )
}

export default Banner

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
  .masthead {
    width: 100%;
    min-height: 80vh;
  }
`
const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
  } ;
`
const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #098c8c;
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  /* left: 263px;
  top: 599px; */
  outline: 0px;
  &::focus {
    box-shadow: inset #098c8c 0px 0px 0px 2px;
  }

  @media (max-width: 991px) {
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  /* width: 155px; */
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  background: #ef681c;
  padding: 0px 4px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    margin-left: 0;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: 767px) {
    justify-self: center;
  }
`