import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <div className="container-div">
        <div className="main-div">
          <div className="left-div">
            <a href="/">Terms & Condition</a>
            <span> | </span>
            <a href="/">Privacy Policy</a>
            <span> | </span>
            <a href="/">Refund and Return</a>
          </div>
          <div className="right-div">
            &copy; {new Date().getFullYear()} Team Plan - All rights reserved.
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  display: flex;
  /* padding: 1rem; */
  /* position: fixed; */
  text-align: center;
  background: #212121;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;

  .container-div {
    justify-content: center;
    margin: auto;
    max-width: 80rem;
    width: 100%;
    margin: auto;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .left-div {
    @media (min-width: 768px) {
      flex-direction: column;
    }
    @media (max-width: 640px) {
      flex-direction: column;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  a {
    padding-left: 1rem;
    padding-right: 1rem;

    &:hover {
      --tw-text-opacity: 1;
      color: rgba(156, 163, 175, var(--tw-text-opacity));
    }
  }

  .right-div {
    display: flex;
    margin-top: 1rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-left: -1rem;
    margin-right: -1rem;

    @media (min-width: 768px) {
      margin: 0px;
    }
  }
`
