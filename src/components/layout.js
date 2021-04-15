import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import Navbar from "./Navbar/navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
