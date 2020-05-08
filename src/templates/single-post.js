import React from 'react'
import Layout from "../components/layout"
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityfun'
import Sidebar from '../components/sidebar'
import { DiscussionEmbed } from 'disqus-react';


const singlePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const baseUrl = 'expmal'
  const disqusShortname = 'www.sultansakrak.com'
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: data.title,
    url: baseUrl + pageContext.slug
  }
  return (
    <Layout>
      <SEO title={post.title} />

      <section id="article">
        <div className="container">
          <div className="page-container">
            <article className="card">
              <h1 className="l-heading">{post.title}</h1>

              <Img fluid={post.image.childImageSharp.fluid} />

              <div className="meta">
                <small>
                  <i className="fas fa-user"></i> Sultan Şakrak tarafından {post.date} tarihinde yazldı.
                </small>
                <div className="paket">
                  {post.tags.map(tag => (
                    <div key={tag} >
                      <Link to={`/tag/${slugify(tag)}`}>
                        <div className={`category ${slugify(tag)}`}>
                          {tag}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />

            </article>

            <Sidebar />



          </div>
        </div>
      </section>



    </Layout>
  )
}

export const postQuery = graphql`
query blogPostBySlug($slug: String!){
  markdownRemark(fields:{ slug:{eq: $slug}}){
    id
    html
    frontmatter{
      title
      date(formatString: "dddd, Do MMMM YYYY hh:mm ", locale:"tr")
      tags
      image{
        childImageSharp{
          fluid(maxWidth: 1000, maxHeight:500,quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`

export default singlePost