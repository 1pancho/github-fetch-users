import 'bootstrap/dist/css/bootstrap.min.css'
import { FC } from 'react';

type Props = {
  reposPerPage: number;
  totalRepos: number;
  paginate: (value: number) => void;
}

const Pagination: FC<Props> = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='repos-container-pagination'>
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
