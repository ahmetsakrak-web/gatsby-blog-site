import React from 'react'
import Navbar from '../components/navbar'
import SEO from '../components/seo'
import { slugify } from '../util/utilityfun'
import { Link } from 'gatsby'
export const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <>
      <SEO title="Tüm Taglar" keywords={[`tags`, `konular`]} />
      <Navbar />
      <div className="container">
        <h1>Tüm Taglar</h1>
        <div className="tags">
          {tags.map(tag => (
            <div key={tag} >
              <Link to={`/tag/${slugify(tag)}`}>
                <div className={`category ${slugify(tag)} defaultcat`}>
                  {tag} ({tagPostCounts[tag]})
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default tagsPage
