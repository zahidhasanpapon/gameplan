import * as React from "react"
import PropTypes from "prop-types"

import "@fontsource/roboto-slab"
import "./layout.css"

import Navbar from "./Navbar/navbar"
import Footer from "./footer"
import Sidebar from "./Sidebar/sidebar"
import OriginalNavbar from "./Navbar/originalNavbar"

const Layout = ({ children }) => {
  return (
    <>
      <OriginalNavbar />
      {/* <Sidebar /> */}
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
