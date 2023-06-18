import { useEffect, useLayoutEffect, useState } from 'react';
import { userContext } from '../../context/UserContext';
import Login from './Login';
import "./userLogin.css"
import UserConnect from './UserConnect';
import User from './UseState';

function UserLogin() {
    const [user, setUser] = useState({});
    const [isAuthenticated, setAuthenticate] = useState(false)

    return (
        <>
            <userContext.Consumer>
                {(value) => {
                    setUser(value)

                    if (value.username == undefined) {
                        setAuthenticate(false)
                        return
                    }

                    setAuthenticate(true)
                }}
            </userContext.Consumer>
            {
                isAuthenticated ?
                    <UserConnect props={{ user }} />
                    :
                    <Login />
            }
        </>
    )
}


export default UserLogin