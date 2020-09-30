import React from "react"

import DiscoVolante from "../components/discoVolante"
import DolceVita from "../components/dolceVita"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/gallery.css"

const Gallery = () => {
  return(
    <Layout>
      <SEO title="Gallery" />
      <DolceVita />
      <DiscoVolante />
    </Layout>
  )
}

export default Gallery
