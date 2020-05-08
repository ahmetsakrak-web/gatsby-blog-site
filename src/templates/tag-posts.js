import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/Post'
const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} adet "${tag}" adlı etiket bulundu`
  return (
    <Layout>
      <div className="container">
        <div id="home-articles">
          <div className="kapsayici-2">
            <h1>{pageHeader}</h1>
            <div className="articles-container" >
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                  date={node.frontmatter.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const tagQuery = graphql`
query($tag: String!){
  allMarkdownRemark(
    sort:{fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {tags:{in: [$tag]}}}
  ){
    totalCount
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "DD/MM/YYYY", locale:"tr")
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 1000, maxHeight:500,quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`




export default tagPosts