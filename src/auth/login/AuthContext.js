import React, { createContext, useState } from 'react';
import config from "../../config.json";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
    async function Login(formInputData) {
        await axios.post(config.api.url + "/api/auth/login", formInputData)
        setUser("fodase")
    }

    return (
      <AuthContext.Provider value={{ user, Login }}>
        {children}
      </AuthContext.Provider>
    );
   };



export default AuthContext;
