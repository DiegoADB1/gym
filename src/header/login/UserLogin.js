import { useState } from 'react';
import { userContext } from '../../context/UserContext';
import Login from './Login';
import "./userLogin.css"

function UserLogin() {
    const [user, setUser] = useState({});

    const verifyUser = () => {
        console.log("teste")
        if (user.username == undefined) {
            const localUser = localStorage.getItem("username")
            if (localUser == undefined) {
                return <Login />
            }

            setUser({ username: localUser })
        }

        return <div className="welcome">Bem-vindo, <span className="username">{user.username}</span></div>
    }

    return (
        <>
            <userContext.Consumer>
                {(value) => {
                    setUser(value)
                }}
            </userContext.Consumer>
            <div>{verifyUser()}</div>
        </>
    )
}


export default UserLogin