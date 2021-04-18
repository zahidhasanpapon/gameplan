import * as React from "react"
import { useState } from "react"

import styled from "styled-components"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <Wrapper>
      <article className="question" onClick={() => setShowInfo(!showInfo)}>
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </Wrapper>
  )
}

export default Question

const Wrapper = styled.div`
  article {
    cursor: pointer;
  }

  .question {
    padding: 1rem 1.5rem;
    border: 2px solid #eae6eb;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .question h4 {
    text-transform: none;
    line-height: 1.5;
  }

  .question p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .question header h4 {
    margin-bottom: 0;
  }

  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: #eae6eb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #000000;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
    outline: none;
  }
`
