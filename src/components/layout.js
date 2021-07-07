import React from "react"

import Header from "./header"
import NavbarBottom from "./navbar-bottom"
import Footer from "./footer"
import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
        <Footer />
      <NavbarBottom />
    </>
  )
}


export default Layout
