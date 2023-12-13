import { FC } from 'react'
import '../App.css'
import { IRepo } from '../models/models';


type Props = {
  repos: IRepo[];
  loading: boolean;
}

const Repositories: FC<Props> = ({ repos: data, loading: isLoading }) => {

  if (isLoading) {
    return (
      <div className="repos-content">
        <h5>Loading...</h5>
      </div>
    )
  }

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="repos-content">
          {data.map((repo) => (
            <div key={repo.id} className="repos-container">
              <div className="repo">
                <h5>{repo.name}</h5>
                <p>{repo.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'left' }}>No repositories found.</p>
      )}
    </div>
  )
}

export default Repositories;
