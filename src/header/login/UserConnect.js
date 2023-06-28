function UserConnect({ props }) {
    const handleLogout = e => {
        localStorage.clear()
        refreshPage()
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <>
            <div className="welcome">Bem-vindo, <span className="username">{props.user.username}</span></div>
            <a className="logout" onClick={handleLogout}>Logout</a>
        </>
    )
}

export default UserConnect;