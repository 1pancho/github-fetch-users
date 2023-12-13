import { useState, FC } from 'react'
import '../App.css'
import '../input.css'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsSearch } from 'react-icons/bs'
import { useDebounce } from '../hooks/debounce'
import Header from './Header'

type Props = {

}
const App: FC<Props> = () => {
  const [userName, setUserName] = useState('')
  const debounced = useDebounce(userName);

  // const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
  //   skip: debounced.length < 3
  // });


  return (
    <>
      <Header userName={userName} setUserName={setUserName} />
      {debounced.length > 0 ? <Content userName={debounced} /> : (
        <div className="nothing-found-container">
          <div className="nothing-found">
            <BsSearch style={{ width: '96px', height: '96px', color: '#878888' }} ></BsSearch>
            <h6 style={{ textAlign: 'center' }}>
              <p>Start with searching a Github user</p>
            </h6>
          </div>
        </div>
      )}
    </>
  )
}

export default App;

