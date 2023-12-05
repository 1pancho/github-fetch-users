import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from './App'
import './App.css'
import { ReactSVG } from 'react-svg'
import People from './assets/People.svg'
import Person from './assets/Person.svg'
import Repos from './components/Repos.jsx'
import Pagination from './components/Pagination.jsx'

const GithubSearch = () => {
  const { userName } = useContext(UserContext)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [reposPerPage] = useState(4)
  const [githubData, setGithubData] = useState(null)

  const gitHubUrl = `https://api.github.com/users/${userName}`

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true)
      const userData = await axios.get(gitHubUrl)
      setGithubData(userData.data)

      const reposData = await axios.get(userData.data.repos_url)
      console.log(reposData.data)
      setRepos(reposData.data)
      setLoading(false)
    }
    getUserData()
  }, [gitHubUrl])

  const lastRepoIndex = currentPage * reposPerPage
  const firstRepoIndex = lastRepoIndex - reposPerPage
  const currentRepo = repos.slice(firstRepoIndex, lastRepoIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="content-container">
      {githubData && (
        <div className="avatar">
          <img
            src={githubData.avatar_url}
            height="200"
            width="200"
            alt="Avatar"
            style={{ borderRadius: '50%', overflow: 'hidden' }}
          />
          <div className="avatar-name">
            <h4>{githubData.name}</h4>
            <p style={{ color: '#2962E3' }}>{githubData.login}</p>
          </div>
          <div className="avatar-followers">
            <div className="avatar-item">
              <ReactSVG src={People} />
              <p>{githubData.followers} followers</p>
            </div>
            <div className="avatar-item">
              <ReactSVG src={Person} />
              <p>{githubData.following} following</p>
            </div>
          </div>
        </div>
      )}
      <div>
        <h3>Repositories</h3>
        <div>
          <Repos repos={currentRepo} loading={loading} />
          <Pagination
            reposPerPage={reposPerPage}
            totalRepos={repos.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  )
}

export default GithubSearch


//