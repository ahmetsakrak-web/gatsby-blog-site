import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Sayfa Bulunamadı</h1>
    <Link >Anasayfaya geri dön</Link>
  </Layout>
)

export default NotFoundPage
