import { FC } from 'react'
import { IRepo } from '../../models/models'
import styles from './Repositories.module.css'
import Loading from './Loading'

type Props = {
  repos: IRepo[]
  loading: boolean
}

const Repositories: FC<Props> = ({ repos: data, loading: isLoading }) => {
  const hasData = data && data.length > 0

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      {hasData ? (
        <div className={styles.reposContent}>
          {data.map((repo) => (
            <div key={repo.id} className={styles.reposContainer}>
              <div className={styles.repo}>
                <h5>{repo.name}</h5>
                <p>{repo.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  )
}

export default Repositories
