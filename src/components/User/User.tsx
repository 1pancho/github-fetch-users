import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import People from '../../assets/People.svg'
import Person from '../../assets/Person.svg'
import { useSearchUsersQuery } from '../../store/github/github'
import styles from './User.module.css'

type Props = {
  userName: string
}

const User: FC<Props> = ({ userName }) => {
  const { data } = useSearchUsersQuery(userName)
  const { avatar_url, followers, login, following, name } = data || {}

  return (
    <>
      {data && (
        <div className={styles.avatar}>
          <img src={avatar_url} alt="Avatar" className={styles.avatarImage} />
          <div className={styles.userName}>
            <h4>{name}</h4>
            <p>{login}</p>
          </div>
          <div className={styles.userFollowers}>
            <div className={styles.userItem}>
              <ReactSVG src={People} />
              <p>{followers} followers</p>
            </div>
            <div className={styles.userItem}>
              <ReactSVG src={Person} />
              <p>{following} following</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default User
