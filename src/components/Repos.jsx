import React from 'react'

const Repos = ({ repos, loading }) => {
  if (loading) {
    return (
      <div className="repos-content">
        <h5>Loading...</h5>
      </div>
    )
  }

  return (
    <div>
      {repos && repos.length > 0 ? (
        <div className="repos-content">
          {repos.map((repo) => (
            <div key={repo.id} className="repos-container">
              <div className="repo">
                <h5>{repo.name}</h5>
                <p className="repo-description">{repo.description}</p>
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

export default Repos
