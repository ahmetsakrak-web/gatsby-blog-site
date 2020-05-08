import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section id="success" class="bg-primary py-3 text-center">
        <div class="container">
          <h1 class="l-heading">Thank You For Your Submission</h1>
          <p class="lead">We will get back to you soon</p>
          <Link className="btn btn-secondary" href="/">Go Back</Link>
        </div>
      </section>
    </Layout>
  )
}


export default Success