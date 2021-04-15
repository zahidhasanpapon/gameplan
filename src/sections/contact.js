import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"

const Contact = () => {
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
    <StyledMain id="contact">
      <BgImage image={pluginImage} className="masthead">
        <h1>Contact US</h1>
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl py-10 px-10 mt-16">
          <div>
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="tracking-wide font-bold text-xl">
                  Get in Touch
                </div>
                <div>
                  <form>
                    <div className="mt-4">
                      <input
                        className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner bacgroundColorInputField"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner bacgroundColorInputField"
                        type="text"
                        id="name"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner bacgroundColorInputField"
                        type="text"
                        id="name"
                        placeholder="Your number"
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner bacgroundColorInputField"
                        type="text"
                        id="name"
                        placeholder="Your message"
                      />
                    </div>
                    <button className="uppercase mx-auto shadow bg-yellow-600 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-4">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="px-14">
                <div className="tracking-wide font-bold text-xl">Address</div>
                <div>
                  <a
                    href="https://www.facebook.com/playgameplan/"
                    className="m-4"
                    target="_"
                  >
                    <p>
                      <RiFacebookCircleFill /> playgameplan
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/playgameplan"
                    className="m-4"
                    target="_"
                  >
                    <p>
                      <AiFillTwitterCircle /> playgameplan
                    </p>
                  </a>
                  <a
                    href="https://www.instagram.com/play_gameplan/"
                    className="m-4"
                    target="_"
                  >
                    <p>
                      <FiInstagram /> play_gameplan
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BgImage>
    </StyledMain>
  )
}

export default Contact

const StyledMain = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - (6rem + 4rem));

  .bacgroundColorInputField {
    background: #f6f6f6;
  }

  .masthead {
    width: 100%;
    min-height: 80vh;
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
