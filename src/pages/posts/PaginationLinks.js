import React from 'react'
import { Link } from "gatsby"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage = currentPage - 1 === 1 ? '/blog' : '/blog/page/' + (currentPage - 1).toString()
  const nextPage = `/blog/page/` + (currentPage + 1).toString()



  return (

    <div className="pagination">
      {isFirst ? (
        <div className="active" > &laquo;  </div>
      ) : (
          <Link to={previousPage}>&laquo;</Link>
        )}



      {Array.from({ length: numberOfPages }, (_, i) => currentPage === i + 1 ? (
        <Link to={`/${i === 0 ? '/blog' : 'blog/page/' + (i + 1)}`}>
          <div className="active" key={`page-number${i + 1}`}>

            {i + 1}

          </div>
        </Link>
      ) : (
          <Link to={`/${i === 0 ? '/blog' : 'blog/page/' + (i + 1)}`}>
            <div key={`page-number${i + 1}`}>

              {i + 1}

            </div>
          </Link>
        ))}
      {
        isLast ? (

          <div className="active" > &raquo; </div>

        ) : (
            <Link to={nextPage}>&raquo; </Link>
          )}
    </div>
  )
}

export default PaginationLinks