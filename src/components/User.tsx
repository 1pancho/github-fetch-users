import { FC } from "react";
import '../App.css'
import { ReactSVG } from 'react-svg'
import People from '../assets/People.svg'
import Person from '../assets/Person.svg'
import { useSearchUsersQuery } from "../store/github/github.api";

type Props = {
    userName: string;
}

const Avatar: FC<Props> = ({ userName }) => {
    const { data } = useSearchUsersQuery(userName);
    const { avatar_url, followers, login, following, name } = data || {};

    return (
        <>
            {data && (
                <div className="avatar">
                    <img
                        src={avatar_url}
                        height="200"
                        width="200"
                        alt="Avatar"
                        style={{ borderRadius: '50%', overflow: 'hidden' }}
                    />
                    <div className="avatar-name">
                        <h4>{name}</h4>
                        <p style={{ color: '#2962E3' }}>{login}</p>
                    </div>
                    <div className="avatar-followers">
                        <div className="avatar-item">
                            <ReactSVG src={People} />
                            <p>{followers} followers</p>
                        </div>
                        <div className="avatar-item">
                            <ReactSVG src={Person} />
                            <p>{following} following</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Avatar;