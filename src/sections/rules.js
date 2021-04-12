import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Rules = () => {
  return (
    <MainDiv>
      <h1>How to Play</h1>
      <div className="bg-white grid grid-cols-2">
        <div>
          <StaticImage
            loading="eager"
            src="../images/play-map.png"
            alt="phone"
            width={100}
            placeholder="tracedSVG"
            layout="constrained"
            className="banner-phone mt-10"
            as="section"
          />
        </div>
        <p className="px-40">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          modi aperiam esse similique iste, delectus rem voluptatibus placeat,
          quia inventore error sequi, aspernatur ipsum explicabo?
        </p>
      </div>
      <div className="grid grid-flow-col">
        <div>
          <StaticImage
            loading="eager"
            src="../images/play-phone.png"
            alt="phone"
            width={600}
            placeholder="tracedSVG"
            layout="constrained"
            className="banner-phone"
            as="section"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <StaticImage
              loading="eager"
              src="../images/experience-download.png"
              alt="phone"
              width={100}
              placeholder="tracedSVG"
              layout="constrained"
              className="banner-phone"
              as="section"
            />
            <div>
              <h2>10M</h2>
              <p>Download</p>
            </div>
          </div>
          <div>
            <StaticImage
              loading="eager"
              src="../images/experience-user.png"
              alt="phone"
              width={100}
              placeholder="tracedSVG"
              layout="constrained"
              className="banner-phone"
              as="section"
            />
            <div>
              <h2>1M</h2>
              <p>Active User</p>
            </div>
          </div>
          <div>
            <StaticImage
              loading="eager"
              src="../images/experience-prize.png"
              alt="phone"
              width={100}
              placeholder="tracedSVG"
              layout="constrained"
              className="banner-phone"
              as="section"
            />
            <div>
              <h2>10M</h2>
              <p>Prizes</p>
            </div>
          </div>
          <div>
            <StaticImage
              loading="eager"
              src="../images/experience-match.png"
              alt="phone"
              width={100}
              placeholder="tracedSVG"
              layout="constrained"
              className="banner-phone"
              as="section"
            />
            <div>
              <h2>10K</h2>
              <p>Match Covered</p>
            </div>
          </div>
        </div>
      </div>
    </MainDiv>
  )
}

export default Rules

const MainDiv = styled.div`
  background-color: #e4f3ff;

  h1 {
    font-size: 64px;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    line-height: 84px;
    text-align: center;
  }
`
