import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Sayfa Bulunamadı" />
    <div className="dortyuzdort">
      <h1 className="M-heading">404</h1>
      <h1 className="l-heading"> Sayfa Bulunamadı</h1>
      <Link className="defaultcat btn text-center" to="/">Anasayfaya geri dön</Link>
    </div>
  </Layout>
)

export default NotFoundPage
