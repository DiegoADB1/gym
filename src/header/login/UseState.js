import { useState } from "react";

const UseState = ({setUserState}) => {
    const [user, setUser] = useState({});

    setUser(setUserState)

    return {user, setUser}
}

export default UseState