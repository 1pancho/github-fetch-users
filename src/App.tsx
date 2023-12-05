import { useState, useContext, createContext } from 'react'
import NavBar from './Navbar'
import StartScreen from './StartScreen'
import './App.css'
import GithubSearch from './GithubSearch'

export const UserContext = createContext()

function App() {
  const [userName, setUserName] = useState('')

  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <NavBar />
        {userName.length > 0 ? <GithubSearch /> : <StartScreen />}
      </UserContext.Provider>
    </>
  )
}

export default App
