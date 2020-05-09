import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'
import Sidebar from "../components/sidebar"


const BlogPage = () => {
  const postsPerPage = 15;
  let numberOfPages

  return (
    <Layout>
      <SEO title="Blog" />

      <article id="showcase">
        <div className="container">
          <div className="showcase-container">
            <div className="showcase-content">
              <div className="category sac-bakim">Saç Bakım</div>
              <h1>Bazı Saç Bakım Tüyoları</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum officia quibusdam mollitia
              deserunt animi soluta laudantium. Quam sapiente a dolorum magnam necessitatibus quis tempore facere totam.
            Dolor, sequi distinctio!</p>
              <a href="article.html" className="btn btn-primary">Devam et...</a>
            </div>
          </div>
        </div>
      </article>


      <section id="home-articles" className="py-2">

        <div className="container">




          <Sidebar />










          <div className="kapsayici-2">
            <h2>Tüm Bloglar</h2>



            <StaticQuery
              query={indexQuery}
              render={data => {
                numberOfPages = Math.ceil(
                  data.allMarkdownRemark.totalCount / postsPerPage
                )
                return (
                  <div>
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
                    <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
                  </div>
                )
              }}
            />



          </div>
        </div>
      </section>

    </Layout>
  )

}




const indexQuery = graphql`
query{
  allMarkdownRemark(sort: {fields:[frontmatter___date],order:DESC}
    limit:15){
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
              fluid(maxWidth: 600){
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
}`


export default BlogPage