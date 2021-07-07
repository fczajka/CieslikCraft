import { Link } from "gatsby"
import React from "react"

import SEO from "../components/seo"
import "../styles/index.css"

const NotFoundPage = () => (
  <div className="landing-404">
    <SEO />
    <div className="not-found">
      <p className="error">ERROR 404</p>
      <p className="page-not-found">Page not found</p>
      <Link className="link-to-main" to="/">Click here to go to the home page</Link>
    </div>
  </div>
)

export default NotFoundPage
