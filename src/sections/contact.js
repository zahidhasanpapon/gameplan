import * as React from "react"

import { BgImage } from "gbimage-bridge"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

import Title from "../components/title"

import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"

const Contact = () => {
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
    <Wrapper id="contact">
      <BgImage image={bgImage} className="background-image">
        <Title title="Contact Us" />
        <div className="container-div">
          <div className="left-div">
            <div className="title">Get In Touch</div>
            <form action="">
              <div className="form-row">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="input-field"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input-field"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Number"
                  className="input-field"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Message"
                  className="input-field"
                />
              </div>
              <button className="left-form-button">Send</button>
            </form>
          </div>
          <div className="right-div">
            <div className="title">Address</div>
            <div className="right-links">
              <a
                href="https://www.facebook.com/playgameplan/"
                className="react-icons-link"
                target="_"
              >
                <div className="react-icons">
                  <RiFacebookCircleFill />
                  <p>playgameplan</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/playgameplan/"
                className="react-icons-link"
                target="_"
              >
                <div className="react-icons">
                  <AiFillTwitterCircle />
                  <p>playgameplan</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/playgameplan/"
                className="react-icons-link"
                target="_"
              >
                <div className="react-icons">
                  <FiInstagram />
                  <p>playgameplan</p>
                </div>
              </a>
            </div>
            <button className="right-div-button">
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
        </div>
      </BgImage>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled.section`
  /* margin-top: 100vh; */
  /* width: 100%; */
  /* min-height: 100vh; */

  .background-image {
    padding-top: 100vh;
    width: 100%;
    min-height: 100vh;
    padding: 3rem;
  }

  .container-div {
    display: grid;
    padding: 2.5rem;
    margin-top: 8rem;
    margin-left: auto;
    margin-right: auto;
    --tw-bg-opacity: 1;
    border-radius: 0.75rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    @media (min-width: 768px) {
      max-width: 48rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .title {
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  .right-div {
    .right-div-button {
      margin-top: 2rem;
      outline: none;
    }
    .right-links {
      margin-top: 1rem;
      .react-icons-link {
        .react-icons {
          margin-top: 1rem;
          display: flex;
          align-items: center;

          p {
            padding-left: 1rem;
          }
        }
      }
    }

    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }

  .left-div {
    @media (min-width: 768px) {
    }
    .left-form-button {
      margin-left: auto;
      margin-right: auto;
      background-color: #ef681c;
      margin-top: 1rem;
      --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      border-radius: 0.375rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      --tw-text-opacity: 1;
      color: rgba(255, 255, 255, var(--tw-text-opacity));

      &:hover {
        --tw-bg-opacity: 1;
        background-color: rgba(217, 119, 6, var(--tw-bg-opacity));
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }

    .form-row {
      margin-top: 1rem;

      .input-field {
        background: #f6f6f6;
        appearance: none;
        border-radius: 0.5rem;
        border-width: 1px;
        width: 70%;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        line-height: 1.375;
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        --tw-text-opacity: 1;
        color: rgba(55, 65, 81, var(--tw-text-opacity));

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
      }
    }
  }
`
