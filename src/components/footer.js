import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="flex justify-center px-4 text-white">
        <div className="container py-6 justify-center mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div className="text-white">
              <a
                href="#"
                className="px-4 font-medium hover:underline hover:text-gray-400"
              >
                Terms & Condition
              </a>
              <span> | </span>
              <a
                href="#"
                class="px-4 font-medium hover:underline hover:text-gray-400"
              >
                Privacy Policy
              </a>
              <span> | </span>
              <a
                href="#"
                class="px-4 font-medium hover:underline hover:text-gray-400"
              >
                Refund and Return
              </a>
            </div>
            <div class="flex mt-4 md:m-0">
              <div class="-mx-4">
                <div className="font-medium">
                  &copy; {new Date().getFullYear()} Team Plan - All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  background: #212121;
`
