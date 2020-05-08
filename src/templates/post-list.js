import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'
const postList = (porps) => {
  const posts = porps.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = porps.pageContext
  return (
    <Layout>

      <div className="container">
        <div id="home-articles">
          <div className="kapsayici-2">
            <h1>{currentPage}</h1>
            <div className="articles-container" >
              {posts.map(({ node }) => (
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
      <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />

    </Layout>
  )
}

export const postListQuery = graphql`
query ($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    skip: $skip 
    limit: $limit 
  ) {
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




export default postList