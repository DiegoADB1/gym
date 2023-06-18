function UserConnect({props}) {
    return (
        <div className="welcome">Bem-vindo, <span className="username">{props.user.username}</span></div>
    )
}

export default UserConnect;