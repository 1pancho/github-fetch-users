import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <dev className='repos-container-pagination'>
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li className="page-item" key={number}>
          <a href="!#" className="page-link" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
    </dev>

  )
}

export default Pagination
