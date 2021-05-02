import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"
import { Container } from "../components/global"
import bdFlag from "../images/bdFlag.png"

const Banner = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `)

  const pluginImage = getImage(backgroundImage)

  // Form Start
  const [phone, setPhone] = useState(0)
  const bdCode = 88
  const concatinatedPhoneNumber = `${bdCode}${phone}`
  console.log(concatinatedPhoneNumber)
  const submitHanlder = async event => {
    event.preventDefault()
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    }
    const response = await fetch(
      "http://localhost:5000/link/sendlink",
      requestOptions
    )
      .then(alert("Query Sent."))
      .catch(error => console.error("Error: ", error))
    await response.json()
    return response
  }

  // Form End

  return (
    <StyledMain id="banner">
      <BgImage image={pluginImage} className="masthead">
        <Container>
          <Flex>
            <HeaderTextGroup>
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">GAMEPLAN</span>
                  </h1>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                    #1 Fantasy App in Bangladesh
                  </p>
                  <button>
                    <StaticImage
                      loading="eager"
                      src="../images/google-play-badge.png"
                      alt="phone"
                      width={200}
                      placeholder="tracedSVG"
                      layout="constrained"
                      className="banner-phone"
                      as="section"
                    />
                  </button>
                </div>
                <HeaderForm onSubmit={submitHanlder}>
                  {/* <span className="flex items-center leading-normal bg-white lg:px-3 border-0 rounded rounded-none text-xl text-gray-600">
                    <i className="pr-2 lg:pr-2 font-title">
                      <img
                        src={bdFlag}
                        style={{ width: "40px", height: "24px" }}
                        alt=""
                      />
                    </i>
                    +88
                  </span> */}
                  <HeaderInput
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="Enter Phone Number"
                    // value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                  <HeaderButton>Get Link</HeaderButton>
                </HeaderForm>
              </main>
            </HeaderTextGroup>
            <ImageWrapper>
              <StaticImage
                loading="eager"
                src="../images/hero-phone-img.png"
                alt="phone"
                width={500}
                placeholder="tracedSVG"
                layout="constrained"
              />
            </ImageWrapper>
          </Flex>
        </Container>
      </BgImage>
    </StyledMain>
  )
}

export default Banner

const StyledMain = styled.main`
  padding-top: 8vh;
  /* min-height: 75vh; */
  .masthead {
    /* width: 100%; */
    min-height: 75vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

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
