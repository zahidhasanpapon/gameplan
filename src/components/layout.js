import * as React from "react"
import PropTypes from "prop-types"

import "@fontsource/roboto-slab"
import "./layout.css"

import Footer from "./footer"

import OriginalNavbar from "./Navbar/originalNavbar"

const Layout = ({ children }) => {
  return (
    <>
      <OriginalNavbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
