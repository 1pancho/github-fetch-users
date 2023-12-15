import { useState, FC } from 'react'
import Pagination from '../Pagination/Pagination.tsx'
import Avatar from '../User/User.tsx'
import Repositories from '../Repositories/Repositories.tsx'
import { useDebounce } from '../../hooks/useDebounce.tsx'
import { useGetUserReposQuery } from '../../store/github/github.js'
import styles from './Content.module.css'
import { BsSearch } from 'react-icons/bs'
type Props = {
  userName: string
}

const Content: FC<Props> = ({ userName }) => {
  console.log(userName)
  const debounced = useDebounce(userName)
  const { data, isLoading } = useGetUserReposQuery(debounced)

  const defaultCurrentPage = 1;
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage)
  const [reposPerPage] = useState(4)

  const lastRepoIndex = currentPage * reposPerPage
  const firstRepoIndex = lastRepoIndex - reposPerPage
  const currentRepo = data ? data.slice(firstRepoIndex, lastRepoIndex) : []

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      {debounced.length > 0 ? (
        <div className={styles.contentContainer}>
          <Avatar userName={userName} />
          <div>
            <h3>Repositories</h3>
            <div>
              <Repositories repos={currentRepo} loading={isLoading} />
              <Pagination
                reposPerPage={reposPerPage}
                totalRepos={data?.length || 0}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="nothing-found-container">
          <div className="nothing-found">
            <BsSearch className="bsSearch"></BsSearch>
            <h6>Start with searching a Github user</h6>
          </div>
        </div>
      )}
    </>
  )
}

export default Content
