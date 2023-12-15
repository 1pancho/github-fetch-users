import { useState, FC } from 'react'
import './App.css'
import './input.css'
import Content from './components/Content/Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsSearch } from 'react-icons/bs'
import { useDebounce } from './hooks/useDebounce'
import Header from './components/Header/Header'

const App: FC = () => {
  const [userName, setUserName] = useState('')
  const debounced = useDebounce(userName)

  return (
    <>
      <Header userName={userName} setUserName={setUserName} />
      {debounced.length > 0 ? (
        <Content userName={debounced} />
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

export default App
