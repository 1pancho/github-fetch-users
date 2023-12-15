import 'bootstrap/dist/css/bootstrap.min.css'
import { FC, useEffect, useState } from 'react'
import styles from './Pagination.module.css'
import usePagination from '../../hooks/usePagination'

type Props = {
  reposPerPage: number
  totalRepos: number
  paginate: (value: number) => void
}

const Pagination: FC<Props> = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = usePagination(totalRepos, reposPerPage);
  if (!pageNumbers) {
    return null;
  }
  return (
    <div className={styles.reposContainerPagination}>
      <ul className="pagination">
        {pageNumbers?.map((number) => (
          <li className="page-item" key={number}>
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
