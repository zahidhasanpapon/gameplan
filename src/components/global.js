import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%auto;
  margin: 0 auto;
  padding: 0 16px;

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
