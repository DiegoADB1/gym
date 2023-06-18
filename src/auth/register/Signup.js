import axios from "axios";
import jwt from 'jsonwebtoken';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config.json";
import "./register.css"

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()

        await axios.post(config.api.url + "/api/auth/signup", formInputData)
            .then(res => {
                localStorage.setItem("Authorization", res.data)
                let jsonDecoded = jwt.decode(res.data)
                localStorage.setItem("username", jsonDecoded.sub)
                navigate("/")
            })
            .then(res => refreshPage())
            .catch(res => {
                if (res.status != 200) {
                    alert("Usuário já existe")
                    return
                }
            })
    }

    
    function refreshPage(){ 
        window.location.reload(); 
      }

    const [formInputData, setFormInputData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const newInput = (data) => ({
            ...data,
            [e.target.name]: e.target.value,
        });
        setFormInputData(newInput);
    };


    return (
        <div className="register_box">
        <form onSubmit={handleSubmit}>
            <label>
                Usuário:
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Senha:
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <br />
            <button type="submit">Enviar</button>
            <div>
                <Link className="btn btn-primary" to="/login">
                    Login
                </Link>
            </div>
        </form>
        </div>
    )
}

export default Signup;