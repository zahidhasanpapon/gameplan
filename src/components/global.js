import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%auto;
  margin: 0 auto;
  /* top: 50%; */
  /* bottom: 50%; */
  /* position: absolute; */
  padding: 0 16px;
  /* padding-top: 100px; */
  /* padding: 100px; */

  @media (min-width: 575px) {
    max-width: 540px;
  }

  @media (min-width: 767px) {
    max-width: 720px;
  }

  @media (min-width: 991px) {
    max-width: 960px;
  }

  @media (min-width: 1199px) {
    max-width: 1200px;
  }
`
