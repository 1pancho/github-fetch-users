import 'bootstrap/dist/css/bootstrap.min.css'
import { FC, useEffect, useState } from 'react'
import styles from './Pagination.module.css'

type Props = {
  reposPerPage: number
  totalRepos: number
  paginate: (value: number) => void
}

const Pagination: FC<Props> = ({ reposPerPage, totalRepos, paginate }) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const calculatePageNumbers = () => {
      const numbers = [];
      for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        numbers.push(i);
      }
      setPageNumbers(numbers);
    };

    calculatePageNumbers();
  }, [reposPerPage, totalRepos]);

  return (
    <div className={styles.reposContainerPagination}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
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
