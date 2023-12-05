import React from 'react'

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="96"
    fill="#878888"
    className="bi bi-search"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
)

const StartScreen = () => {
  return (
    <div className="nothing-found-container">
      <div className="nothing-found">
        <SearchIcon />
        <h6 style={{ textAlign: 'center' }}>
        <p>Start with searching a Github user</p> 
        </h6>
      </div>
    </div>
  )
}

export default StartScreen
