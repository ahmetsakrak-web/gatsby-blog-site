import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { slugify } from "../util/utilityfun"
const Post = ({ title, slug, body, fluid, tags, date }) => {
  return (
    <article className="card">
      <Link to={`/${slug}`}>
        <Img fluid={fluid} />
      </Link>
      <div>
        <div className="paket">
          {tags.map(tag => (
            <div key={tag} >
              <Link to={`/tag/${slugify(tag)}`}>
                <div className={`category ${slugify(tag)}`}>
                  {tag}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h3>
          <Link to={`/${slug}`}> {title} </Link>
        </h3>
        <p> {body}</p>
        <small>{date}</small>
      </div>

    </article>
  )
}

export default Post