import { useState} from 'react'
import '../App.css'
import Pagination from './Pagination.jsx'
import Avatar from './User.js'
import { FC } from 'react'
import { useGetUserReposQuery } from '../store/github/github.api.js'
import Repositories from './Repositories.js'
import { useDebounce } from '../hooks/debounce.js'

type Props = {
  userName: string;
}

const Content: FC<Props> = ({ userName }) => {
  const debounced = useDebounce(userName);
  const { data, isLoading } = useGetUserReposQuery(debounced);

  const [currentPage, setCurrentPage] = useState(1)
  const [reposPerPage] = useState(4)


  const lastRepoIndex = currentPage * reposPerPage
  const firstRepoIndex = lastRepoIndex - reposPerPage
  const currentRepo = data ? data.slice(firstRepoIndex, lastRepoIndex) : [];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="content-container">
      <Avatar userName={userName}/>
      <div>
        <h3>Repositories</h3>
        <div>
          <Repositories repos={currentRepo} loading={isLoading}/>
          <Pagination
            reposPerPage={reposPerPage}
            totalRepos={data?.length || 0}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  )
}

export default Content;

