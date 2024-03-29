import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"
import "./utilities.css"
import "./media.css"

const Layout = ({ children }) => {


  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
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
